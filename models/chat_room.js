const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class chatRoom extends Model {
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
  chatRoom.init({
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
    modelName: 'chatRoom',
    tableName: 'chat_room',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return chatRoom;
};
