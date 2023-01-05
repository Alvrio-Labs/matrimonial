const express = require('express');

const router = express.Router();

// api routes

require('./user.routes')(router);
require('./auth.routes')(router);
require('./educationalInfo.routes')(router);

// admin routes

require('./admin/user.routes')(router);

module.exports.router = router;
