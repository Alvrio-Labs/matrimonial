const router = require('express').Router();

const USER = require('../../controllers/admin/admin.user.controller');
const token = require('../../utility/auth.policy');
const validation = require('../../validations/user.validation');

module.exports = (app) => {
  // Create a new User
  router.post('/', token, validation.create, USER.create);
  // Retrieve all Users
  router.get('/', token, USER.findAll);
  // Retrieve a single User with id
  router.get('/:id', validation.get, USER.findOne);
  // Update a User with id
  router.put('/:id', token, validation.update, USER.update);
  // Delete a User with id
  router.delete('/:id', token, validation.deleteValidation, USER.delete);
  app.use('/api/admin/users', router);
};

