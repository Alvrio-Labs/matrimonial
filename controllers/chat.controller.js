const { Op } = require('sequelize');
const db = require('../models/index');

const { User } = db;
const { Chat } = db;

const serialize = require('../serializers/chat.serializer');

exports.show = async (req, res) => {
  try {
    const user = await Chat.findByPk(req.params.id);
    console.log(user)
    const responseData = await serialize.show(user);
    res.status(200).send({
      User: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'User connection not found.',
    });
  }
};
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
    const users = await Chat.findAll({
      where: {
        [Op.or]:[{
        [Op.and]:[{sender_id: req.body.sender_id},{reciever_id: req.body.reciever_id}], 
        [Op.and]:[{sender_id: req.body.reciever_id},{reciever_id: req.body.sender_id}] 
         }],
      },
    });
    console.log('users' , users)
    if (users.length > 0) {
      res.status(201).send({
        message: 'chat connection already exist',
      });
      console.log('user' , users)
    } else {
      const chatRoom = await Chat.create(req.body);
      const responseData = await serialize.show(chatRoom);
      res.status(201).send({
        user: responseData,
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

