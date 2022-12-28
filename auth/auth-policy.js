// const JWT = require('jsonwebtoken');

// const verifyToken = async (req, res) => {
//   if (!req.headers.authorization) {
//     return res.status(401).send('Token missing');
//   }
//   const authHeader = req.headers.authorization;
//   const bearerToken = authHeader.split(' ');
//   const token = bearerToken[1];
//   JWT.verify(token, process.env.SECRET_KEY, (err, next) => {
//     if (err) {
//       res.status(403).json({
//         message: 'Invalid token',
//       });
//     } else {
//       next();
//     }
//   });
//   return '';
// };

// module.exports = {
//   verifyToken,
// };


const JWT = require('jsonwebtoken');

const verifyToken = async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Token missing');
  }
  const authHeader = req.headers.authorization.split(' ')[1];
  JWT.verify(authHeader, process.env.SECRET_KEY, (err, next) => {
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
  verifyToken,
};
