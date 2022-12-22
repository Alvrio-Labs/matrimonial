const db = require('../models');
const USER = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const TRANSPORTER = require('../utility/nodemailer');
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await USER.findOne({
      where: { email: req.body.email }
    });
    if (user) {
      const isValidPassword = bcrypt.compare(password, user.password);
      if (user.email == email && isValidPassword) {
        const jwtToken = jwt.sign({ isValidPassword: user }, process.env.SECRET_KEY, {
          expiresIn: process.env.EXPIRY_IN
        });
        return res.json({
          success: 1,
          message: 'Successful',
          token: jwtToken
        });
      }
      else {
        res.send('Invalid username or password');
      }
    }
    else {
      return res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.forgetPassword = async (req, res) => {
  const { email } = req.body;
  const user = await USER.findOne({
    where: { email: req.body.email }
  });
  if (user) {
    const resetToken = jwt.sign({ id: req.body.id }, process.env.RESET_PASSWORD_KEY, {
      expiresIn: '30min'
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'To Change Password',
      html: `
        <h1>Clink on link to reset password</h1>
        <p> <a href ="http://localhost:3000/reset-password/${resetToken}"</a> Click here</p>`
    };
    TRANSPORTER.sendMail(mailOptions, function (err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log('email sent', result.response);
      }
    });
    const currentUser = await user.update({ reset_token: resetToken });
    console.log(currentUser);
  }
  else {
    return res.status(404).send({
      message: 'No user of this id'
    });
  }
};

exports.resetPassword = async (req, res) => {
  const { newPassword, resetToken, reset_token } = req.body;
  if (resetToken) {
    jwt.verify(resetToken, process.env.RESET_PASSWORD_KEY, (err, next) => {
      if (err) {
        return res.status(401).json({
          message: 'Incorrect or expired'
        });
      }
      const user = USER.findOne({ where: { reset_token } }, (err, user)).then(user => {
        if (err) {
          return res.status(400).json({ error: 'User with this token does not exist' });
        } else {
          user.update({ password: newPassword, reset_token: '' }).then(next => {
            res.status(200).send({ message: 'Password update' });
          });
        }
      });
    });
  } else {
    return res.status(404).send({
      message: 'User with this id does not exist'
    });
  }
};