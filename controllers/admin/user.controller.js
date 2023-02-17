/* eslint-disable prefer-destructuring */
const { Op } = require('sequelize');

const YAML = require('js-yaml');
const fs = require('fs');
const db = require('../../models/index');

const validation = fs.readFileSync('yaml/validation.yaml');
const User = db.User;
const serialize = require('../../serializers/user.serializer');

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

exports.index = async (req, res) => {
  const { page, size, id } = req.query;
  const condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  const { limit, offset } = getPagination(page, size);

  try {
    const user = await User.findAll({
      where: condition,
      limit,
      offset,
    });
    const keys = Object.values(user);
    const responseData = await serialize.index(keys);
    res.status(200).send({
      users: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
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
