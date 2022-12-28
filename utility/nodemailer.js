const nodemailer = require('nodemailer');
const _ = require('dotenv');

const sendmail = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  },
);

module.exports = {
  sendmail,
};

