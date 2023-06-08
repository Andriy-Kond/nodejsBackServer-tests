const express = require('express');
const books = require('../../data/books');
const router = express.Router(); // створює один аркуш нотатника

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
