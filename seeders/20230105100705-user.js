const FS = require('fs');
const path = require('path');

const users = JSON.parse(
  FS.readFileSync(path.resolve('./seeders/dataset/users.json'), 'utf8'),
);
const generateQuery = function (user) {
  const keys = Object.keys(user);
  const columnsArray = [];
  for (let i = 0; i < keys.length; i += 1) {
    const column = keys[i];
    const value = (typeof user[column] === 'string') ? `'${user[column]}'` : user[column];
    columnsArray.push(`${column}=${value}`);
  }
  if (columnsArray.length) {
    return `SELECT * FROM "users" WHERE ${columnsArray.join(' AND ')}`;
  }
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('== Seeding Users...');
    let seedCount = 0;
    let skipCount = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      const query = generateQuery(user);
      if (query) {
        const result = await queryInterface.sequelize.query(query);
        if (result && result[0] && result[0][0]) {
          skipCount += 1;
        } else {
          // user['created_at'] = new Date();
          // user['updated_at'] = new Date();
          await queryInterface.bulkInsert('users', [user]);
          seedCount += 1;
        }
      } else {
        console.error('Unable to generate query!');
      }
    }
    console.log(`== ${skipCount} Skipped, ${seedCount} Seeded,  Association`);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};