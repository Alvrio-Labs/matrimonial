const YAML = require('js-yaml');
const bcrypt = require('bcrypt');
const fs = require('fs');
const db = require('../models');

// eslint-disable-next-line prefer-destructuring
const User = db.User;
const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const { errorHandler } = require('../utility/error.handler');
const { successHandler } = require('../utility/success.handler');

exports.create = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const userHash = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    date_of_birth: req.body.date_of_birth,
    password: hashPassword,
  };
  const dateOfBirth = req.body.date_of_birth;
  const today = new Date();
  const dateSplit = dateOfBirth.split('-');
  const year = dateSplit[2];
  const age = today.getFullYear() - year;
  if (age >= 18) {
    try {
      const user = await User.create(userHash);
      res.status(201).send({
        User: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          phone: req.body.phone,
          gender: req.body.gender,
          date_of_birth: req.body.date_of_birth,
        },
        message: successHandler.createRequest().message,
      });
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(errorHandler.internalServerError().status).send(errorHandler.internalServerError().error);
  }
};

exports.findOne = (req, res) => {
  User.findByPk(req.params.id)
    .then((user) => {
      res.status(200).send({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        date_of_birth: user.date_of_birth,
      });
    })
    .catch((err) => {
      res.status(errorHandler.notFound().status).send({
        message: errorHandler.notFound().message,
      });
    });
};

exports.delete = (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  })
    .then((num) => {
      if (num === 1) {
        res.status(successHandler.successRequest().status).send({
          message: successHandler.successRequest().deleteMessage(),
        });
      } else {
        res.status(errorHandler.notFound().status).send(errorHandler.notFound().error);
      }
    });
};

// update a user
exports.update = async (req, res) => {
  const user = await User.update(req.body, { where: { id: req.params.id } });
  if (!user) {
    res.status(errorHandler.notFound().status).send(errorHandler.notFound().error);
  } else {
    res.status(successHandler.AcceptedRequest().status).send({
      message: successHandler.AcceptedRequest().updatedMessage,
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      const newPassword = await bcrypt.hash(password, 10);
      user.update({ password: newPassword }).then((next) => {
        res.status(200).send({
          message: data.controllers.user.password.successMessage,
        });
      });
    } else {
      res.status(404).send({
        message: data.api_messages.updateFail('of user id') + req.params.id,
      });
    }
  } catch (error) {
    res.status(errorHandler.badRequest().status).send(errorHandler.badRequest().error);
  }
};
