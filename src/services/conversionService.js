/* Конвертация видео в mp3 */
import ffmpeg from 'fluent-ffmpeg';

export async function convertVideoToMp3(inputPath, outputPath) {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .toFormat('mp3')
      .on('end', () => resolve(outputPath))
      .on('error', (err) => reject(err))
      .save(outputPath);
  });
}
