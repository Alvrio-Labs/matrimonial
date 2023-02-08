const router = require('express').Router();
const Message = require('../controllers/message_controller');

module.exports = (app) => {
  router.post('/', Message.create);
  router.delete('/:id', Message.delete);
  app.use('/api/messages', router);
};
