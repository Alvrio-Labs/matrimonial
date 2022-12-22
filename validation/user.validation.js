const Joi = require('joi');

// schema to create a user
const userCreateSchema = Joi.object({
  first_name: Joi.string().required().max(50).min(2),
  last_name: Joi.string().required().max(50).min(2),
  email: Joi.string().min(3).required().email(),
  phone: Joi.number().integer().min(1000000000).max(9999999999).message('Invalid mobile number').required(),
  gender: Joi.string().valid('Male', 'Female', 'Others').required(),
  date_of_birth: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)).min(8).message('password must contain number,upper char , lower char , special char').required()
});

// validation with schema to create a user
const userCreateValidation = async (req, res, next) => {
  const value = userCreateSchema.validate(req.body);
  if (value.error) {
    res.json({
      success: 0,
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};

// schema to get a user data
const userGetSchema = Joi.object({
  id: Joi.string()
});

// validation with schema to get a user data
const userGetValidation = async (req, res, next) => {
  const value = userGetSchema.validate(req.body);
  if (value.error) {
    res.json({
      success: 0,
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};

// schema to get a user data
const userDeleteSchema = Joi.object({
  id: Joi.string()
});

// validation with schema to get a user data
const userDeleteValidation = async (req, res, next) => {
  const value = userDeleteSchema.validate(req.body);
  if (value.error) {
    res.json({
      success: 0,
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
  phone: Joi.number().integer().min(1000000000).max(9999999999).message('Invalid mobile number').required(),
  gender: Joi.string().valid('Male', 'Female', 'Others').required(),
  date_of_birth: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)).min(8).message('password must contain number,upper char , lower char , special char').required()
});

// validation with schema to create a user
const userUpdateValidation = async (req, res, next) => {
  const value = userUpdateSchema.validate(req.body);
  if (value.error) {
    res.json({
      success: 0,
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};

module.exports = {
  userCreateValidation, userGetValidation, userDeleteValidation, userUpdateValidation
};