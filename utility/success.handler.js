const successHandler = {
  successRequest: () => ({
    status: 200,
    message: 'success',
    deleteMessage: 'User data has been deleted',
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
