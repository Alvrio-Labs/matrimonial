const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3001;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set routes 

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
