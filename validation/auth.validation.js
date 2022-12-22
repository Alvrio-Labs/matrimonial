const Joi = require('joi');

//  schema to login
const userLoginSchema = Joi.object({
  email: Joi.required(),
  password: Joi.required()
});

// validation with schema to login
const userLoginValidation = async (req, res, next) => {
  const value = await userLoginSchema.validate(req.body);
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
  userLoginValidation
};
