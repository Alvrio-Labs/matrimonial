const router = require('express').Router();
const UP = require('../controllers/user_preferences.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', UP.create);
  router.get('/:id', verifyToken, UP.show);
  router.put('/:id', verifyToken, UP.update);
  router.delete('/:id', verifyToken, UP.delete);
  app.use('/api/users/preferences', router);
};
