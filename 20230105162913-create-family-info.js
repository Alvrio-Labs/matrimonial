/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('familyInfos', {
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
      father_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      mother_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      father_occupation: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      mother_occupation: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      current_address: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      mother_gotra: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      grandmother_gotra: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nanihal_place: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      native_address: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      caste: {
        type: Sequelize.STRING(15),
        allowNull: false,
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
    await queryInterface.dropTable('familyInfos');
  },
};
