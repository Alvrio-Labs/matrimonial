const Joi = require('joi');
const fs = require('fs');
const YAML = require('js-yaml');

const validation = fs.readFileSync('../yaml/validation.yaml');
const data = YAML.load(validation);
// schema to create a user
const createSchema = Joi.object({
  first_name: Joi.string().required().max(data.user.firstName.max).min(data.user.firstName.min),
  last_name: Joi.string().required().max(data.user.lastName.max).min(data.user.lastName.min),
  email: Joi.string().min(3).required().email(),
  phone: Joi.number().integer().min(data.user.mobile.min).max(data.user.mobile.max)
    .message(data.user.mobile.errorMessage)
    .required(),
  gender: Joi.string().valid(...data.user.gender.type).message(data.user.gender.errorMessage).required(),
  date_of_birth: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(data.user.password.regex)).min(data.user.password.min).message(data.user.password.errorMessage)
    .required(),
});
// validation with schema to create a user
const create = async (req, res, next) => {
  const value = await createSchema.validate(req.body);
  if (value.error) {
    res.json({
      success: 0,
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};
const getSchema = Joi.object({
  id: Joi.string(),
});
// validation with schema to get a user data
const get = async (req, res, next) => {
  const value = getSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};
const deleteSchema = Joi.object({
  id: Joi.string(),
});
// validation with schema to get a user data
const deleteValidation = async (req, res, next) => {
  const value = deleteSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};
// schema to create a user
const updateSchema = Joi.object({
  first_name: Joi.string().required().max(data.user.firstName.max).min(data.user.firstName.min),
  last_name: Joi.string().required().max(data.user.lastName.max).min(data.user.lastName.min),
  email: Joi.string().min(3).required().email(),
  phone: Joi.number().integer().min(data.user.mobile.min).max(data.user.mobile.max)
    .message(data.user.mobile.errorMessage)
    .required(),
  gender: Joi.string().valid(...data.user.gender.type).required(),
  date_of_birth: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(data.user.password.regex)).min(data.user.password.min).message(data.user.password.errorMessage)
    .required(),
});
// validation with schema to create a user
const update = async (req, res, next) => {
  const value = updateSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message,
    });
  } else {
    next();
  }
};

module.exports = {
  create, get, update, deleteValidation,
};
