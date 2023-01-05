const router = require('express').Router();
const EI = require('../controllers/educationalInfo.controller');

module.exports = (app) => {
  router.post('/', EI.create);
  router.get('/:id', EI.show);
  router.put('/:id', EI.update);
  router.delete('/:id', EI.delete);
  app.use('/api/user/education-details', router);
};
