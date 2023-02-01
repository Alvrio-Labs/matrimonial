
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo((models.chat), {
        as: 'chat',
        foreignKey: 'id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  message.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    sender_id: {
      type: DataTypes.UUID,
    },
    receiver_id: {
      type: DataTypes.UUID,
    },
    chat_id: {
      type: DataTypes.UUID,
    },
    message: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'message',
    tableName: 'messages',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return message;
};
