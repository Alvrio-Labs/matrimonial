const status = ['pending', 'approved ', 'decline'];

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'current_status',
    {
      type: Sequelize.ENUM,
      allowNull: true,
      values: [
        'pending',
        'approved',
        'decline',
      ],
      defaultValue: 'pending',

    },
  ),
  down: (queryInterface, Sequelize) => queryInterface.removeColumn('users', 'status'),

};
