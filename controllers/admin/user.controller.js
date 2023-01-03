const bcrypt = require('bcrypt');
const _ = require('jsonwebtoken');
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../../models');
const { errorHandler } = require('../../utility/error.handler');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

// eslint-disable-next-line prefer-destructuring
const User = db.User;

exports.findAll = async (req, res) => {
  try {
    const users = await User.findAll({ where: { is_admin: false } });
    res.status(200).send(users);
  } catch (error) {
    res.status(errorHandler.errorHandler.badRequest().status).send(errorHandler.errorHandler.badRequest().error);
  }
};

exports.findOne = async (req, res) => {
  const user = await User.findByPk(req.params.id, { where: { is_admin: false } });
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

exports.create = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const dateOfBirth = req.body.date_of_birth;
  const today = new Date();
  const dateSplit = dateOfBirth.split('-');
  const year = dateSplit[2];
  const age = today.getFullYear() - year;
  if (age >= 18) {
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
      res.status(errorHandler.errorHandler.badRequest().status).send(errorHandler.errorHandler.badRequest().error);
    }
  } else {
    res.status(errorHandler.errorHandler.notAccepted().status).send(errorHandler.errorHandler.notAccepted().error);
  }
};

exports.update = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  try {
    if (!user) {
      res.status(errorHandler.errorHandler.notFound().status).send({
        message: data.api_messages.response.notFound.message,
      });
    } else {
      await User.update(req.body, { where: { is_admin: false, id: req.params.id } });
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

exports.delete = (req, res) => {
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
