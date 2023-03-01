const maritalStatus = ['single', 'married', 'widow', 'divorced', 'widower'];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_preferences', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
      },
      city: {
        type: Sequelize.STRING(50),
      },
      state: {
        type: Sequelize.STRING(15),
      },
      manglik: {
        type: Sequelize.BOOLEAN,
      },
      martial_status: {
        type: Sequelize.ENUM(maritalStatus),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_preferences');
  },
};
