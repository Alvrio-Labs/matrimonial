const router = require('express').Router();
const PI = require('../controllers/personal_info.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', PI.create);
  router.get('/:id', verifyToken, PI.show);
  router.put('/:id', verifyToken, PI.update);
  router.delete('/:id', verifyToken, PI.delete);
  app.use('/api/user/personal-info', router);
};
