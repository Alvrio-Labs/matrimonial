
module.exports = app => {
  const USER = require('../controllers/users.controller');
  const router = require('express').Router();
  router.post('/', USER.create);
  router.get('/', USER.findAll);
  router.put('/:id', USER.update);
  router.delete('/:id', USER.delete);
  app.use('/api/user', router);
};