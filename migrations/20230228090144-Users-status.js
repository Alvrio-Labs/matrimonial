module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'status',
    {
      allowNull: true,
      type: Sequelize.STRING,
      defaultValue: 'Pending',

    },
  ),
};
