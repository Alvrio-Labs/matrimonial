module.exports = (app) => {
  const UserAuth = require('../controllers/auth.controller');
  const {   userResetPasswordValidation, userForgotPasswordValidation, userLoginValidation
  } = require('../validations/auth.validation');
  const router = require('express').Router();

  router.post('/login', userLoginValidation, UserAuth.login);
  router.post('/forget-password', userForgotPasswordValidation, UserAuth.forgetPassword);
  router.post('/reset-password', userResetPasswordValidation, UserAuth.resetPassword);

  app.use('/api' , router);
};