const db = require('../models');
const USER = db.User;
const bcrypt = require('bcrypt');

exports.create = async (req, res) => {
  const hashpassword = await bcrypt.hash(req.body.password, 10);
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    password: hashpassword,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth
  };
  try {
    const saveperson = await USER.create(newUser);
    console.log(saveperson);
  } catch (err) {
    console.log(err);
  }
};
exports.findAll = (req, res) => {
  USER.findAll()
    .then(User => {
      res.status(200).send(User);
    })
    .catch(err => {
      res.status(500).send(
        { message: err.message || 'Some error occurred while retrieving task.' }
      );
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  USER.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.status(200).send({
          message: 'User was deleted successfully!'
        });
      } else {
        res.status(404).send({
          message: `Cannot delete user with id=${id}`
        });
      }
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  USER.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Tutorial was updated successfully.'
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Tutorial with id=' + id
      });
    });
};