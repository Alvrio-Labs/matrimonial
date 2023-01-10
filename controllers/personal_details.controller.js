const db = require('../models/index');
const serialize = require('../serializers/personal_info.serializer');
// eslint-disable-next-line prefer-destructuring
const PersonalDetails = db.PersonalInfo;

exports.show = async (req, res) => {
  try {
    const user = await PersonalDetails.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      PersonalDetailsData: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'Personal details not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await PersonalDetails.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      PersonalDetailsData: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await PersonalDetails.findOne({ where: { user_id: req.user_id } });
    if (user) {
      user.update(req.body);
      const responseData = await serialize.show(user);
      res.status(202).send({
        PersonalDetailsData: responseData,
      });
    } else {
      res.status(404).send({
        message: ' Personal details not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = PersonalDetails.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'Personal Info deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'Personal Info not found.',
    });
  }
};
