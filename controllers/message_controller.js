const { Op } = require('sequelize');

const db = require('../models/index');

const { User } = db;
const { Message } = db;
const { chat } = db;
const serialize = require('../serializers/message.serializer');
// exports.create = async (req, res) => {
//   try {
//     const user = await Message.create(req.body);
//     const responseData = await serialize.show(user);
//     res.status(200).send({
//       message: responseData,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
exports.create = async (req, res) => {
  try {
    const user = await Message.create(req.body);
    const responseData = await serialize.show(user);
    res.status(200).send({
      message: responseData,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const user = await chat.findOne({
      where: {
        chat_id: req.params.id,
      },
      include: [{
        model: Message,
        as: 'Message',
      }],
    });
    console.log(user);
    res.status(200).send({
      message: user,
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
};
