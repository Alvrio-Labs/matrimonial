const YAML = require('js-yaml');
const bcrypt = require('bcrypt');
const fs = require('fs');
const db = require('../models');
const serialize = require('../serializers/user.serializer');
// eslint-disable-next-line prefer-destructuring
const User = db.User;
const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);
const { errorHandler } = require('../utility/error.handler');

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userData = await serialize.show(user);
    res.status(201).send({
      user: userData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const userData = await serialize.show(user);
    res.status(200).send({
      user: userData,
    });
  } catch (error) {
    res.status(404).send({
      message: data.api_messages.response.notFound.message,
    });
  }
};

exports.index = async (req, res) => {
  const users = await User.findAll();
  const userList = await serialize.index(users);
  try {
    res.status(200).send({
      users: userList,
    });
  } catch (error) {
    res.status(404).send({
      message: data.api_messages.response.notFound.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = User.destroy({
      where: { id: req.params.id },
    });
    if (user) {
      const msg = data.api_messages.response.delete.message.replace('{{title}}', `of user ${req.params.id}`);
      res.send({
        message: msg,
      });
    } else {
      res.status(errorHandler.errorHandler.notFound().status).send({
        message: data.api_messages.response.notFound.message,
      });
    }
  } catch (error) {
    res.status(errorHandler.errorHandler.error().status).send({ message: errorHandler.errorHandler.error });
  }
};

// update a user
// exports.update = async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   try {
//     if (!user) {
//       res.status(errorHandler.errorHandler.notFound().status).send({
//         message: data.api_messages.response.notFound.message,
//       });
//     } else {
//       await User.update(req.body, { where: { id: req.params.id } });
//       res.status(202).send({
//         message: data.api_messages.response.updateSuccess.message,
//       });
//     }
//   } catch (error) {
//     res.send(({
//       message: errorHandler.errorHandler.internalServerError().error,
//     }));
//   }
// };

exports.update = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const userData = await serialize.update(user);
    if (!user) {
      res.status(errorHandler.errorHandler.notFound().status).send({
        message: data.api_messages.response.notFound.message,
      });
    } else {
      await User.update(req.body, { where: { id: req.params.id } });
      res.status(202).send({
        message: data.api_messages.response.updateSuccess.message,
        user: userData,

      });
    }
  } catch (error) {
    res.send(({
      message: errorHandler.errorHandler.internalServerError().error,
    }));
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      const newPassword = await bcrypt.hash(password, 10);
      user.update({ password: newPassword }).then((next) => {
        res.status(200).send({
          message: data.controllers.user.password.successMessage,
        });
      });
    } else {
      const msg = data.api_messages.response.updateFail.message.replace('{{title}}', `of user ${req.params.id}`);
      res.status(404).send({
        message: msg,
      });
    }
  } catch (error) {
    res.status(errorHandler.errorHandler.badRequest().status).send(errorHandler.errorHandler.badRequest().error);
  }
};
