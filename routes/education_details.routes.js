const router = require('express').Router();
const EI = require('../controllers/education_details.controller');
const { verifyToken } = require('../policy/auth.policy');

module.exports = (app) => {
  router.post('/', EI.create);
  router.get('/:id', verifyToken, EI.show);
  router.put('/:id', verifyToken, EI.update);
  router.delete('/:id', verifyToken, EI.delete);
  app.use('/api/user/education-details', router);
};
