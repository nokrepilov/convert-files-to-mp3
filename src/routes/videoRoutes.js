/* Роутинг для получения ссылок и статусов */
import { Router } from 'express';
import { processVideoRequest } from '../controllers/videoController.js';

const router = Router();

router.post('/convert', processVideoRequest);

export default router;
