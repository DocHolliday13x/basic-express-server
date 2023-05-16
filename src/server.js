`use strict`;

// Imports
const express = require('express');
const handle500 = require('./middleware/500.js');
const handle404 = require('./middleware/404.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

// Express Singleton
const app = express();

// Middleware - functions that run before the route handler
app.use(express.json());
app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World');
});

app.use('*', handle404);
app.use(handle500);

// Routes
app.get('/person', validator, (req, res, next) => {
  const output = { name: req.query.name };
  res.status(200).json(output);
});


const start = (port) => app.listen(port, () => console.log(`Server up on port ${port}`));

// Exports
module.exports = { start, app};










