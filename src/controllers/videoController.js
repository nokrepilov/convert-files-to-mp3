/* Контроллер для работы с API запросами */
import { addToQueue } from '../queues/videoQueue.js';
import { authenticateClient } from '../config/clients.js';

export function processVideoRequest(req, res) {
  const { videoId, clientKey, fileName } = req.body;

  if (!authenticateClient(clientKey)) {
    return res.status(403).json({ message: 'Invalid client key' });
  }

  addToQueue(videoId, clientKey, fileName);
  return res.status(200).json({ message: 'Video is being processed' });
}
