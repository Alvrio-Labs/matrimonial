const Joi = require('joi');
const fs = require('fs');
const YAML = require('js-yaml');
const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

//  schema to login
const userLoginSchema = Joi.object({
  email: Joi.required(),
  password: Joi.required(),
});

// validation with schema to login
const userLoginValidation = async (req, res, next) => {
  const value = await userLoginSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};

//  schema to forget Password
const userForgertPassword = Joi.object({
  email: Joi.required(),
});

// validation to forget password
const userForgotPasswordValidation = async (req, res, next) => {
  const value = await userForgertPassword.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};

//  schema to reset password
const userResetPasswordSchema = Joi.object({
  newPassword: Joi.string().pattern(new RegExp(data.user.password.regex)).min(8).message(data.user.password.errorMessage).required(),
  reset_token: Joi.required(),
});

// validation to reset password
const userResetPasswordValidation = async (req, res, next) => {
  const value = userResetPasswordSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};

module.exports = {
  userResetPasswordValidation, userForgotPasswordValidation, userLoginValidation,
};
