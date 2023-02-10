const { Op } = require('sequelize');
const db = require('../models/index');
const serialize = require('../serializers/user.serializer');
const { S3Upload } = require('../utilities/S3Bucket');

const { FamilyInfo } = db;
const { UserPreference } = db;
const { User } = db;
const { PersonalInfo } = db;
const { EducationInfo } = db;
const { lifeStyle } = db;

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
    S3Upload(req, res, async (err) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        const user = await User.create(req.body);
        const responseData = await serialize.show(user);
        res.status(201).send({
          message: responseData,
        });
      }
    });
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

const getPagination = (page, size) => {
  const limit = size ? +size : 5;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: tutorials } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems, tutorials, totalPages, currentPage,
  };
};

exports.filter_index = async (req, res) => {
  const { page, size, id } = req.query;
  const condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  const { limit, offset } = getPagination(page, size);

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
        model: EducationInfo,
        as: 'education_info',
      },
      {
        model: lifeStyle,
        as: 'life_style',
      },
      {
        model: PersonalInfo,
        as: 'personal_info',
      }],
    });
    const userData = user.toJSON();
    const users = await User.findAll({
      where: {
        gender: {
          [Op.ne]: user.gender,
        },
        id: {
          [Op.ne]: user.id,
        },
      },
      include: [
        {
          model: FamilyInfo,
          as: 'family_info',
          where: {
            city: {
              [Op.like]: userData.user_preference.city,
            },
          },
        },
        {
          model: PersonalInfo,
          as: 'personal_info',
          where: {
            manglik: {
              [Op.or]: userData.user_preference.manglik,
            },
          },
        },
        {
          model: lifeStyle,
          as: 'life_style',
        },
        {
          model: EducationInfo,
          as: 'education_info',
        },
      ],
      offset: offset,
      limit: limit,
      condition: condition,
    });
    const keys = Object.values(users);

    const responseData = await serialize.filter(keys);
    res.status(200).send({
      user_preference: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: error.message,
    });
  }
};
