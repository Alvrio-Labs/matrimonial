
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo((models.User), {
        as: 'user',
        foreignKey: 'id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.Message), {
        as: 'Message',
        foreignKey: 'id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  Chat.init({
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
  }, {
    sequelize,
    modelName: 'Chat',
    tableName: 'chats',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Chat;
};
