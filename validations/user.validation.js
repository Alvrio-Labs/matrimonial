const Joi = require('joi');
const fs = require('fs');
const YAML = require('js-yaml');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const date = new Date().getFullYear();

// // const dateOfBirth = req.body.date_of_birth;
// const today = new Date();
// const year = today.getFullYear();
// // const year = today.split('-')[0];
// console.log(year);
// // const dateSplit = dateOfBirth.split('-');
// // const year = dateSplit[2];
// // const age = today.getFullYear() - year;
const date18YearsAgo = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365 * 18);


// schema to create a user
const createSchema = Joi.object({
  first_name: Joi.string().required().max(data.user.firstName.max).min(data.user.firstName.min)
    .message(data.api_messages.validation.notEmpty),
  last_name: Joi.string().required().max(data.user.lastName.max).min(data.user.lastName.min)
    .message(data.api_messages.validation.notEmpty),
  email: Joi.string().min(3).required().email()
    .message(data.api_messages.validation.isEmail),
  phone: Joi.number().integer().min(data.user.mobile.min).max(data.user.mobile.max)
    .message(data.user.mobile.errorMessage)
    .required(),
  data_of_birth: Joi.date().min(date - 18).required(),
  // date_of_birth: Joi.date().min(date - date18YearsAgo).required(),
  // date_of_birth: Joi.date().min(Date.now - 18).required(),

  // date_of_birth: Joi.date().greater(year - 18).required,
  // date_of_birth: Joi.date().min(year - 18).required,
  password: Joi.string().min(data.user.password.min).message(data.user.password.errorMessage)
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
  first_name: Joi.string().max(data.user.firstName.max).min(data.user.firstName.min),
  last_name: Joi.string().max(data.user.lastName.max).min(data.user.lastName.min),
  email: Joi.string().min(3).email(),
  phone: Joi.number().integer().min(data.user.mobile.min).max(data.user.mobile.max)
    .message(data.user.mobile.errorMessage),
  // date_of_birth: Joi.string(),
  // date_of_birth: Joi.date().min().required(),
  // birthdate:
  password: Joi.string().min(data.user.password.min).message(data.user.password.errorMessage),
});
// // validation with schema to create a user


// validation with schema to update a user
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
