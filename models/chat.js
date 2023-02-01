const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo((models.user), {
        as: 'user',
        foreignKey: 'id',
        constraints: true,
        onDelete: 'CASCADE',
      });
      this.hasOne((models.chat), {
        as: 'chat',
        foreignKey: 'id',
        constraints: true,
        onDelete: 'CASCADE',
      });
    }
  }
  chat.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: sequelize.literal('uuid_generate_v4()'),
    },
    sender_id: {
      type: DataTypes.UUID,
    },
    reciever_id: {
      type: DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'chat',
    tableName: 'chats',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return chat;
};
