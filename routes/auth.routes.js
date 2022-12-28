module.exports = (app) => {
  const auth = require('../controllers/auth.controller');
  const { resetPasswordValidation, forgotPasswordValidation, loginValidation, } = require('../validations/auth.validation');
  const router = require('express').Router();
  router.post('/login', loginValidation, auth.login);
  router.post('/forget-password', forgotPasswordValidation, auth.forgetPassword);
  router.post('/reset-password', resetPasswordValidation, auth.resetPassword);

  app.use('/api', router);
};