const { Op } = require('sequelize');
const db = require('../models/index');

const { Message, chatRoom } = db;

const serialize = require('../serializers/chat_room.serializer');

exports.show = async (req, res) => {
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
      message: 'Chat connection not found.',
    });
  }
};
exports.create = async (req, res) => {
  try {
    const chat = await chatRoom.findOne({
      where: {
        [Op.or]: [
          {
            [Op.and]: [
              {
                sender_id: req.body.sender_id,
              },
              {
                receiver_id: req.body.receiver_id,
              }],
          },
          {
            [Op.and]: [
              {
                sender_id: req.body.receiver_id,
              },
              {
                receiver_id: req.body.sender_id,
              },
            ],
          },
        ],
      },
    });
    if (chat) {
      const responseData = await serialize.show(chat);
      res.status(201).send({
        message: responseData,
      });
    } else {
      const chatroom = await chatRoom.create(req.body);
      const responseData = await serialize.show(chatroom);
      res.status(201).send({
        chat: responseData,
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
