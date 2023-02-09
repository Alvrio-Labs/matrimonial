const show = async (image) => {
  const Imagedata = {
    id: image.id,
    user_id: image.user_id,
    image_url: image.image_url,
  };
  return Imagedata;
};

module.exports = {
  show,
};

