const express = require('express');
const cors = require('cors');
const bookRouter = require('./routes/api/books');
const app = express();

app.use(cors());
app.use('/api/books', bookRouter); // Вказує, що усі маршрути, що починаються з /api/books тре шукати у bookRouter

// Запустити веб-сервер:
app.listen(3000);
