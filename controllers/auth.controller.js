const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../models');

const { User } = db.User;
const TRANSPORTER = require('../utility/nodemailer');

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const resetToken = jwt.sign(
      { id: req.body.id },
      process.env.RESET_PASSWORD_KEY,
      {
        expiresIn: process.env.EXPIRY_IN,
      },
    );
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'To Change Password',
      html: `
        <h1>Clink on link to reset password</h1>
        <p> <a href ="http://localhost:3000/reset-password/${resetToken}"</a> Click here</p>`,
    };
    TRANSPORTER.sendMail(mailOptions, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('email sent', result.response);
      }
    });
    const currentUser = await user.update({ reset_token: resetToken });
    console.log(currentUser);
  } else {
    return res.status(404).send({
      message: 'No user of this id',
    });
  }
  return '';
};

exports.resetPassword = async (req, res) => {
  const { newPassword, resetToken } = req.body;
  if (resetToken) {
    jwt.verify(resetToken, process.env.RESET_PASSWORD_KEY).then((err, token) => {
      if (err) {
        return res.status(401).json({
          message: 'Incorrect or expired',
        });
      }

      User.findOne({ where: { reset_token: token } }).then((error, user) => {
        if (error) {
          return res.status(400).json({
            error: 'User with this token does not exist',
          });
        }
        if (user) {
          user.update({ password: newPassword, reset_token: '' }).then(() => res.status(200).send({
            message: 'Password update',
          }));
        }
      });
      return null;
    });
  } else {
    return res.status(404).send({
      message: 'User with this id does not exist',
    });
  }
  return null;
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ where: { email } });
  if (result != null) {
    const isMatch = await bcrypt.compare(password, result.password);
    if (result.email === email && isMatch) {
      const jwtToken = jwt.sign({ isMatch: result }, process.env.SECRET_KEY, {
        expiresIn: process.env.EXPIRY_IN,
      });
      res.json({
        message: 'Successful',
        token: jwtToken,
      });
    } else {
      return res.status(401).send('email or password not vaild');
    }
  } else {
    return res.status(404).send({
      message: 'User not found',
    });
  }
  return null;
};
