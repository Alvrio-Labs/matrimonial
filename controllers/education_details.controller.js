const db = require('../models/index');
const serialize = require('../serializers/educationalInfo.serializer');

const { EducationInfo } = db;

exports.show = async (req, res) => {
  try {
    const user = await EducationInfo.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      PersonalDetailsData: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'Education details not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await EducationInfo.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      Education_detail: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await EducationInfo.findOne({ where: { user_id: req.user_id } });
    if (user) {
      user.update(req.body);
      const responseData = await serialize.show(user);
      res.status(202).send({
        user: responseData,
      });
    } else {
      res.status(404).send({
        message: 'Education Detail not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
exports.delete = async (req, res) => {
  try {
    const user = await EducationInfo.findOne({ where: { user_id: req.user_id } });
    if (user) {
      EducationInfo.destroy({
        where: { user_id: req.params.id },
      });
      res.send({
        message: 'Education Detail deleted!',
      });
    } else {
      res.status(404).send({
        message: 'Education Detail not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
