// const router = require('express').Router();
// const { verifyToken } = require('../utility/auth.policy');
// const User = require('../controllers/users.controller');

// module.exports = (app) => {
//   router.post('/', User.create);
//   router.get('/:id', User.findOne);
//   router.put('/:id', verifyToken, User.update);
//   router.delete('/:id', User.delete);
//   app.use('/api/users', router);
// };

const router = require('express').Router();
const { verifyToken } = require('../utility/auth.policy');
const User = require('../controllers/users.controller');
const validation = require('../validations/user.validation');

module.exports = (app) => {
  router.post('/', validation.create, User.create);
  router.get('/:id', User.findOne);
  router.put('/:id', verifyToken, validation.update, User.update);
  router.delete('/:id', validation.deleteValidation, User.delete);
  app.use('/api/users', router);
};
