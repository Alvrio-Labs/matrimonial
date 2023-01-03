const passport = require('passport');
const { Strategy } = require('passport-local');
const User = require('./models/user');

passport.serializeUser((user, done) => {
  done(null, User.id);
});
