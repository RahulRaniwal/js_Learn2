const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Blog =require("../models/blog.model.js");
const Comment = require("../models/comment.model.js");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve(`./public/uploads/${req.user._id}`);
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null , fileName);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const postBlog = async (req , res) =>{
  const {title , content} = req.body;
  const coverImage = `/uploads/${req.user._id}/${req.file?.filename}`;

  try{
    const blog = await Blog.create({title, content, coverImageUrl: coverImage, author: req.user._id});
    // res.status(201).json({message: "Blog created successfully", blog});
    return res.redirect("/");
  }catch(error){
    console.error(error);
    res.status(500).json({message: "Server error"});
  }

}

const  getBlog = async (req , res) =>{
  const { id } = req.params;
  try{
    const blog = await Blog.findById(id).populate('author');
    const comments = await Comment.find({blogId: id}).populate('author');
    // console.log("Id of blog is: " , id);
    // console.log("Cooment" , comments);
    return res.render("blog" , {
      user: req.user,
      blog,
      comments,
    })
  }catch(error){
    console.error(error);
    res.status(500).json({message: "Server error"});
  }
}

const postComment = async (req , res)=>{
  const {blogId} = req.params;
  const {content} = req.body;

  try {
    await Comment.create({
      content: content,
      author: req.user._id, // Directly use req.user._id
      blogId: blogId, // Match the parameter name
    });

    return res.redirect(`/api/blog/${blogId}`); // Redirect correctly
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = { postBlog, upload, getBlog, postComment };