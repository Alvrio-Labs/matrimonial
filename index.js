require('dotenv').config();
require('dotenv').config({path: './.env.development'});
require('dotenv').config({path: './.env.test'});
require('dotenv').config({path: './.env.production'});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.SERVER_PORT || 3011;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
