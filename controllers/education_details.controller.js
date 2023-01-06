const db = require('../models/index');
const serialize = require('../serializers/educationalInfo.serializer');
// eslint-disable-next-line prefer-destructuring
const educationDetails = db.EducationInfo;

exports.show = async (req, res) => {
  try {
    const user = await educationDetails.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      Education_details: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'Education details not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await educationDetails.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      userEducationalInfo: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await educationDetails.findByPk(req.params.id);
    user.update(req.body);
    const responseData = await serialize.show(user);
    res.status(202).send({
      userEducationalInfo: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = educationDetails.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'User deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};
