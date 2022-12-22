const JWT = require('jsonwebtoken');
const __ = require('dotenv');

const VERIFY_TOKEN = async (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(401).send('Token missing');
  }
  const authHeader = req.headers['authorization'];
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];
  JWT.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      res.status(403).json({
        message: 'Invalid token'
      });
    }
    else {
      next();
    }
  });
};

module.exports = {
  VERIFY_TOKEN
};
