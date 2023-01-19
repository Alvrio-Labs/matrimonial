const show = async (preferences) => {
  const preferencesData = {
    id: preferences.id,
    user_id: preferences.user_id,
    martial_status: preferences.martial_status,
    manglik: preferences.manglik,
    city: preferences.city,
  };
  return preferencesData;
};

module.exports = {
  show,
};
