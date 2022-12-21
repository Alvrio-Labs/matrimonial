const JWT = require('jsonwebtoken');
const _ = require('dotenv');
const VERIFYTOKEN = async (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(401).send('Token missing');
  }
  var authHeader = req.headers['authorization'];
  var bearerToken = authHeader.split(' ');
  const token = bearerToken[1];
  JWT.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      res.json({
        success: 0,
        message: 'Invalid token'
      });
    }
    else {
      next();
    }
  });
};

module.exports = {
  VERIFYTOKEN
};
