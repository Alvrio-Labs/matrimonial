const router = require('express').Router();
const CR = require('../controllers/user_connections.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.get('/:id', verifyToken, CR.show);
  router.delete('/:id', verifyToken, CR.delete);
  app.use('/api/users/connection', router);
};
