const db = require('../models/index');
const serialize = require('../serializers/educationalInfo.serializer');

const EducationDetail = db.EducationInfo;

exports.show = async (req, res) => {
  try {
    const user = await EducationDetail.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      Education_details: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'No education detail available for this id.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await EducationDetail.create(req.body);
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
    const user = await EducationDetail.findByPk(req.params.id);
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
    const _ = EducationDetail.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'Education detail deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};
