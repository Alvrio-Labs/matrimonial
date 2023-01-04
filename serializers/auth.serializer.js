const login = async (user) => {
  const userData = {
    token: user.jwtToken,
  };
  return userData;
};

module.exports = {
  login,
};
