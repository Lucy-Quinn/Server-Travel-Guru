const createError = require("http-errors");

exports.isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) next();
  else next(createError(401, 'Unauthorized - No user session'));
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) next();
  else next(createError(403, 'Forbidden - User already logged in'));
};

exports.validationLogin = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    next(createError(400, 'Bad Request - Missing credentials'));
  }
  else next();
};
