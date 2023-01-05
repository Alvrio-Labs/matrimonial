const show = async (familyInfo) => {
  const userData = {
    id: familyInfo.id,
    user_id: familyInfo.user_id,
    father_name: familyInfo.father_name,
    mother_name: familyInfo.mother_name,
    father_occupation: familyInfo.father_occupation,
    mother_occupation: familyInfo.mother_occupation,
    current_address: familyInfo.current_address,
    mother_gotra: familyInfo.mother_gotra,
    grandmother_gotra: familyInfo.grandmother_gotra,
    nanihal_place: familyInfo.nanihal_place,
    native_address: familyInfo.native_address,
    city: familyInfo.city,
    state: familyInfo.state,
    caste: familyInfo.caste,
  };
  return userData;
};

module.exports = {
  show,
};
