const router = require('express').Router();
const Message = require('../controllers/message_controller');

module.exports = (app) => {
  router.post('/', Message.create);
  router.get('/:id', Message.show);
  app.use('/api/users/message', router);
};
