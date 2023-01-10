const show = async (lifeStyleDetails) => {
  const details = {
    id: lifeStyleDetails.id,
    user_id: lifeStyleDetails.user_id,
    drinker: lifeStyleDetails.drinker,
    smoker: lifeStyleDetails.smoker,
    diet: lifeStyleDetails.diet,
    animal_lover: lifeStyleDetails.animal_lover,
  };
  return details;
};

module.exports = {
  show,
};
