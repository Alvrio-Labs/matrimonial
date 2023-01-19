require('dotenv').config();
require('dotenv').config({ path: './.env.development' });
require('dotenv').config({ path: './.env.test' });
require('dotenv').config({ path: './.env.production' });
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes/index');
const db = require('./models');
const { sequelize } = require('./models');

// db.sequelize.sync({ force: false });
const app = express();
const PORT = process.env.SERVER_PORT || 3011;
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`),
});
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
