/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('education_info', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      user_id: {
        type: Sequelize.UUID,
      },
      post_graduation_college: {
        type: Sequelize.STRING(40),
      },
      post_graduation_year: {
        type: Sequelize.DATE,
      },
      graduation_college: {
        type: Sequelize.STRING(40),
      },
      graduation_year: {
        type: Sequelize.DATE,
      },
      class_12th_school: {
        type: Sequelize.STRING(40),
      },
      class_12th_passout_year: {
        type: Sequelize.DATE,
      },
      class_10th_school: {
        type: Sequelize.STRING(40),
      },
      class_10th_passout_year: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('education_info');
  },
};
