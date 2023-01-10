const router = require('express').Router();
const User = require('../controllers/users.controller');
const validation = require('../validations/user.validation');

module.exports = (app) => {
  router.post('/', User.create);
  router.get('/:id', User.show);
  router.put('/:id', validation.update, User.update);
  router.delete('/:id', validation.deleteValidation, User.delete);
  app.use('/api/users', router);
};
