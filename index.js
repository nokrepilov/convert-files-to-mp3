/* Точка входа приложения */
import express from 'express';
import videoRoutes from './src/routes/videoRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/videos', videoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
