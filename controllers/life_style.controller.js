const db = require('../models/index');
const serialize = require('../serializers/life_style.serializer');

const LifeStyle = db.lifeStyle;

exports.show = async (req, res) => {
  try {
    const user = await LifeStyle.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      life_style_details: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'life style details not found ',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await LifeStyle.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      life_style_details: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await LifeStyle.findByPk(req.params.id);
    user.update(req.body);
    const responseData = await serialize.show(user);
    res.status(202).send({
      life_style_details: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = LifeStyle.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'life style details deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'life style details not found.',
    });
  }
};
