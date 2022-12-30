const bcrypt = require('bcrypt');
const _ = require('jsonwebtoken');

const db = require('../../models');

const User = db.User;

exports.adminDashboard = async (req, res) => {
  try {
    const userdata = await User.findAll({ where: { is_admin: 0 } }).then((user) => {
      res.status(200).send(user);
    });
    console.log(userdata);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.findOne = async (req, res) => {
  const userdata = await User.findByPk(req.params.id, { where: { is_admin: 0 } })
    .then((user) => {
      res.status(200).send({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        date_of_birth: user.date_of_birth,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error retrieving user with id=${req.params.id}`,
      });
    });
}

exports.create = async (req, res) => {
  const hashpassword = await bcrypt.hash(req.body.password, 10);
  const userHash = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashpassword,
    is_admin: true,
  };
  try {
    const user = await User.create(userHash);
    console.log(user);
    res.status(201).send({
      User: user,
      message: 'User created'
    });
  } catch (error) {
    console.log(error);
  }
};
exports.update = async (req, res) => {
  const user = await User.update(req.body, { where: { is_admin: 0, id: req.params.id } });
  if (!user) {
    res.status(404).send(`No user with this id = ${req.params.id} `);
  } else {
    res.status(202).send({
      message: `User data has been updated`
    });
  }
};

exports.delete = (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  })
    .then((num) => {
      if (num === 1) {
        res.status(200).send({
          message: "User was deleted successfully!"
        });
      } else {
        res.status(404).send({
          message: `Cannot delete user with id=${req.params.id}`,
        });
      }
    });
};
