const router = require('express').Router();
const FI = require('../controllers/familyInfo.controller');

module.exports = (app) => {
  router.post('/', FI.create);
  router.get('/:id', FI.show);
  router.put('/:id', FI.update);
  router.delete('/:id', FI.delete);
  app.use('/api/users/family-info', router);
};
