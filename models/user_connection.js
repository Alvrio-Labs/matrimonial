const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class userConnection extends Model {
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
  userConnection.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    user_id: {
      type: DataTypes.UUID,
    },
    connected_user_id: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'userConnection',
    tableName: 'user_connections',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return userConnection;
};
