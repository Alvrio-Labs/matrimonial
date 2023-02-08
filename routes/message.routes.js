const router = require('express').Router();
const Message = require('../controllers/message_controller');

module.exports = (app) => {
  router.post('/', Message.create);
  app.use('/api/users/messages', router);
};
