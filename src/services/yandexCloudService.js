/* Загрузка mp3 в Yandex Object Storage */
import fs from 'fs';
import s3 from '../config/yandexCloud.js';

export async function uploadToYandexCloud(bucketName, filePath, fileKey) {
  const fileStream = fs.createReadStream(filePath);
  const uploadParams = {
    Bucket: bucketName,
    Key: fileKey,
    Body: fileStream,
  };
  const data = await s3.upload(uploadParams).promise();
  return data.Location;
}
