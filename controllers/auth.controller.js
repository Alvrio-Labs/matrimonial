const jwt = require('jsonwebtoken');
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../models');
require('dotenv').config();
const errorHandler = require('../utility/error.handler');
const { requestforgetPassword, requestlogin } = require('../utility/auth');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const { User } = db;

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

exports.forgetPassword = async (req, res, next) => {
  try {
    const requestPasswordService = await requestforgetPassword(req, res, next);
    return res.json(requestPasswordService);
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
  return null;
};

exports.login = async (req, res, next) => {
  try {
    const requestloginService = await requestlogin(req, res, next);
    return res.json(requestloginService);
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
  return null;
};
