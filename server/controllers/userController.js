const User = require("../model/User");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const {username, email, password} = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      blogs: [],
    });

    res.status(201).json({message: "User is successfully created"});
  } catch (errors) {
    res
      .status(409)
      .json({errors: {isTaken: "There is already a user with this credentials"}});
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find();

    if (allUser.length === 0) {
      return res.status(200).json({message: "There is no user"});
    }

    res.status(200).json(allUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUser = async (req, res) => {
  const {userId} = req.params;
  const updatedInfo = req.body;

  if (Object.keys(updatedInfo).length === 0)
    return res.status(400).json({message: "Please provide fields to update"});

  if (!userId) return res.status(400).json({message: `No user with the id of ${userId}`});

  try {
    const user = await User.findByIdAndUpdate(userId, updatedInfo, {new: true});
    res.status(200).json({message: "User is successfully updated", user});
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteUser = async (req, res) => {
  const {userId} = req.params;

  if (!userId) return res.status(400).json({message: `No user with the id of ${userId}`});

  try {
    await User.findByIdAndDelete(userId);
    res.status(200).json({message: "User is successfully deleted"});
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleUser = async (req, res) => {
  const {userId} = req.params;

  if (!userId) return res.status(400).json({message: `No user with the id of ${userId}`});

  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {createUser, getAllUsers, updateUser, deleteUser, getSingleUser};
