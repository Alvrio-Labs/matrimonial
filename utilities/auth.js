const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../models');
require('dotenv').config();
const errorHandler = require('./error.handler');

const serialize = require('../serializers/user.serializer');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const { User } = db;
const { TRANSPORTER } = require('./nodemailer');

const requestforgetPassword = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: { email },
  });
  try {
    const resetToken = jwt.sign({ id: req.body.id }, process.env.RESET_PASSWORD_KEY, {
      expiresIn: process.env.EXPIRY_IN,
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: 'To Change Password',
      html: `
          <h1>Clink on link to reset password</h1>
          <p> <a href ="http://localhost:3000/reset-password/${resetToken}"</a> Click here</p>`,
    };
    await user.update({ reset_token: resetToken });
    await TRANSPORTER.sendMail(mailOptions, (err, result) => {
    });
    res.status(200).send({
      message: 'Email Sent!',
    });
  } catch (error) {
    res.status(errorHandler.errorHandler.notFound().status).send({
      message: data.api_messages.response.notFound.message,
    });
    next();
  }
};

// eslint-disable-next-line consistent-return
const requestlogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const decoded = await bcrypt.compare(password, user.password);
    if (user.email === email && decoded) {
      const jwtToken = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRY_IN,
      });
      const responseData = await serialize.show(user);
      res.send({
        token: jwtToken,
        user: responseData,
      });
    } else {
      return res.status(401).send({
        message: 'Invalid email or password!',
      });
    }
  } catch (error) {
    res.send(({
      message: errorHandler.errorHandler.internalServerError().error,
    }));
    next();
  }
};

module.exports = {
  requestforgetPassword,
  requestlogin,
};
