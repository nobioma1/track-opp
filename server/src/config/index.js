require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 3001,
  REDIS_URL: process.env.REDIS_URL || 6379,
};
