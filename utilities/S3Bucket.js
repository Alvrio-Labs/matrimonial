const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const S3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESSKEY_ID,
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

module.exports = {
  uploadToS3,
};