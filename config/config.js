require('dotenv').config();
require('dotenv').config({ path: './.env.development' });
require('dotenv').config({ path: './.env.test' });
require('dotenv').config({ path: './.env.production' });
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});
if (process.env.NODE_ENV === 'production') {
  'username' =  process.env.DB_USERNAME,
  'password' = process.env.DB_PASSWORD,
  'database' = process.env.DB_NAME,
  'host' = process.env.DB_HOST,
  'dialect' = 'postgres',
  'define' = {
    'timestamp': false
  }
}
else if (process.env.NODE_ENV === 'test') {
  'username' = process.env.DB_USERNAME,
    'password' = process.env.DB_PASSWORD,
    'database' = process.env.DB_NAME,
    'host' = process.env.DB_HOST,
    'dialect' = 'postgres',
    'define' = {
      'timestamp': false
    }

} else {
  'username' = process.env.DB_USERNAME,
  'password' = process.env.DB_PASSWORD,
  'database' = process.env.DB_NAME,
  'host' = process.env.DB_HOST,
  'dialect' = 'postgres',
  'define' = {
    'timestamp': false
  }}
module.exports = {
  production,development,test
}
// module.exports = {
//   'development': {
//     'username': process.env.DB_USERNAME,
//     'password': process.env.DB_PASSWORD,
//     'database': process.env.DB_NAME,
//     'host': process.env.DB_HOST,
//     'dialect': 'postgres',
//     'define': {
//       'timestamp' : false
//     }
//   },
//   'production': {
//     'username': process.env.DB_USERNAME,
//     'password': process.env.DB_PASSWORD,
//     'database': process.env.DB_NAME,
//     'host': process.env.DB_HOST,
//     'dialect': 'postgres',
//     'define': {
//       'timestamp' : false
//     }
//   },
//   'test': {
//     'username': process.env.DB_USERNAME,
//     'password': process.env.DB_PASSWORD,
//     'database': process.env.DB_NAME,
//     'host': process.env.DB_HOST,
//     'dialect': 'postgres',
//     'define': {
//       'timestamp' : false
//     }
//   },
// };


// module.exports = {
//   NODE_ENV: process.env.NODE_ENV || 'development',
//   if(){
    
//   }
//   'username': process.env.DB_USERNAME,
//   'password': process.env.DB_PASSWORD,
//   'database': process.env.DB_NAME,
//   'host': process.env.DB_HOST,
//   'dialect': 'postgres',
//   'define': {
//     'timestamp': false
//   }
// }


// module.exports = {
//   'development': {
//     'username': process.env.DB_USERNAME,
//     'password': process.env.DB_PASSWORD,
//     'database': process.env.DB_NAME,
//     'host': process.env.DB_HOST,
//     'dialect': 'postgres',
//     'define': {
//       'timestamp' : false
//     }
//   },
//   'production': {
//     'username': process.env.DB_USERNAME,
//     'password': process.env.DB_PASSWORD,
//     'database': process.env.DB_NAME,
//     'host': process.env.DB_HOST,
//     'dialect': 'postgres',
//     'define': {
//       'timestamp' : false
//     }
//   },
//   'test': {
//     'username': process.env.DB_USERNAME,
//     'password': process.env.DB_PASSWORD,
//     'database': process.env.DB_NAME,
//     'host': process.env.DB_HOST,
//     'dialect': 'postgres',
//     'define': {
//       'timestamp' : false
//     }
//   },
// };

// require('dotenv').config();
// require('dotenv').config({ path: './.env.development' });
// require('dotenv').config({ path: './.env.test' });
// require('dotenv').config({ path: './.env.production' });

// const env = process.env.NODE_ENV; // 'dev' or 'test'
// console.log(process.env.NODE_ENV)
// // const dev = {
// //   app: {
// //     port: 3000
// //   },
// //   db: {
// //     host: 'localhost',
// //     port: 27017,
// //     name: 'db'
// //   }
// // };

// // const test = {
// //   'username': process.env.DB_USERNAME,
// //   'password': process.env.DB_PASSWORD,
// //   'database': process.env.DB_NAME,
// //   'host': process.env.DB_HOST,
// //   'dialect': 'postgres',
// //   'define': {
// //     'timestamp': false
// //   }
// // };

// // const config = {
// //   dev,
// //   test
// // };

// module.exports = config[env];