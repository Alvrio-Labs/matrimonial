const show = async (user) => {
  const userData = {
    id: user.id,
    user_id: user.user_id,
    caste_certificate: user.caste_certificate,
  };
  return userData;
};

module.exports = {
  show,
};
