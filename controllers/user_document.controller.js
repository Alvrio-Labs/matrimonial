const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');

const db = require('../models/index');
const serialize = require('../serializers/educationalInfo.serializer');

const { userDocument } = db;

// const S3 = new aws.S3({
//   accessKeyId: '',
//   secretAccessKey: '',
//   region: '',
// });
const S3 = new S3Client({
  region: process.env.S3_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESSKEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESSKEY,
    region: process.env.S3_BUCKET_REGION,
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

const upload = () => {
  multer({
    storage: multerS3({
      s3: S3,
      limits: {
        fileSize: '1048576',
      },
      bucket: process.env.AWS_BUCKET_NAME,
      metadata: function (req, res, cb) {
        cb(null, req.params.id + '-', +Date.now());
      },
      key: function (req, res, cb) {
        cb(null, req.params.id + '-' + Date.now());
      },

    }),
  });
};

exports.create = async (req, res) => {
  try {
    const uploadSingle = upload().single('Document');
    uploadSingle(req, res, async (err) => {
      if (err) {
        res.status(400).json({ message: err.message });
      } else {
        const image = await userDocument.create(req.body);
        const responseData = await serialize.show(image);
        console.log(image);
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
