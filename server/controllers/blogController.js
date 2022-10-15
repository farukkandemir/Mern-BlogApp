const mongoose = require("mongoose");
const Blog = require("../model/Blog");
const User = require("../model/User");

const getAllBlogs = async (req, res) => {
  const {authorId} = req.query;

  try {
    const allBlogs = await Blog.find({author: authorId});

    if (allBlogs == null || allBlogs.length === 0)
      return res.status(200).json({message: "There are no blogs to display"});

    res.status(200).json(allBlogs);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createBlog = async (req, res) => {
  const {title, blogBody, authorId} = req.body;
  const blogImage = req.file.originalname;

  if (!title || !blogBody)
    return res.status(400).json({message: "Title or BlogBody is required"});

  const user = await User.findById(authorId);

  if (!user) return res.status(400).json({message: "Unable to find the user"});

  const newPost = new Blog({
    title,
    blogBody,
    author: authorId,
    blogImage,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newPost.save({session});
    user.blogs.push(newPost);
    await user.save({session});
    await session.commitTransaction();

    res.status(201).json({message: "Blog is successfully created", newPost});
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteBlog = async (req, res) => {
  const {blogId} = req.params;

  if (!blogId) return res.status(400).json({message: "Please provide a id for blog"});

  // return res.json(author);

  try {
    const {author} = await Blog.findById(blogId).populate("author");
    await Blog.findByIdAndDelete(blogId);
    author.blogs.pull(blogId);
    await author.save();
    res.status(200).json({message: "Blog is successfully deleted"});
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateBlog = async (req, res) => {
  const {blogId} = req.params;
  const updatedBlogInfo = req.body;

  if (!blogId) return res.status(400).json({message: "Please provide an id for blod"});
  if (Object.keys(updatedBlogInfo).length === 0)
    return res.status(400).json({message: "Please provide information to update"});
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updatedBlogInfo, {
      new: true,
    });

    res.status(200).json({message: "Blog is successfully updated", updatedBlog});
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleBlog = async (req, res) => {
  const {blogId} = req.params;

  try {
    const singleBlog = await Blog.findById(blogId);

    res.status(200).json(singleBlog);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {createBlog, getAllBlogs, deleteBlog, updateBlog, getSingleBlog};
