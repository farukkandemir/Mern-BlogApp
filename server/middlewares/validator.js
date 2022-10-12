const {body, validationResult} = require("express-validator");

const registerValidation = () => {
  return [
    body("username")
      .trim()
      .exists()
      .withMessage("Username cannot be empty! ")
      .isLength({min: 5})
      .withMessage("Username must be at least 5 charecters"),

    body("email")
      .isEmail()
      .withMessage("Please provide a proper email! (example.gmail.com)"),

    body("password")
      .trim()
      .exists()
      .withMessage("Password cannot be empty")
      .isLength({min: 3})
      .withMessage("Password must be at least 3 charecters"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extracredErrors = [];
  errors.array().map((err) => extracredErrors.push({[err.param]: err.msg}));

  return res.status(422).json({
    errors: extracredErrors,
  });
};

module.exports = {registerValidation, validate};
