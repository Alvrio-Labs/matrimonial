const show = async (educationInfo) => {
  const educationalData = {
    id: educationInfo.id,
    user_id: educationInfo.user_id,
    post_graduation_college: educationInfo.post_graduation_college,
    post_graduation_year: educationInfo.post_graduation_year,
    graduation_college: educationInfo.graduation_college,
    graduation_year: educationInfo.graduation_year,
    class_12th_school: educationInfo.class_12th_school,
    class_12th_passout_year: educationInfo.class_12th_passout_year,
    class_10th_school: educationInfo.class_10th_school,
    class_10th_passout_year: educationInfo.class_10th_passout_year,
  };
  return educationalData;
};

module.exports = {
  show,
};
