const index = async (users) => {
  const usersList = [];

  users.forEach((u) => {
    const user = {
      id: u.id,
      first_name: u.first_name,
      last_name: u.last_name,
      email: u.email,
      phone: u.phone,
      gender: u.gender,
      date_of_birth: u.date_of_birth,
      status: u.current_status,
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
    status: user.current_status,
  };
  return userData;
};

const filter = async (users) => {
  const usersList = [];
  users.forEach((u) => {
    const user = {
      id: u.id,
      first_name: u.first_name,
      last_name: u.last_name,
      email: u.email,
      phone: u.phone,
      gender: u.gender,
      date_of_birth: u.date_of_birth,
      personal_info: {
        manglik: u.personal_info.manglik,
        job: u.personal_info.job,
        zodiac_sign: u.personal_info.zodiac_sign,
        martial_status: u.personal_info.martial_status,
        height: u.personal_info.height,
        about_us: u.personal_info.about_us,
        salary: u.personal_info.salary,
        hobbies: u.personal_info.hobbies,
        mother_tongue: u.personal_info.mother_tongue,
        self_gotra: u.personal_info.self_gotra,
      },
      eduaction_info: {
        post_graduation_college: u.education_info.post_graduation_college,
        post_graduation_year: u.education_info.post_graduation_year,
        graduation_college: u.education_info.graduation_college,
        graduation_year: u.education_info.graduation_year,
        class_12th_school: u.education_info.class_12th_school,
        class_12th_passout_year: u.education_info.class_12th_passout_year,
        class_10th_school: u.education_info.class_10th_school,
        class_10th_passout_year: u.education_info.class_10th_passout_year,
      },
      family_info: {
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
      },
      life_style: {
        drinker: u.life_style.drinker,
        smoker: u.life_style.smoker,
        diet: u.life_style.diet,
        animal_lover: u.life_style.animal_lover,
      },
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
