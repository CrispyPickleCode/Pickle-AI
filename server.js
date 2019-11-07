const config = require('./config');
const fs = require('fs');
const http = require('http');
const express = require('express');
const app = require('./app');

if (!fs.existsSync('.env')) {
    console.log('[Error]: The .env file is not found. Please use the \'.env_sample\' file to create it and fill in the required information.');
    process.exit();
}

console.log('Starting app, listening to port ' + config.port);
const server = http.createServer(app);
server.listen(config.port);

