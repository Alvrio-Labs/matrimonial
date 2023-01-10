const maritalStatus = ['single', 'married', 'widow', 'divorced', 'widower'];
const horoscope = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('personal_info', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      user_id: {
        type: Sequelize.UUID,
      },
      about_us: {
        type: Sequelize.STRING(50),
      },
      job: {
        type: Sequelize.STRING(50),
      },
      zodiac_sign: {
        type: Sequelize.ENUM(horoscope),
        allowNull: false,
      },
      manglik: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      martial_status: {
        type: Sequelize.ENUM(maritalStatus),
        allowNull: false,
      },
      salary: {
        type: Sequelize.STRING(25),
        allowNull: false,
      },
      hobbies: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      height: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      mother_tongue: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      self_gotra: {
        type: Sequelize.STRING(50),
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
    await queryInterface.dropTable('personal_info');
  },
};
