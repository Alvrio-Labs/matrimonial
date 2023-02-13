const router = require('express').Router();

const User = require('../../controllers/admin/user.controller');
const validation = require('../../validations/user.validation');
const { verifyToken } = require('../../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, validation.create, User.create);
  router.get('/', User.index);
  router.get('/:id', verifyToken, validation.get, User.show);
  router.put('/:id', verifyToken, validation.update, User.update);
  router.delete('/:id', verifyToken, validation.deleteValidation, User.delete);
  app.use('/api/admin/users', router);
};
