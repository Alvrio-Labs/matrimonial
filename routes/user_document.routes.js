const router = require('express').Router();
const UD = require('../controllers/user_document.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, UD.create);
  // router.delete('/:id', verifyToken, UD.delete);
  app.use('/api/users/upload-document', router);
};
