const router = require('express').Router();
const { verifyToken } = require('../policy/auth.policy');
const User = require('../controllers/users.controller');
const validation = require('../validations/user.validation');

module.exports = (app) => {
  router.post('/', User.create);
  router.get('/:id', User.findOne);
  router.put('/:id', verifyToken, validation.update, User.update);
  router.delete('/:id', validation.deleteValidation, User.delete);
  app.use('/api/users', router);
};
