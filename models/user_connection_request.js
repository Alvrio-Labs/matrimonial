const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class connectionRequest extends Model {
    static associate(models) {
      // define association here
      this.belongsTo((models.User), {
        as: 'user',
        foreignKey: 'user_id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  connectionRequest.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    requestor_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'connectionRequest',
    tableName: 'connection_request',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return connectionRequest;
};
