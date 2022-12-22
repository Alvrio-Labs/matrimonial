module.exports = app => {
  const UserAuth = require('../controller/auth.controller');
  const { userLoginValidation } = require('../validation/auth.validation');
  const { userForgotPasswordValidation } = require('../validation/auth.validation');
  const { userResetPasswordValidation } = require('../validation/auth.validation');

  const router = require('express').Router();
  
  router.post('/login', userLoginValidation, UserAuth.login);
  router.post('/forgetpassword', userForgotPasswordValidation, UserAuth.forgetPassword);
  router.post('/resetpassword', userResetPasswordValidation, UserAuth.resetPassword);

  app.use('/api' , router);
};