const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },

    blogImage: {
      type: String,
      required: true,
    },

    blogBody: {
      type: String,
      required: true,
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {timestamps: true}
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
