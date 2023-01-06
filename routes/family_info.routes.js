const router = require('express').Router();
const FI = require('../controllers/family_info.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', FI.create);
  router.get('/:id', verifyToken, FI.show);
  router.put('/:id', FI.update);
  router.delete('/:id', FI.delete);
  app.use('/api/users/family-info', router);
};
