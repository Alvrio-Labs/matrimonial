const router = require('express').Router();
const Message = require('../controllers/messages.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, Message.create);
  router.get('/:id', verifyToken, Message.index);
  router.delete('/:id', verifyToken, Message.delete);
  app.use('/api/messages', router);
};
