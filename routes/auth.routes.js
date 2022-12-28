const router = require('express').Router();

const auth = require('../controllers/auth.controller');
const { resetPasswordValidation, forgotPasswordValidation, loginValidation } = require('../validations/auth.validation');

module.exports = (app) => {
  router.post('/login', loginValidation, auth.login);
  router.post('/forget-password', forgotPasswordValidation, auth.forgetPassword);
  router.post('/reset-password', resetPasswordValidation, auth.resetPassword);

  app.use('/api', router);
};
