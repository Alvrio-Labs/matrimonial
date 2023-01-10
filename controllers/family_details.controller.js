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
    const user = await FamilyDetail.findByPk(req.params.id);
    user.update(req.body);
    const responseData = await serialize.show(user);
    res.status(202).send({
      family_details: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = FamilyDetail.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'family details deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'family details not available.',
    });
  }
};
