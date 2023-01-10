const maritalStatus = ['single', 'married', 'widow', 'divorced', 'widower'];
const horoscope = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class personalInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo((models.User), {
        as: 'user',
        foreignKey: 'id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  personalInfo.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false,
    },
    job: {
      type: DataTypes.STRING,
    },
    zodiac_sign: {
      type: DataTypes.ENUM(horoscope),
      allowNull: false,
    },
    martial_status: {
      type: DataTypes.ENUM(maritalStatus),
      allowNull: false,
    },
    manglik: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    about_us: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    salary: {
      type: DataTypes.STRING,
    },
    hobbies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mother_tongue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    self_gotra: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'PersonalInfo',
    tableName: 'personal_info',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return personalInfo;
};
