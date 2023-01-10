const router = require('express').Router();
const LS = require('../controllers/life_style.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', verifyToken, LS.create);
  router.get('/:id', verifyToken, LS.show);
  router.put('/:id', verifyToken, LS.update);
  router.delete('/:id', verifyToken, LS.delete);
  app.use('/api/users/life-style', router);
};
