const db = require('../models/index');
const serialize = require('../serializers/family_info.serializer');

const { familyInfo } = db;

exports.show = async (req, res) => {
  try {
    const user = await familyInfo.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      FamilyDetails: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'family details not found ',
    });
  }
};
exports.create = async (req, res) => {
  try {
    const user = await familyInfo.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      FamilyDetails: responseData,
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
      FamilyDetails: responseData,
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
