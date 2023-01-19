/** @type {import('sequelize-cli').Migration} */
const userGender = ['Male', 'Female', 'Others'];

module.exports = {
  async up(queryInterface, Sequelize) {
    return [queryInterface.addColumn(
      'user_preferences',
      'gender',
      Sequelize.ENUM(userGender),
    ),
    queryInterface.addColumn(
      'user_preferences',
      'salary',
      Sequelize.STRING(25),
    )];

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
