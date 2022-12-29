// ENUMS
const userGender = ['Male', 'Female', 'Others'];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
      .then(async () => {
        await queryInterface.createTable('users', {
          id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.DataTypes.UUID,
            defaultValue: Sequelize.literal('uuid_generate_v4()'),
          },
          first_name: {
            type: Sequelize.STRING(50),
            allowNull: false,
          },
          last_name: {
            type: Sequelize.STRING(50),
            allowNull: false,
          },
          email: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
          },
          phone: {
            type: Sequelize.STRING(15),
          },
          is_verified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
          },
          password: {
            type: Sequelize.STRING(250),
          },
          reset_token: {
            type: Sequelize.STRING(250),
          },
          reset_token_expiry: {
            type: Sequelize.DATE,
          },
          gender: {
            type: Sequelize.ENUM(userGender),
            allowNull: false,
          },
          date_of_birth: {
            type: Sequelize.DATE,
            allowNull: false,
          },
          is_admin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
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
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
