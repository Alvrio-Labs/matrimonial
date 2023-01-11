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

db.sequelize.sync({ force: false });
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
const connectDb = async () => {
  console.log('Checking database connection...');
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
  } catch (e) {
    console.log('Database connection failed', e);
    process.exit(1);
  }
};

(async () => {
  await connectDb();
  console.log(`Attempting to run server on port ${PORT}`);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
})();
