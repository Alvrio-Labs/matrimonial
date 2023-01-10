const db = require('../models/index');
const serialize = require('../serializers/family_info.serializer');

const { FamilyDetail } = db;

exports.show = async (req, res) => {
  try {
    const user = await FamilyDetail.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      family_details: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'No family detail is available for this id.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await FamilyDetail.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      family_details: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await FamilyDetail.findOne({ where: { user_id: req.user_id } });
    if (user) {
      user.update(req.body);
      const responseData = await serialize.show(user);
      res.status(202).send({
        PersonalDetailsData: responseData,
      });
    } else {
      res.status(404).send({
        message: ' No family detail is available for this id.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await FamilyDetail.findOne({ where: { user_id: req.user_id } });
    if (user) {
      FamilyDetail.destroy({
        where: { user_id: req.params.id },
      });
      res.send({
        message: 'family detail deleted!',
      });
    } else {
      res.status(404).send({
        message: 'No family detail is available for this id.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
