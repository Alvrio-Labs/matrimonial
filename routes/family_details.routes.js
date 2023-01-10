const router = require('express').Router();
const FI = require('../controllers/family_details.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', FI.create);
  router.get('/:id', verifyToken, FI.show);
  router.put('/:id', verifyToken, FI.update);
  router.delete('/:id', verifyToken, FI.delete);
  app.use('/api/users/family-info', router);
};
