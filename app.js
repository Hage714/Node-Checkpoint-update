const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 3000;

app.use(express.json());

// Middleware to log HTTP requests
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send({ "message": "Server is running" }).status(200);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
