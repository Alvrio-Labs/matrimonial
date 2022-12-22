const Joi = require('joi');

//  schema to login
const userLoginSchema = Joi.object({
  email: Joi.required(),
  password: Joi.required()
});

// validation with schema to login
exports.userLoginValidation = async (req, res, next) => {
  const value = await userLoginSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({      
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};

//  schema to forget Password
const userForgertPassword = Joi.object({
  email: Joi.required()
});

// validation to forget password
exports.userForgotPasswordValidation = async (req, res, next) => {
  const value = await userForgertPassword.validate(req.body);
  if (value.error) {
    res.status(400).json({     
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};

//  schema to reset password
const userResetPasswordSchema = Joi.object({
  newPassword: Joi.string().pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)).min(8).message('password must contain number,upper char , lower char , special char').required(),
  reset_token: Joi.required()
});

// validation to reset password
exports.userResetPasswordValidation = async (req, res, next) => {
  const value = userResetPasswordSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message
    });
  } else {
    next();
  }
};
