const db = require('../models');
const USER = db.User;
const bcrypt = require('bcrypt');
const fs = require('fs');
const YAML = require('js-yaml');
const validation = fs.readFileSync('yaml/validation.yaml');
const data = YAML.load(validation);

exports.create = async (req, res) => {
  const hashpassword = await bcrypt.hash(req.body.password, 10);
  const newUser = {
    first_name: req.body. first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: hashpassword,
    gender: req.body.gender,
    date_of_birth: req.body.date_of_birth
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
        { message: err.message || data.status.get.errorMessage }
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
          message: data.status.delete.deleteSuccuessfully
        });
      } else {
        res.status(404).send({
          message: data.status.delete.errorMessage + id
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
          message: data.status.update.updatedsuccessfully
        });
      } else {
        res.send({
          message:data.status.update.issueMessage + id
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: data.status.update.errorMessage + id
      });
    });
};