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

const update = async (user) => {
  const userData = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
    gender: user.gender,
    date_of_birth: user.date_of_birth,
  };
  return userData;
};
module.exports = {
  index,
  show,
  update,
};
