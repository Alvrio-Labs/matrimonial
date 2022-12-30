const router = require('express').Router();

const USER = require('../../controllers/admin/admin.user.controller');
const token = require('../../utility/auth.policy');
const validation = require('../../validations/user.validation');

module.exports = (app) => {
  router.post('/', token, validation.create, USER.create);
  router.get('/', token, USER.findAll);
  router.get('/:id', validation.get, USER.findOne);
  router.put('/:id', token, validation.update, USER.update);
  router.delete('/:id', token, validation.deleteValidation, USER.delete);
  app.use('/api/admin/users', router);
};

