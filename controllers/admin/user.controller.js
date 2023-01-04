const bcrypt = require('bcrypt');
const _ = require('jsonwebtoken');
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../../models');
const { errorHandler } = require('../../utility/error.handler');
const serialize = require('../../serializers/user.serializer');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

// eslint-disable-next-line prefer-destructuring
const User = db.User;

exports.index = async (req, res) => {
  const users = await User.findAll({ where: { is_admin: false } });
  const userList = await serialize.index(users);
  try {
    res.status(200).send({
      users: userList,
    });
  } catch (error) {
    res.status(404).send({
      message: data.api_messages.response.notFound.message,
    });
  }
};

exports.show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { where: { is_admin: false } });
    const userData = await serialize.show(user);
    res.status(200).send({
      user: userData,
    });
  } catch (error) {
    res.status(404).send({
      message: data.api_messages.response.notFound.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userData = await serialize.show(user);
    res.status(201).send({
      user: userData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
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
