const router = require('express').Router();
const chat = require('../controllers/chat.controller');

module.exports = (app) => {
  router.post('/', chat.create);
  router.get('/:id', chat.show);
  app.use('/api/users/chats', router);
};
