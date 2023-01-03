const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { DataTypes } = require('sequelize');
const sequelize = require('./models/index');
const User = require('./models/user')(sequelize, DataTypes);

passport.use(new LocalStrategy(
  async (id, done) => {
    try {
      const user = await User.findByPk({ where: { id: id } });
      if (!user) {
        return done(null, false, { message: 'Incorrect id.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  },
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => { done(null, user); });
});
