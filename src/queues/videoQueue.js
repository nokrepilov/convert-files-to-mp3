/* Очередь обработки видео */
import Queue from 'bull';
import { downloadFile } from '../services/googleDriveService.js';
import { convertVideoToMp3 } from '../services/conversionService.js';
import { uploadToYandexCloud } from '../services/yandexCloudService.js';

const videoConversionQueue = new Queue('videoConversion');

videoConversionQueue.process(async (job, done) => {
  try {
    const { videoId, clientKey, fileName } = job.data;

    const videoPath = await downloadFile(videoId, `/tmp/${fileName}`);
    const mp3Path = await convertVideoToMp3(videoPath, `/tmp/${fileName}.mp3`);
    const mp3Url = await uploadToYandexCloud(
      'my-bucket',
      mp3Path,
      `${fileName}.mp3`
    );

    done(null, { mp3Url });
  } catch (error) {
    done(error);
  }
});

export function addToQueue(videoId, clientKey, fileName) {
  videoConversionQueue.add({ videoId, clientKey, fileName });
}
