require('dotenv').config();
require('dotenv').config({ path: './.env.development' });
require('dotenv').config({ path: './.env.test' });
require('dotenv').config({ path: './.env.production' });

module.exports = {
  'development': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': 'postgres',
    'define': {
      'timestamp' : false
    }
  },
  'production': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': 'postgres',
    'define': {
      'timestamp' : false
    }
  },
  'test': {
    'username': process.env.DB_USERNAME,
    'password': process.env.DB_PASSWORD,
    'database': process.env.DB_NAME,
    'host': process.env.DB_HOST,
    'dialect': 'postgres',
    'define': {
      'timestamp' : false
    }
  },
};