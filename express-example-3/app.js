// Робота з middleware
const express = require('express');

// створити веб-сервер:
const app = express();
const books = require('./books');
const moment = require('moment');
// Для запису логування у файл використовуємо fs:
const fs = require('fs/promises');
// Для використання різних адрес для фронта і бека, використовуємо cors
const cors = require('cors');
const corsMiddleware = cors(); // функція cors() повертає middleware
app.use(corsMiddleware); // після цього express не буде відмовляти фронт/бек
// або короткий запис:
app.use(cors());

// middleware треба викликати до get-запиту
// ~ middleware відпрацьовує для будь-якого маршруту (якщо маршрут явно не заданий) і express далі не шукає. Щоби express продовжив роботу, треба викликати next()
app.use(async (req, res, next) => {
  console.log('First middleware');
  next();
});

app.use(async (req, res, next) => {
  console.log('Second middleware');
  next();
});

// ~ Приклад використання middleware для логування:
app.use(async (req, res, next) => {
  const { method, url } = req;
  const data = moment().format('DD-MM-YYYY_hh:mm:ss');
  await fs.appendFile('./public/server.log', `\n${method} ${url} ${data}`); // \n - щоб писало з нового рядку
  next();
});

app.get('/products', async (req, res) => {
  res.json([]);
});

app.get('/books', async (req, res) => {
  res.json(books);
});

// ~ Приклад використання middleware для відповіді по неіснуючому маршруту:
// За замовчуванням з 404 повертається html, а треба повертати JSON. Треба писати в кінці після всіх get-запитів.
app.use(async (req, res, next) => {
  res.status(404).json({ message: 'Page not found' });
  next();
});

// Запустити веб-сервер:
app.listen(3000, () => console.log('Server running')); // другий аргумент - це колбек, який спрацьовує, коли сервер запущений
