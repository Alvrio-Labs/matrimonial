const { Op } = require('sequelize');
const db = require('../models/index');
const serialize = require('../serializers/user.serializer');

const { FamilyInfo } = db;
const { UserPreference } = db;
const { User } = db;
const { PersonalInfo } = db;

exports.show = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const responseData = await serialize.show(user);
    res.status(200).send({
      User: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'User not found.',
    });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const responseData = await serialize.show(user);
    res.status(201).send({
      user: responseData,
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.update(req.body);
      const responseData = await serialize.show(user);
      res.status(202).send({
        user: responseData,
      });
    } else {
      res.status(404).send({
        message: 'User not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      User.destroy({
        where: { id: req.params.id },
      });
      res.status(202).send({
        message: 'User delete.',
      });
    } else {
      res.status(404).send({
        message: 'User not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.filter_index = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{
        model: UserPreference,
        as: 'user_preference',
      },
      {
        model: FamilyInfo,
        as: 'family_info',
      },
      {
        model: PersonalInfo,
        as: 'personal_info',
      }],
    });
    const userData = user.toJSON();
    const users = await User.findAll({
      include: [
        {
          model: FamilyInfo,
          as: 'family_info',
          where: {
            city: {
              [Op.eq]: userData.user_preference.city,
            },
          },
        },
      ],
    });
    // const users = await User.findAll({
    //   include: [
    //     {
    //       model: FamilyInfo,
    //       as: 'family_info',
    //       where: {
    //         city: {
    //           [Op.eq]: userData.user_preference.city,
    //         },
    //         state: {
    //           [Op.like]: userData.user_preference.state,
    //         },
    //       },
    //     },
    //     {
    //       model: PersonalInfo,
    //       as: 'personal_info',
    //       where: {
    //         manglik: {
    //           [Op.or]: userData.user_preference.manglik,
    //         },
    //       },
    //     },
    //   ],
    // });
    const responseData = await serialize.filter(users);
    res.status(200).send({
      user_preference: responseData,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({
      message: error.message,
    });
  }
};
