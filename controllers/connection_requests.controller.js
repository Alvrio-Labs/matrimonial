const db = require('../models/index');
const serialize = require('../serializers/connection_request.serializer');

const ConnectionRequest = db.connectionRequest;

exports.show = async (req, res) => {
  try {
    const user = await ConnectionRequest.findOne({ where: { user_id: req.user_id } });
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

exports.create = async (req, res) => {
  try {
    const user = await ConnectionRequest.create(req.body);
    res.status(201).send({
      message: 'request sent',
    });
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const _ = ConnectionRequest.destroy({ where: { id: req.params.id } });
    res.send({
      message: 'connection request deleted!',
    });
  } catch (error) {
    res.status(404).send({
      message: 'connection request not found.',
    });
  }
};
