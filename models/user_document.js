const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class userDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userDocument.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
      unique: {
        args: true,
        msg: 'user caste detail with this id already added',
      },
    },
    caste_certificate: {
      type: DataTypes.STRING(250),
    },
  }, {
    sequelize,
    modelName: 'userDocument',
    tableName: 'user_documents',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return userDocument;
};
