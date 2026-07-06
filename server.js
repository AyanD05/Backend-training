const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');

app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});