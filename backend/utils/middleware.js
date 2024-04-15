const jwt = require("jsonwebtoken");
const logger = require("./logger");
const morgan = require("morgan");

const morganLogger = morgan("tiny");
const requestLogger = (request, response, next) => {
  morganLogger(request, response, () => {
    next();
  });
};

const tokenExtractor = (request, response, next) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    request.token = authorization.replace("Bearer ", "");
  }
  next();
};

const userExtractor = (request, response, next) => {
  const token = request.token;
  if (!token) {
    return response.status(401).json({ error: "Token missing" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!decodedToken.id) {
      return response.status(401).json({ error: "Invalid token" });
    }

    request.user = {
      id: decodedToken.id
    };

    next();
  } catch (error) {
    next(error);
  }
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: "invalid token" });
  } else if (error.name === "TokenExpiredError") {
    return response.status(401).json({ error: "token expired" });
  }

  next(error);
};

module.exports = { errorHandler, requestLogger, tokenExtractor, userExtractor };