const db = require('../models/index');
const serialize = require('../serializers/user_preferences.serializer');

const { UserPreference } = db;

exports.create = async (req, res) => {
  try {
    const users = await UserPreference.create(req.body);
    res.status(201).send({
      user: users,
      message: 'User created',
    });
  } catch (error) {
    res.status(422).send(error);
  }
};

exports.show = async (req, res) => {
  try {
    const user = await UserPreference.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      preference_details: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'No user preferences detail is available for this id.',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await UserPreference.findByPk(req.params.id);
    if (user) {
      user.update(req.body);
      const responseData = await serialize.show(user);
      res.status(202).send({
        user: responseData,
      });
    } else {
      res.status(404).send({
        message: 'User preferences not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await UserPreference.findByPk(req.params.id);
    if (user) {
      user.destroy({
        where: { id: req.params.id },
      });
      res.status(202).send({
        message: 'User preferences delete.',
      });
    } else {
      res.status(404).send({
        message: 'User preferences not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
