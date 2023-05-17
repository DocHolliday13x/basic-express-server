`use strict`;

// Logger Middleware - provides console info for easier debugging
const logger = (req, res, next) => {
  console.log('Request Info', req.method, req.path);
  next();
};

// Export Logger Middleware
module.exports = logger;








