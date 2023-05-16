`use strict`;

// Validator middleware
const validator = (req, res, next) => {
  if(!req.query.name) {
    next('Name Must Be Provided');
  }
  else {
    next();
  }
};

// Export validator middleware
module.exports = validator;







