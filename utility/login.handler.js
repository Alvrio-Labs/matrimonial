const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../models');
require('dotenv').config();
const errorHandler = require('./error.handler');
const serialize = require('../serializers/auth.serializer');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

const { User } = db;


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await User.findOne({ where: { email } });

    if (result != null) {
      const isMatch = await bcrypt.compare(password, result.password);
      if (result.email === email && isMatch) {
        const jwtToken = jwt.sign({ isMatch: result }, process.env.SECRET_KEY, {
          expiresIn: process.env.EXPIRY_IN,
        });
        res.json({
          token: jwtToken,
        });
      } else {
        const msg = data.api_messages.response.invalid.message.replace('{{title}}', 'email or password');
        return res.status(401).send({
          message: msg,
        });
      }
    } else {
      res.status(errorHandler.errorHandler.notFound().status).send({
        message: data.api_messages.response.notFound.message,
      });
    }
  } catch (error) {
    console.log(({
      message: errorHandler.errorHandler.internalServerError().error,
    }));
  }
  return null;
};
