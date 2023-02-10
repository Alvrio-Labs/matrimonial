
const db = require('../models/index');

const { Message } = db;
const serialize = require('../serializers/message.serializer');

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
    const message = Message.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'message deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'message not found.',
    });
  }
};

