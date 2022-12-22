const nodemailer = require('nodemailer');
const __ = require('dotenv');
const TRANSPORTER = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  }
);
module.exports = {
  TRANSPORTER
};
