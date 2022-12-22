module.exports = app => {
  const UserAuth = require('../controller/auth.controller');
  const { userLoginValidation } = require('../validation/auth.validation');
  const router = require('express').Router();

  router.post('/login', userLoginValidation, UserAuth);

  app.use('/api' , router);
};