`use strict`;

// Imports
const express = require('express');

// Handlers - handlers for middleware
const handle500 = require('./error-handlers/500.js');
const handle404 = require('./error-handlers/404.js');
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


// Routes
app.get('/person', validator, (req, res, next) => {

  res.status(200).send(req.query);
});


app.use('*', handle404);
app.use(handle500);

const start = (port) => app.listen(port, () => console.log(`Server up on port ${port}`));

// Exports
module.exports = { start, app};










