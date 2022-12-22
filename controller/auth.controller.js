const db = require('../models');
const USER = db.User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
          expiresIn: '10m'
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
      return res.status(404).send({ message: 'User not found'});
    }
  } catch (error) {
    console.log(error);
  }
};