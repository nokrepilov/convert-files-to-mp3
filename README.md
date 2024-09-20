# Video to MP3 Conversion Service

## Описание проекта

Этот проект реализует сервис для асинхронной конвертации видеофайлов (ссылки на Google Drive) в mp3 и загрузки аудиофайлов в Yandex.Cloud. Сервис поддерживает:
- Асинхронную обработку файлов в очереди.
- Авторизацию клиентов через уникальные ключи.
- Обработку нескольких видеофайлов.
- Загрузку аудиофайлов в Yandex Object Storage и предоставление ссылок на скачивание.

### Основные функции:
1. Получение ссылки на видеофайл из Google Drive.
2. Конвертация видео в mp3.
3. Загрузка mp3 в Yandex.Cloud.
4. Возвращение ссылок клиенту по завершению конверсии.

## Установка

### Требования:
- Node.js (>= 14.x)
- Google Cloud API credentials
- Yandex.Cloud Object Storage credentials

### Шаги установки:
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/video-to-mp3-service.git
   cd video-to-mp3-service

2. Установите зависимости:
   ```bash
   npm install

3. Настройте переменные окружения: Создайте файл .env в корневой директории и добавьте следующие параметры:
   ```bash
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GOOGLE_REDIRECT_URI=your-google-redirect-uri
   YANDEX_ACCESS_KEY=your-yandex-access-key
   YANDEX_SECRET_KEY=your-yandex-secret-key

4. Настройте OAuth 2.0 для Google API:
    В Google Cloud Console создайте OAuth-клиент и получите client_id, client_secret и redirect_uri.

5. Запустите сервер:
   ```bash
   npm start

### Пример использования:
    Запрос на конвертацию видеофайла:
1. Отправьте POST-запрос на эндпоинт /api/videos/convert с телом запроса:
   ```bash
   {
  "videoId": "your-google-drive-video-id",
  "clientKey": "your-client-key",
  "fileName": "output-file-name"
   }

2. Сервер добавит задание на конвертацию в очередь и вернёт статус:
   ```bash
   {
  "message": "Video is being processed"
   }

3. Ответ по завершению конверсии:
    После завершения конверсии видео будет загружено в Yandex.Cloud, и вы получите ссылку на скачивание mp3 файла в виде лога или через механизмы нотификации.

### Настройка Yandex Cloud
    Чтобы настроить Object Storage в Yandex.Cloud:
    1. Создайте бакет в Yandex Object Storage.
    2. Получите accessKey и secretKey для вашего бакета.
    3. Добавьте эти ключи в файл .env.