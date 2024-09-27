/* Файл конфигурации клиентов с ключами */
const clients = {
  client1: 'API_KEY_CLIENT_1',
  client2: 'API_KEY_CLIENT_2',
};

export const authenticateClient = (clientKey) => {
  // Проверяем, есть ли переданный clientKey в объекте clients
  return Object.keys(clients).includes(clientKey);
};
