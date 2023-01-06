const db = require('../models/index');
const serialize = require('../serializers/personal_info.serializer');
// eslint-disable-next-line prefer-destructuring
const personalInfo = db.PersonalInfo;

exports.show = async (req, res) => {
  try {
    const user = await personalInfo.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      personalInfoData: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await personalInfo.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      personalInfoData: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await personalInfo.findByPk(req.params.id);
    user.update(req.body);
    const responseData = await serialize.show(user);
    res.status(202).send({
      personalInfoData: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = personalInfo.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'User deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};
