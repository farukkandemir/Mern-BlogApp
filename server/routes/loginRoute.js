const {handleLogin} = require("../controllers/loginController");
const {loginValidation, validate} = require("../middlewares/validator");

const router = require("express").Router();

router.route("/").post(loginValidation(), validate, handleLogin);

module.exports = router;
