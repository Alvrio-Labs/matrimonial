const index = async (users) => {
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
    };
    usersList.push(user);
  });
  return usersList;
};

const show = async (user) => {
  const userData = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    gender: user.gender,
    date_of_birth: user.date_of_birth,
  };
  return userData;
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
      // manglik: u.personal_info.manglik,
    };
    usersList.push(user);
  });
  return usersList;
};
module.exports = {
  index,
  show,
  filter,
};
