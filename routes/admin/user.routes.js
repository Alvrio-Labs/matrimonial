const router = require('express').Router();

const User = require('../../controllers/admin/user.controller');
const { verifyToken } = require('../../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, User.create);
  router.get('/', verifyToken, User.index);
  router.get('/:id', User.show);
  router.put('/:id', verifyToken, User.update);
  router.delete('/:id', verifyToken, User.delete);
  app.use('/api/admin/users', router);
};
