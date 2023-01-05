const db = require('../models/index');
const serialize = require('../serializers/familyInfo.serializer');
// eslint-disable-next-line prefer-destructuring
const familyInfo = db.familyInfo;

exports.show = async (req, res) => {
  try {
    const user = await familyInfo.findByPk(req.params.id);
    const responseData = await serialize.show(user);
    res.status(200).send({
      familyInformation: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await familyInfo.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      familyInformation: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await familyInfo.findByPk(req.params.id);
    user.update(req.body);
    const responseData = await serialize.show(user);
    res.status(202).send({
      familyInformation: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = familyInfo.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'User deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};
