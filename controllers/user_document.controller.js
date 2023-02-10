const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

const db = require('../models/index');
const serialize = require('../serializers/educationalInfo.serializer');

const { userDocument } = db;

const S3 = new aws.S3({
  accessKeyId: 'AKIAYQKOU7Y4O2D4ZEUQ',
  secretAccessKey: process.env.S3_SECRET_ACCESSKEY,
  region: process.env.S3_BUCKET_REGION,
});

const uploadToS3 = (fileData) => new Promise((resolve, reject) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${Date.now().toString()}.jpg`,
    Body: fileData,
  };
  S3.upload(params, (err, data) => {
    if (err) {
      console.log(err);
      return reject(err);
    }
    console.log(data);
    return resolve(data);
  });
});

exports.create = async (req, res) => {
  try {
    uploadToS3(req, res, async (err) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        const image = await userDocument.create(req.body);
        const responseData = await serialize.show(image);
        res.status(201).send({
          message: responseData,
        });
      }
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const casteCertificate = await userDocument.findOne({ where: { user_id: req.user_id } });
    if (casteCertificate) {
      userDocument.destroy({
        where: { user_id: req.params.id },
      });
      res.send({
        message: 'Caste Certificate deleted!',
      });
    } else {
      res.status(404).send({
        message: 'Caste Certificate not found.',
      });
    }
  } catch (error) {
    res.status(422).send({ error: error.message });
  }
};
