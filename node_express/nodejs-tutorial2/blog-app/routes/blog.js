const express = require("express");
const router = express.Router();
const {
  upload,
  postBlog,
  getBlog,
  postComment,
} = require("../controllers/blog.controller.js");

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.post("/comment/:blogId", postComment);

router.get("/:id", getBlog);

router.post("/", upload.single("coverImage"), postBlog);

module.exports = router;
