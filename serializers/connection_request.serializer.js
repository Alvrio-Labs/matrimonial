const show = async (connectionRequest) => {
  const userData = {
    requestor_id: connectionRequest.requestor_id,
    user_id: connectionRequest.requested_id,
  };
  return userData;
};

module.exports = {
  show,
};
