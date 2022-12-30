const router = require('express').Router();

const User = require('../../controllers/admin/admin.user.controller');
const token = require('../../utility/auth.policy');
const validation = require('../../validations/user.validation');

module.exports = (app) => {
  router.post('/', token, validation.create, User.create);
  router.get('/', token, User.findAll);
  router.get('/:id', validation.get, User.findOne);
  router.put('/:id', token, validation.update, User.update);
  router.delete('/:id', token, validation.deleteValidation, User.delete);
  app.use('/api/admin/users', router);
};

