/* eslint-disable prefer-destructuring */
const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../../models/index');

const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const User = db.User;
const serialize = require('../../serializers/user.serializer');

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
    const responseData = await serialize.show(user);
    res.status(200).send({
      user: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      user: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user.update(req.body, { where: { is_admin: false } });
    const responseData = await serialize.show(user);
    res.status(202).send({
      user: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = User.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'User deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};
