const Joi = require('joi');
const fs = require('fs');
const YAML = require('js-yaml');
const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
// schema to create a user
const userCreateSchema = Joi.object({
  first_name: Joi.string().required().max(50).min(2),
  last_name: Joi.string().required().max(50).min(2),
  email: Joi.string().min(3).required().email(),
  phone: Joi.number().integer().min(1000000000).max(9999999999).message(data.user.mobile.errorMessage).required(),
  gender: Joi.string().valid(...data.user.gender.type).required(),
  date_of_birth: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(data.user.password.regex)).min(8).message(data.user.password.errorMessage).required()
});
// validation with schema to create a user
const userCreateValidation = async (req, res, next) => {
  const value = await userCreateSchema.validate(req.body);
  if (value.error) {
    res.json({
      success: 0,
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};
const userGetSchema = Joi.object({
  id: Joi.string()
});
// validation with schema to get a user data
const getUserValidation = async (req, res, next) => {
  const value = userGetSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};
const userDeleteSchema = Joi.object({
  id: Joi.string()
});
// validation with schema to get a user data
const deleteUserValidation = async (req, res, next) => {
  const value = userDeleteSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};
// schema to create a user
const userUpdateSchema = Joi.object({
  first_name: Joi.string().required().max(50).min(2),
  last_name: Joi.string().required().max(50).min(2),
  email: Joi.string().min(3).required().email(),
  phone: Joi.number().integer().min(1000000000).max(9999999999).message(data.user.mobile.errorMessage).required(),
  gender: Joi.string().valid(...data.user.gender.type).required(),
  date_of_birth: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(data.user.password.regex)).min(8).message(data.user.password.errorMessage).required()
});
// validation with schema to create a user
const updateUserValidation = async (req, res, next) => {
  const value = userUpdateSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};

module.exports = {
  userCreateValidation, getUserValidation, deleteUserValidation, updateUserValidation
};