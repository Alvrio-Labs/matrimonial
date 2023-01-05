const router = require('express').Router();

const auth = require('../controllers/auth.controller');
const { resetPasswordValidation, forgotPasswordValidation, loginValidation } = require('../validations/auth.validation');

module.exports = (app) => {
  router.post('/login', auth.login);
  router.post('/forget-password', auth.forgetPassword);
  router.post('/reset-password', auth.resetPassword);

  app.use('/api', router);
};
