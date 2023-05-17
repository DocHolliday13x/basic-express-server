`use strict`;

// Validator middleware
const validator = (req, res, next) => {
  if(req.query.name === 'Ryan') {
    next();
  }
  else {
    next('Query must be Ryan');
  }
};

// Export validator middleware
module.exports = validator;







