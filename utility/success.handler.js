const successHandler = {
  successRequest: () => ({
    status: 200,
    message: 'success',
  }),
  createRequest: () => ({
    status: 201,
    message: 'user created',
  }),
  AcceptedRequest: () => ({
    status: 202,
    updatedMessage: 'User data has been updated',
  }),
};

module.exports = { successHandler };
