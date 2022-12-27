const dotenv = require('dotenv');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.SERVER_PORT || 3011;
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/auth.routes')(app);
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
