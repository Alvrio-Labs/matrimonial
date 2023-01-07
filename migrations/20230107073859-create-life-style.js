const animalLover = ['No', 'Dog lover', 'Cat lover', 'Bird lover', 'other'];
const diet = ['Non-Vegetarian', 'Vegetarian'];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('life_style', {
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
      drinker: {
        type: Sequelize.BOOLEAN,
      },
      smoker: {
        type: Sequelize.BOOLEAN,
      },
      diet: {
        type: Sequelize.ENUM(diet),
        allowNull: false,
      },
      animal_lover: {
        type: Sequelize.ENUM(animalLover),
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
    await queryInterface.dropTable('life_style');
  },
};
