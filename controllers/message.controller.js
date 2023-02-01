const db = require('../models/index');
const serialize = require('../serializers/user.serializer'); // change to message serialier

const { User } = db; // change to message and chat model

exports.index = async (req, res) => {
  const messages = await User.findById({ where: { chat_id: req.chat_id } });
  try {
    res.status(200).send({
      users: messages,
    });
  } catch (error) {
    res.status(404).send({
      messages: 'no messages available',
    });
  }
};

exports.show = async (req, res) => {
  try {
    const message = await User.findOne({ where: { chat_id: req.chat_id } });
    res.status(200).send({
      message: message,
    });
  } catch (error) {
    res.status(404).send({
      message: 'No message available.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      message: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const message = await User.findOne({ where: { chat_id: req.chat_id } });
    if (message) {
      User.destroy({
        where: { chat_id: req.params.id },
      });
      res.send({
        message: 'chat deleted!',
      });
    } else {
      res.status(404).send({
        message: 'chat not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
