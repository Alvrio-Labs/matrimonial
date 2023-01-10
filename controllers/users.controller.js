const db = require('../models/index');
const serialize = require('../serializers/user.serializer');

// eslint-disable-next-line prefer-destructuring
const User = db.User;

exports.show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const responseData = await serialize.show(user);
    res.status(200).send({
      User: responseData,
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
    if (user) {
      user.update(req.body);
      const responseData = await serialize.show(user);
      res.status(202).send({
        user: responseData,
      });
    } else {
      res.status(404).send({
        message: 'User not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      User.destroy({
        where: { id: req.params.id },
      });
      res.status(202).send({
        message: 'User delete.',
      });
    } else {
      res.status(404).send({
        message: 'User not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
