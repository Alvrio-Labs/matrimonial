const show = async (personalInfo) => {
  const personalData = {
    id: personalInfo.id,
    user_id: personalInfo.user_id,
    job: personalInfo.job,
    zodiac_sign: personalInfo.zodiac_sign,
    martial_status: personalInfo.martial_status,
    manglik: personalInfo.manglik,
    height: personalInfo.height,
    about_us: personalInfo.about_us,
    salary: personalInfo.salary,
    hobbies: personalInfo.hobbies,
    mother_tongue: personalInfo.mother_tongue,
    self_gotra: personalInfo.self_gotra,
  };
  return personalData;
};

module.exports = {
  show,
};
