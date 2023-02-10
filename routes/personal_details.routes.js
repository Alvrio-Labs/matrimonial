const router = require('express').Router();
const PI = require('../controllers/personal_details.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, PI.create);
  router.get('/:id', verifyToken, PI.show);
  router.put('/:id', verifyToken, PI.update);
  router.delete('/:id', verifyToken, PI.delete);
  app.use('/api/users/personal-info', router);
};
