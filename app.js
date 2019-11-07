const express = require('express');
const parser = require('body-parser');
const log = require('morgan');
const favicon = require('serve-favicon');

const routePickle = require('./routes/pickle');
const routeId = require('./routes/id');

const app = express();

app.use(log('dev'));

app.use(favicon('./favicon.ico'));

app.use(parser.json());

app.use('/pickle', routePickle);
app.use('/id', routeId);

app.use((req, res, next) => {
    res.send('Here I am, on the home page');
});

module.exports = app;
