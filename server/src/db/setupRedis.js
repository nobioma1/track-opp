const redis = require('redis');

const redisClient = redis.createClient(PORT_REDIS);

module.exports = redisClient;
