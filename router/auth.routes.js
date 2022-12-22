module.exports = app => {
  const UserAuth = require('../controller/auth.controller');
  const AuthValidation = require('../validation/auth.validation');
  const router = require('express').Router();
  
  router.post('/login', AuthValidation.userLoginValidation, UserAuth.login);
  router.post('/forget-password', AuthValidation.userForgotPasswordValidation, UserAuth.forgetPassword);
  router.post('/resetpassword', AuthValidation.userResetPasswordValidation, UserAuth.resetPassword);

  app.use('/api' , router);
};