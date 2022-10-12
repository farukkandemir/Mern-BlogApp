const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      unique: true,
    },

    blogs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Blog",
    },
  },
  {timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;
