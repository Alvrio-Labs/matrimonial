const YAML = require('js-yaml');
const bcrypt = require('bcrypt');
const fs = require('fs');
const db = require('../models');

const User = db.User;
const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

// Create a user
exports.create = async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  const userHash = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
    date_of_birth: req.body.date_of_birth,
    password: hashPassword,
  };
  const dateOfBirth = req.body.date_of_birth;
  const today = new Date();
  const dateSplit = dateOfBirth.split('-');
  const year = dateSplit[2];
  const age = today.getFullYear() - year;
  if (age >= 18) {
    try {
      const user = await User.create(userHash);
      res.status(201).send({
        User: {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          phone: req.body.phone,
          gender: req.body.gender,
          date_of_birth: req.body.date_of_birth,
        },
        message: 'User created',
      });
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    res.status(406).send({
      message: 'User age is less than 18, cannot add.',
    });
  }
};

exports.findOne = (req, res) => {
  User.findByPk(req.params.id)
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
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  // const id = req.params.id;
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
          message: `Cannot delete user with id=${req.params.id}`
        });
      }
    });
};

// update a user
exports.update = async (req, res) => {
  const user = await User.update(req.body, { where: { id: req.params.id } });
  if (!user) {
    res.status(404).send(`No user with this id = ${req.params.id} `);
  } else {
    res.status(202).send({
      message: `User data has been updated`
    });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      const newPassword = await bcrypt.hash(password, 10);
      user.update({ password: newPassword }).then((next) => {
        res.status(200).send({ message: 'Password Update' });
      });
    } else {
      res.status(404).send('Internal Server Error Cannot Update Password');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
