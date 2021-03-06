const express = require('express');
const parser = require('body-parser');
const log = require('morgan');
const favicon = require('serve-favicon');

const routePickle = require('./routes/pickle');
const routeId = require('./routes/id');

const app = express();

// Enable for http request logging
// app.use(log('dev'));

app.use(favicon('./favicon.ico'));

app.use(parser.json());

app.use('/pickle', routePickle);
app.use('/id', routeId);

app.use((req, res, next) => {
    res.send('Hello! Welcome, go to /pickle');
});

module.exports = app;
