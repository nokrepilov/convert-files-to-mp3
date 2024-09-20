/* Скачивание видео с Google Drive */
import fs from 'fs';
import { google } from 'googleapis';
import auth from '../config/googleAuth.js';

const drive = google.drive({ version: 'v3', auth });

export async function downloadFile(fileId, destinationPath) {
  const response = await drive.files.get(
    { fileId, alt: 'media' },
    { responseType: 'stream' }
  );

  return new Promise((resolve, reject) => {
    const dest = fs.createWriteStream(destinationPath);
    response.data
      .on('end', () => resolve(destinationPath))
      .on('error', (err) => reject(err))
      .pipe(dest);
  });
}
