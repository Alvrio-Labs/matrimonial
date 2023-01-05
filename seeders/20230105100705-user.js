
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.insert('User', [{
      id: 'cd371b80-d050-4a6c-968f-839ae8587570',
      first_name: 'qwert',
      last_name: 'abc',
      email: 'abc@gmail.com',
      phone: '1234567890',
      gender: 'Male',
      password: 'qwerty123',
      date_of_birth: '2000-01-01',
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
