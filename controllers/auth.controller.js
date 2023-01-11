/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const db = require('../models');
require('dotenv').config();
const { requestforgetPassword, requestlogin } = require('../utilities/auth');

const { User } = db;

exports.forgetPassword = async (req, res, next) => {
  try {
    const requestPasswordService = await requestforgetPassword(req, res, next);
    return res.json(requestPasswordService);
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
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
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { reset_token, newPassword } = req.body;
    if (reset_token) {
      jwt.verify(reset_token, process.env.RESET_PASSWORD_KEY, (err, decodeddata) => {
        if (err) {
          res.status(401).json({
            message: 'Incorrect or expired',
          });
        } else {
          User.findOne({ where: { reset_token } }, (err, next)).then((user) => {
            user.update({ password: newPassword, reset_token: '' }).then((_user) => {
              res.status(200).send({
                message: 'Password update',
              });
            });
          });
        }
      });
    } else {
      return res.status(404).send({
        message: 'No user of this id',
      });
    }
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};

