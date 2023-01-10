const show = async (familyDetails) => {
  const details = {
    id: familyDetails.id,
    user_id: familyDetails.user_id,
    father_name: familyDetails.father_name,
    mother_name: familyDetails.mother_name,
    father_occupation: familyDetails.father_occupation,
    mother_occupation: familyDetails.mother_occupation,
    current_address: familyDetails.current_address,
    mother_gotra: familyDetails.mother_gotra,
    grandmother_gotra: familyDetails.grandmother_gotra,
    nanihal_place: familyDetails.nanihal_place,
    native_address: familyDetails.native_address,
    city: familyDetails.city,
    state: familyDetails.state,
    caste: familyDetails.caste,
  };
  return details;
};

module.exports = {
  show,
};
