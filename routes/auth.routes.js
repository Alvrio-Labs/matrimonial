module.exports = app => {
  const auth = require('../controllers/auth.controller');
  const { AuthValidation } = require('../validations/auth.validation');
  const router = require('express').Router();
  
  router.post('/login', AuthValidation.loginValidation, auth.login);
  router.post('/forget-password', AuthValidation.forgotPasswordValidation, auth.forgetPassword);
  router.post('/resetpassword', AuthValidation.resetPasswordValidation, auth.resetPassword);

  app.use('/api' , router);
};