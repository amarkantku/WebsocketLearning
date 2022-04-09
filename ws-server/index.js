require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const ws = require('./src/websockets');

const app = express();
const port = process.env.PORT || 3001;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(function(req, res, next) {
    next();
});

app.get('/', (req, res) => {
    res.json('This is the simple response!')
});

const server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}\n\n`);
});

ws.websockets(server);
