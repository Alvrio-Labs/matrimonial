require('dotenv').config()

module.exports = {
  USERNAME: process.env.USERNAME,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE_DEVELOPMENT,
  HOST: process.env.HOST,
  PORT: process.env.PORT,
  "dialect": "postgres",
  "define": {
    "timestamp": true
  },
  "pool": {
    "max": 5,
    "min": 0,
    "acquire": 30000,
    "idle": 10000
  }
}
