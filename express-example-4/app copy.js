const express = require('express');
const books = require('./data/books');

const app = express();
const cors = require('cors');
app.use(cors());

// // middleware треба викликати до get-запиту
// // ~ middleware відпрацьовує для будь-якого маршруту (якщо маршрут явно не заданий) і express далі не шукає. Щоби express продовжив роботу, треба викликати next()
// app.use(async (req, res, next) => {
//   console.log('First middleware');
//   next();
// });

// app.use(async (req, res, next) => {
//   console.log('Second middleware');
//   next();
// });

// // ~ Приклад використання middleware для логування:
// app.use(async (req, res, next) => {
//   const { method, url } = req;
//   const data = moment().format('DD-MM-YYYY_hh:mm:ss');
//   await fs.appendFile('./public/server.log', `\n${method} ${url} ${data}`); // \n - щоб писало з нового рядку
//   next();
// });

// Маршрути краще виносити в окремий файл, щоби не було сміття (зазвичай - у теку routes/api)
app.get('/api/books', async (req, res) => {
  res.json(books);
});
app.get('/api/books/:id', async (req, res) => {
  res.json(books[0]);
});

app.post('/api/books', async (req, res) => {
  res.json(books[0]);
});

app.put('/api/books/:id', async (req, res) => {
  res.json(books[0]);
});

app.delete('/api/books/:id', async (req, res) => {
  res.json(books[0]);
});

// // ~ Приклад використання middleware для відповіді по неіснуючому маршруту:
// // За замовчуванням з 404 повертається html, а треба повертати JSON. Треба писати в кінці після всіх get-запитів.
// app.use(async (req, res, next) => {
//   res.status(404).json({ message: 'Page not found' });
//   next();
// });

// Запустити веб-сервер:
app.listen(3000, () => console.log('Server running')); // другий аргумент - це колбек, який спрацьовує, коли сервер запущений
