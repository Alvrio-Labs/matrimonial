const Joi = require('joi');
const fs = require('fs');
const YAML = require('js-yaml');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

//  schema to login
const loginSchema = Joi.object({
  email: Joi.required(),
  password: Joi.required(),
});

// validation with schema to login
const login = async (req, res, next) => {
  const value = await loginSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};

//  schema to forget Password
const forgertPasswordSchema = Joi.object({
  email: Joi.required(),
});

// validation to forget password
const forgotPassword = async (req, res, next) => {
  const value = await forgertPasswordSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};

//  schema to reset password
const resetPasswordSchema = Joi.object({
  newPassword: Joi.string().min(data.user.password.min).message(data.user.password.errorMessage)
    .required(),
  reset_token: Joi.required(),
});

// validation to reset password
const resetPassword = async (req, res, next) => {
  const value = resetPasswordSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};

module.exports = {
  resetPassword, forgotPassword, login,
};
