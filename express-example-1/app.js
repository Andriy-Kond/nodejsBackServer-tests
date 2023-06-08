const express = require('express');

// створити веб-сервер:
const app = express();

// req - об'єкт, в якому інфа про запит, що прийшов (тіло, адреса, і ін.)
// res - об'єкт, який можна налаштувати і відправити відповідь
// найпростіший спосіб відправити відповідь - це метод send, в який можна відправити JSON, або рядок з html-розміткою
app.get('/', (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send('<h1>Home page</h1>'); // send() відправляє відповідь на фронтенд. Другий send() за ним вже не спрацює - отримаємо помилку
});
app.get('/contacts', (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.send('<h1>Contact page</h1>');
});

// Запустити веб-сервер:
app.listen(3000, () => console.log('Server running')); // другий аргумент - це колбек, який спрацьовує, коли сервер запущений
