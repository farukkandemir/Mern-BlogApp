const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getSingleUser,
} = require("../controllers/userController");
const {registerValidation, validate} = require("../middlewares/validator");

router.route("/").get(getAllUsers);
router.route("/:userId").put(updateUser).delete(deleteUser).get(getSingleUser);
router.route("/register").post(registerValidation(), validate, createUser);

module.exports = router;
