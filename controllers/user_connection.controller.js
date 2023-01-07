const db = require('../models/index');
const serialize = require('../serializers/connection_request.serializer');

const { userConnection } = db;

exports.show = async (req, res) => {
  try {
    const user = await userConnection.findOne({ where: { user_id: req.user_id } });
    const responseData = await serialize.show(user);
    res.status(200).send({
      connection_request: responseData,
    });
  } catch (error) {
    res.status(404).send({
      message: 'No connection request found ',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = userConnection.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'connection request deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'connection request not found.',
    });
  }
};
