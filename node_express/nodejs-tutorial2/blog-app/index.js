const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require("./routes/user.js");
const blogRoutes = require("./routes/blog.js");
const {connectToMongoDB} = require("./connect.js");
const { authenticate } = require('./middlewares/authentication.middleware.js');
const Blog = require("./models/blog.model.js");

const app = express();

const port = 5000;

// mongodb connection function
connectToMongoDB("mongodb://127.0.0.1:27017/blog-db").then(() => {
  console.log("Conected to MongoDB");
});

app.set("view engine" , "ejs");
app.set("views" , path.resolve("./views"));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(authenticate);
app.use(express.static(path.resolve('./public')));

// routes
app.use("/api/user" , userRoutes);
app.use("/api/blog" , blogRoutes);
app.get('/' , async(req , res) =>{
  try{
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate("author");
    res.render("home" , {user: req.user, blogs});
  }catch(error){
    console.log('Error fetching blogs:' , error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port , () =>{
  console.log(`Server is running on port ${port}`);
})