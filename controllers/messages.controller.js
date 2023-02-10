
const db = require('../models/index');

const { Message } = db;
const serialize = require('../serializers/message.serializer');

exports.index = async (req, res) => {
  try {
    const message = await Message.findAll({
      where: {
        chat_id: req.params.id,
      },
    });
    const responseData = await serialize.index(message);
    res.status(200).send({
      Chat: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'messages not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    const responseData = await serialize.show(message);
    res.status(200).send({
      message: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = Message.destroy({ where: { id: req.params.id } });
    res.status(200).send({
      message: 'message deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'message not found.',
    });
  }
};

