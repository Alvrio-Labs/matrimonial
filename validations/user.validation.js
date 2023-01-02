const Joi = require('joi');
const fs = require('fs');
const YAML = require('js-yaml');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
// schema to create a users
const createSchema = Joi.object({
  first_name: Joi.string().required().max(data.users.firstName.max).min(data.users.firstName.min),
  last_name: Joi.string().required().max(data.users.lastName.max).min(data.users.lastName.min),
  email: Joi.string().min(3).required().email(),
  phone: Joi.number().integer().min(data.users.mobile.min).max(data.users.mobile.max)
    .message(data.users.mobile.errorMessage)
    .required(),
  // gender: Joi.array().valid(data.users.gender.type).message(data.users.errorMessage),
  date_of_birth: Joi.string().required(),
  // password: Joi.string().pattern(new RegExp(data.users.password.regex)).min(data.users.password.min).message(data.users.password.errorMessage)
  //   .required(),
  // eslint-disable-next-line prefer-regex-literals
  password: Joi.string().pattern(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/)).min(8).message('password must contain number,upper char , lower char , special char')
    .required(),
});
// validation with schema to create a users
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
// validation with schema to get a users data
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
// validation with schema to get a users data
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
// schema to create a users
const updateSchema = Joi.object({
  first_name: Joi.string().required().max(data.users.firstName.max).min(data.users.firstName.min),
  last_name: Joi.string().required().max(data.users.lastName.max).min(data.users.lastName.min),
  email: Joi.string().min(3).required().email(),
  phone: Joi.number().integer().min(data.users.mobile.min).max(data.users.mobile.max)
    .message(data.users.mobile.errorMessage)
    .required(),
  // gender: Joi.array().valid(data.users.gender.type).message(data.users.errorMessage),
  date_of_birth: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(data.users.password.regex)).min(data.users.password.min).message(data.users.password.errorMessage)
    .required(),
});
// validation with schema to create a users
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


// const Joi = require('joi');
// const fs = require('fs');
// const YAML = require('js-yaml');

// const validation = fs.readFileSync('yaml/validation.yaml');
// const data = YAML.load(validation);
// // schema to create a users
// const createSchema = Joi.object({
//   first_name: Joi.string().required().max(data.users.firstName.max).min(data.users.firstName.min),
//   last_name: Joi.string().required().max(data.users.lastName.max).min(data.users.lastName.min),
//   email: Joi.string().min(3).required().email(),
//   phone: Joi.number().integer().min(data.users.mobile.min).max(data.users.mobile.max)
//     .message(data.users.mobile.errorMessage)
//     .required(),
//   // gender: Joi.string().valid(...data.users.gender.type).message(data.users.gender.errorMessage)
//   //   .required(),
//   // gender: Joi.string().valid(...data.users.gender.type).message(data.users.gender.errorMessage)
//   // .required(),
//   gender: Joi.array().valid(data.users.gender.type).message(data.users.errorMessage),
//   date_of_birth: Joi.string().required(),
//   // password: Joi.string().pattern(new RegExp(data.users.password.regex)).min(data.users.password.min).message(data.users.password.errorMessage)
//   //   .required(),
// });
// // validation with schema to create a users
// const create = async (req, res, next) => {
//   const value = await createSchema.validate(req.body);
//   if (value.error) {
//     res.json({
//       success: 0,
//       message: value.error.details[0].message,
//     });
//   } else {
//     next();
//   }
// };
// const getSchema = Joi.object({
//   id: Joi.string(),
// });
// // validation with schema to get a users data
// const get = async (req, res, next) => {
//   const value = getSchema.validate(req.body);
//   if (value.error) {
//     res.status(400).json({
//       message: value.error.details[0].message,
//     });
//   } else {
//     next();
//   }
// };
// const deleteSchema = Joi.object({
//   id: Joi.string(),
// });
// // validation with schema to get a users data
// const deleteValidation = async (req, res, next) => {
//   const value = deleteSchema.validate(req.body);
//   if (value.error) {
//     res.status(400).json({
//       message: value.error.details[0].message,
//     });
//   } else {
//     next();
//   }
// };
// // schema to create a users
// const updateSchema = Joi.object({
//   first_name: Joi.string().required().max(data.users.firstName.max).min(data.users.firstName.min),
//   last_name: Joi.string().required().max(data.users.lastName.max).min(data.users.lastName.min),
//   email: Joi.string().min(3).required().email(),
//   phone: Joi.number().integer().min(data.users.mobile.min).max(data.users.mobile.max)
//     .message(data.users.mobile.errorMessage)
//     .required(),
//   gender: Joi.string().valid(...data.users.gender.type).required(),
//   date_of_birth: Joi.string().required(),
//   password: Joi.string().pattern(new RegExp(data.users.password.regex)).min(data.users.password.min).message(data.users.password.errorMessage)
//     .required(),
// });
// // validation with schema to create a users
// const update = async (req, res, next) => {
//   const value = updateSchema.validate(req.body);
//   if (value.error) {
//     res.status(400).json({
//       message: value.error.details[0].message,
//     });
//   } else {
//     next();
//   }
// };

// module.exports = {
//   create, get, update, deleteValidation,
// };
