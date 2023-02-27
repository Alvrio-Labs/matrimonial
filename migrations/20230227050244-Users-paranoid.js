module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'deletedAt',
    {
      allowNull: true,
      type: Sequelize.DATE,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('users', 'deleted_at'),
};
