const express = require('express');

const router = express.Router();

// api routes

require('./user.routes')(router);
require('./auth.routes')(router);
require('./family_details.routes')(router);
require('./education_details.routes')(router);

require('./personalInfo.routes')(router);
// admin routes

require('./admin/user.routes')(router);

module.exports.router = router;
