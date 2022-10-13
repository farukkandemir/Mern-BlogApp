const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const handleLogin = async (req, res) => {
  const {username, password} = req.body;

  try {
    const user = await User.findOne({username}).populate("blogs");

    if (!user) return res.status(400).json({message: "User is not found"});

    const isPwdMatch = await bcrypt.compare(password, user.password);

    if (!isPwdMatch) return res.status(400).json({message: "Password is not correct"});

    const accessToken = jwt.sign(
      {username, id: user._id},
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: "30m"}
    );

    // const refreshToken = jwt.sign(
    //   {username, id: user._id},
    //   process.env.REFRESH_SECRET_TOKEN,
    //   {expiresIn: "1d"}
    // );

    // user.refreshToken = refreshToken;
    // await user.save();

    // res.cookie("jwt", refreshToken, {httpOnly: true, maxAge: 24 * 68 * 68 * 1000});
    res.status(200).json({
      message: "Successfully logged in",
      user: {username: user.username, id: user._id, blogs: user.blogs, accessToken},
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {handleLogin};
