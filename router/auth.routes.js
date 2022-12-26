module.exports = app => {
  const auth = require('../controllers/auth.controller');
  const { AuthValidation } = require('../validation/auth.validation');
  const router = require('express').Router();
  
  router.post('/login', AuthValidation.userLoginValidation, auth.login);
  router.post('/forget-password', AuthValidation.userForgotPasswordValidation, auth.forgetPassword);
  router.post('/resetpassword', AuthValidation.userResetPasswordValidation, auth.resetPassword);

  app.use('/api' , router);
};