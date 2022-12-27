const JWT = require('jsonwebtoken');

const VERIFY_TOKEN = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Token missing');
  }
  const authHeader = req.headers.authorization;
  const bearerToken = authHeader.split(' ');
  const token = bearerToken[1];
  JWT.verify(token, process.env.SECRET_KEY, (err, next) => {
    if (err) {
      res.status(403).json({
        message: 'Invalid token',
      });
    } else {
      next();
    }
  });
  return '';
};

module.exports = {
  VERIFY_TOKEN,
};
