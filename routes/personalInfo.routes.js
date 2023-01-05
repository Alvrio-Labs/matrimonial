const router = require('express').Router();
const PI = require('../controllers/personalInfo.controller');

module.exports = (app) => {
  router.post('/', PI.create);
  router.get('/:id', PI.show);
  router.put('/:id', PI.update);
  router.delete('/:id', PI.delete);
  app.use('/api/user/personal-info', router);
};
