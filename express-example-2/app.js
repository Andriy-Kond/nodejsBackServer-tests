const express = require('express');

// створити веб-сервер:
const app = express();
const books = require('./books');

app.get('/books', (req, res) => {
  console.log(req.url);
  console.log(req.method);
  const databaseResponse = null;
  // res.send(books); // автоматично перетворить масив або об'єкт у строку в форматі JSON
  // res.send(databaseResponse);
  res.json(books); // більш правильно, бо вміє опрацьовувати null, який відішле бекенд
  // res.json(databaseResponse);
});

// Запустити веб-сервер:
app.listen(3000, () => console.log('Server running')); // другий аргумент - це колбек, який спрацьовує, коли сервер запущений
