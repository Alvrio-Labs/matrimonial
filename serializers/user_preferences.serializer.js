const show = async (preferences) => {
  const preferencesData = {
    id: preferences.id,
    user_id: preferences.user_id,
    martial_status: preferences.martial_status,
    manglik: preferences.manglik,
    city: preferences.city,
    state: preferences.state,
    gender: preferences.gender,
  };
  return preferencesData;
};
const filter = async (users) => {
  const usersList = [];
  users.forEach((u) => {
    const user = {
      id: u.id,
      first_name: u.firstname,
      last_name: u.last_name,
      email: u.email,
      phone: u.phone,
      gender: u.gender,
      date_of_birth: u.date_of_birth,
      city: u.family_info.city,
      father_name: u.family_info.father_name,
      mother_name: u.family_info.mother_name,
      father_occupation: u.family_info.father_occupation,
      mother_occupation: u.family_info.mother_occupation,
      current_address: u.family_info.current_address,
      mother_gotra: u.family_info.mother_gotra,
      grandmother_gotra: u.family_info.grandmother_gotra,
      nanihal_place: u.family_info.nanihal_place,
      native_address: u.family_info.native_address,
      state: u.family_info.state,
      caste: u.family_info.caste,
    };
    usersList.push(user);
  });
  return usersList;
};
module.exports = {
  show, filter,
};
