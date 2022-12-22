'use strict';
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
            is_active: {
              type: Sequelize.BOOLEAN,
              defaultValue: true,
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
            first_login_token: {
              type: Sequelize.STRING(250),
            },
            gender: {
              type: Sequelize.ENUM(userGender),
              allowNull: false,
            },
            date_of_birth: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            mobile: {
              type: Sequelize.STRING(15),
            },
            is_email_verified: {
              type: Sequelize.BOOLEAN,
              defaultValue: false,
            },
            is_phone_verified: {
              type: Sequelize.BOOLEAN,
              defaultValue: false,
            },
            is_admin: {
              type: Sequelize.BOOLEAN,
              defaultValue: false,
            },
            sessions: {
              type: Sequelize.ARRAY(Sequelize.STRING),
            },
            delete_reason: {
              type: Sequelize.TEXT,
              allowNull: true,
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
