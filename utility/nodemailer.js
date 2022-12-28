const nodemailer = require('nodemailer');
const _ = require('dotenv');

const TRANSPORTER = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  },
);

module.exports = {
  TRANSPORTER,
};


// const nodemailer = require('nodemailer');
// const fs = require('fs');
// const path = require('path');

// const sendEmail = async (email, subject, link) => {
//   try {
//     // create reusable transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: 465,
//       auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD, // naturally, replace both with your real credentials or an application-specific password
//       },
//     });

//     const options = () => ({
//       from: process.env.FROM_EMAIL,
//       to: email,
//       subject: subject,
//       html: link,
//     });

//     // Send email
//     transporter.sendMail(options(), (error, res) => {
//       if (error) {
//         res.send(error);
//       } else {
//         return res.status(200).json({
//           success: true,
//         });
//       }
//       return null;
//     });
//   } catch (error) {
//     return error;
//   }
//   return null;
// };

// module.exports = {
//   sendEmail,
// };
