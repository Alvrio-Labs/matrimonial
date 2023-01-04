const YAML = require('js-yaml');
const bcrypt = require('bcrypt');
const fs = require('fs');
const db = require('../models');

// eslint-disable-next-line prefer-destructuring
const User = db.User;
const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const { errorHandler } = require('../utility/error.handler');

exports.create = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  try {
    await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      date_of_birth: req.body.date_of_birth,
      password: hashPassword,

    });
    res.status(201).send({
      User: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        date_of_birth: req.body.date_of_birth,
      },
      message: data.api_messages.response.success.message,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.findOne = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  try {
    res.status(200).send({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      date_of_birth: user.date_of_birth,
    });
  } catch (error) {
    res.status(errorHandler.errorHandler.notFound().status).send({
      message: data.api_messages.response.notFound.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = User.destroy({
      where: { id: req.params.id },
    });
    if (user) {
      const msg = data.api_messages.response.delete.message.replace('{{title}}', `of user ${req.params.id}`);
      res.send({
        message: msg,
      });
    } else {
      res.status(errorHandler.errorHandler.notFound().status).send({
        message: data.api_messages.response.notFound.message,
      });
    }
  } catch (error) {
    res.status(errorHandler.errorHandler.error().status).send({ message: errorHandler.errorHandler.error });
  }
};

// update a user
exports.update = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  try {
    if (!user) {
      res.status(errorHandler.errorHandler.notFound().status).send({
        message: data.api_messages.response.notFound.message,
      });
    } else {
      await User.update(req.body, { where: { id: req.params.id } });
      res.status(202).send({
        message: data.api_messages.response.updateSuccess.message,
      });
    }
  } catch (error) {
    res.send(({
      message: errorHandler.errorHandler.internalServerError().error,
    }));
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
      const msg = data.api_messages.response.updateFail.message.replace('{{title}}', `of user ${req.params.id}`);
      res.status(404).send({
        message: msg,
      });
    }
  } catch (error) {
    res.status(errorHandler.errorHandler.badRequest().status).send(errorHandler.errorHandler.badRequest().error);
  }
};
