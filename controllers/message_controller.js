const { Op } = require('sequelize');

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
    console.log(error);
  }
};

// exports.show = async (req, res) => {
//   try {
//     const message = await Message.findOne({
//       where: {
//         chat_id: req.params.id,
//       },
//     });
//     console.log(message);
//     const responseData = await serialize.show(message);
//     res.status(200).send({
//       message: responseData,
//     });
//   } catch (error) {
//     res.status(404).send({
//       message: error.message,
//     });
//   }
// };
