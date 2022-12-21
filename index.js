const dotenv = require('dotenv');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.SERVER_PORT || 3011;
dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log (`Server is running on port ${PORT}.`);
});
