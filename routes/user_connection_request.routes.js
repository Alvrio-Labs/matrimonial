const router = require('express').Router();
const CR = require('../controllers/connection_requests.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', CR.create);
  router.get('/:id', verifyToken, CR.show);
  router.delete('/:id', verifyToken, CR.delete);
  app.use('/api/users/connection-request', router);
};
