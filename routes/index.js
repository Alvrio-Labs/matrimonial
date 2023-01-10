const express = require('express');

const router = express.Router();

// api routes
require('./user.routes')(router);
require('./auth.routes')(router);
require('./user_connection_request.routes')(router);
require('./user_connection.routes')(router);
require('./family_details.routes')(router);
require('./education_details.routes')(router);

// admin routes
require('./admin/user.routes')(router);

module.exports.router = router;
