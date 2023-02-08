const { Op } = require('sequelize');
const db = require('../models/index');

const { Message } = db;
const { Chat } = db;
const { User } = db;
const serialize = require('../serializers/chat.serializer');

exports.show = async (req, res) => {
  try {
    const message = await Message.findAll({
      where: {
        chat_id: req.params.id,
      },
    });
    console.log(message);
    const responseData = await serialize.index(message);
    res.status(200).send({
      Chat: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'User connection not found.',
    });
  }
};

//   try {
//     const message = await Message.findAll({
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
// exports.create = async (req, res) => {
//   try {
//     // const user = await ChatModel.findAll({
//     //   where: {
//     //     [Op.or]: [{ sender_id: req.body.sender_id }, { reciever_id: req.body.reciever_id }],
//     //   },
//     // });
//     // if (!user) {
//     //   const chatRoom = await ChatModel.create(req.body);
//     //   const responseData = await serialize.show(chatRoom);
//     //   res.status(201).send({
//     //     user: responseData,
//     //   });
//     // } else {
//     //   res.status(201).send({
//     //     message: 'chat connection already exist',
//     //   });
//     // }
//     const chatRoom = await ChatModel.create(req.body);
//     res.status(201).send({
//       user: chatRoom,
//     });
//   } catch (error) {
//     res.status(422).send({ error: error.message });
//   }
// };
exports.create = async (req, res) => {
  try {
    const chat = await Chat.findOne({
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
    console.log('chat', chat);
    if (chat) {
      res.status(201).send({
        message: 'chat connection already exist',
      });
    } else {
      const chatRoom = await Chat.create(req.body);
      const responseData = await serialize.show(chatRoom);
      res.status(201).send({
        chat: responseData,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(422).send({ error: error.message });
  }
};

