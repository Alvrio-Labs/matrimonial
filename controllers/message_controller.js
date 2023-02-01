const db = require('../models/index');
const serialize = require('../serializers/life_style.serializer');

const { Message } = db;

exports.show = async (req, res) => {
  try {
    const user = await Message.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      message_details: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'message details not found ',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await Message.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      message_details: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

