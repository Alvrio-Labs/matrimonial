const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../models');
require('dotenv').config();
const errorHandler = require('../utility/error.handler');
const serialize = require('../serializers/user.serializer');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const { User } = db;
const { TRANSPORTER } = require('../utility/nodemailer');

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  const userData = serialize.forgotPassword(user);
  try {
    if (user) {
      const resetToken = jwt.sign({ id: req.body.id }, process.env.RESET_PASSWORD_KEY, {
        expiresIn: process.env.EXPIRY_IN,
      });
      const mailOptions = {
        data: userData,
        from: process.env.EMAIL,
        to: email,
        subject: 'To Change Password',
        html: `
          <h1>Clink on link to reset password</h1>
          <p> <a href ="http://localhost:3000/reset-password/${resetToken}"</a> Click here</p>`,

      };
      TRANSPORTER.sendMail(mailOptions, (err, result) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).send(data.auth.forgotPassword.successMessage, result.response);
        }
      });
      const currentUser = await user.update({ reset_token: resetToken });
      if (!currentUser) {
        res.status(404).send({
          message: data.api_messages.response.notFound.message,
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
      res.status(errorHandler.errorHandler.notFound().status).send({
        message: data.api_messages.response.notFound.message,
      });
    }
  } catch (error) {
    res.send(({
      message: errorHandler.errorHandler.internalServerError().error,
    }));
  }

  return null;
};

exports.resetPassword = async (req, res) => {
  try {
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
            const msg = data.api_messages.response.invalid.message.replace('{{title}}', 'email');
            return res.status(401).send({
              message: msg,
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
      res.status(errorHandler.errorHandler.badRequest().status).send(errorHandler.errorHandler.badRequest().error);
    }
  } catch (error) {
    res.send(({
      message: errorHandler.errorHandler.internalServerError().error,
    }));
  }

  return null;
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    const userData = await serialize.show(user);

    const isMatch = await bcrypt.compare(password, user.password);
    if (user.email === email && isMatch) {
      const jwtToken = jwt.sign({ isMatch: user }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRY_IN,
      });
      res.json({
        token: jwtToken,
        user: userData,
      });
    } else {
      const msg = data.api_messages.response.invalid.message.replace('{{title}}', 'email or password');
      return res.status(401).send({
        message: msg,
      });
    }
  } catch (error) {
    res.send(({
      message: errorHandler.errorHandler.internalServerError().error,
    }));
  }
  return null;
};
