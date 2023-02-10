const router = require('express').Router();
const Message = require('../controllers/messages.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, Message.create);
  router.delete('/:id', verifyToken, Message.delete);
  app.use('/api/messages', router);
};
