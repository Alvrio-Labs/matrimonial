const router = require('express').Router();
const chat = require('../controllers/chat_rooms.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, chat.create);
  router.get('/:id', verifyToken, chat.show);
  app.use('/api/chats', router);
};
