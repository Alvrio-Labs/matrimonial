const router = require('express').Router();

const User = require('../controllers/users.controller');

module.exports = (app) => {
  router.post('/', User.create);
  router.get('/', User.findAll);
  router.put('/:id', User.update);
  router.delete('/:id', User.delete);
  app.use('/api/users', router);
};
