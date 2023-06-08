const express = require('express');
const books = require('../../data/books');
// const app = express(); // це створення нового серверу, а нам тре створити лише один аркуш і використовувати його в основному сервері (у app.js)
// тому тре робити так:
const router = express.Router(); // створює один аркуш нотатника

// router.get('/api/books', async (req, res) => {
//   res.json(books);
// });
// router.get('/api/books/:id', async (req, res) => {
//   res.json(books[0]);
// });

// router.post('/api/books', async (req, res) => {
//   res.json(books[0]);
// });

// router.put('/api/books/:id', async (req, res) => {
//   res.json(books[0]);
// });

// router.delete('/api/books/:id', async (req, res) => {
//   res.json(books[0]);
// });

// через те, що ми вже вказали маршрут "/api/books" у app.js (app.use('/api/books', bookRouter);), то тут можна його вже не вказувати:
router.get('/', async (req, res) => {
  res.json(books);
});
router.get('/:id', async (req, res) => {
  res.json(books[0]);
});

router.post('/', async (req, res) => {
  res.json(books[0]);
});

router.put('/:id', async (req, res) => {
  res.json(books[0]);
});

router.delete('/:id', async (req, res) => {
  res.json(books[0]);
});

module.exports = router;
