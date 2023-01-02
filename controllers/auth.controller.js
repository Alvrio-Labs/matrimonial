const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../models');
require('dotenv').config();

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

const { User } = db;
const { TRANSPORTER } = require('../utility/nodemailer');

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (user) {
    const resetToken = jwt.sign({ id: req.body.id }, process.env.RESET_PASSWORD_KEY, {
      expiresIn: process.env.EXPIRY_IN,
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'To Change Password',
      html: `
        <h1>Clink on link to reset password</h1>
        <p> <a href ="http://localhost:3000/reset-password/${resetToken}"</a> Click here</p>`,
    };
    console.log('Token is ' + resetToken);
    TRANSPORTER.sendMail(mailOptions, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(data.auth.forgotPassword.successMessage, result.response);
      }
    });
    const currentUser = await user.update({ reset_token: resetToken });
    console.log(currentUser);
    if (!currentUser) {
      res.status(404).send({
        message: data.auth.forgotPassword.invalid,
      });
    } else {
      TRANSPORTER.sendMail(mailOptions, (err, result) => {
        if (err) {
          res.status(404).send({
            message: data.auth.forgotPassword.serverError,
          });
        } else {
          res.status(200).send({
            message: data.auth.forgotPassword.successMessage,
          });
        }
      });
    }
  } else {
    return res.status(404).send({
      message: data.auth.forgotPassword.errorMessage,
    });
  }
  return null;
};

exports.resetPassword = async (req, res) => {
  const { newPassword, resetToken } = req.body;
  if (resetToken) {
    const fpSalt = crypto.randomBytes(64).toString('base64');
    jwt.verify(resetToken, fpSalt).then((err, token) => {
      if (err) {
        return res.status(401).json({
          message: data.auth.resetPassword.errorMessage,
        });
      }

      User.findOne({ where: { reset_token: token } }).then((error, user) => {
        if (error) {
          return res.status(400).json({
            error: data.auth.resetPassword.invalid,
          });
        }
        if (user) {
          user.update({ password: newPassword, reset_token: '' }).then(() => res.status(200).send({
            message: data.auth.resetPassword.successMessage,
          }));
        }
        return null;
      });
      return null;
    });
  } else {
    return res.status(404).send({
      message: data.auth.resetPassword.notFound,
    });
  }
  return null;
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ where: { email } });
  if (result != null) {
    const isMatch = await bcrypt.compare(password, result.password);
    if (result.email === email && isMatch) {
      const jwtToken = jwt.sign({ isMatch: result }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRY_IN,
      });
      res.json({
        message: data.auth.login.successMessage,
        token: jwtToken,
      });
    } else {
      return res.status(401).send(data.load.invalid);
    }
  } else {
    return res.status(404).send({
      message: data.load.errorMessage,
    });
  }
  return null;
};
