const animalLover = ['No', 'Dog lover', 'Cat lover', 'Bird lover', 'other'];
const diet = ['Non-Vegetarian', 'Vegetarian'];

const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class lifeStyle extends Model {
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
  lifeStyle.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
      unique: true,
    },
    drinker: {
      type: DataTypes.BOOLEAN,
    },
    smoker: {
      type: DataTypes.BOOLEAN,
    },
    diet: {
      type: DataTypes.ENUM(diet),
      allowNull: false,
    },
    animal_lover: {
      type: DataTypes.ENUM(animalLover),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'lifeStyle',
    tableName: 'life_style',
    createdAt: 'created_at',
    updatedAt: 'updated_at',

  });
  return lifeStyle;
};
