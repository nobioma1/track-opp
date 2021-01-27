const { promisify } = require('util');
const redis = require('redis');

const { REDIS_URL } = require('../config');

const redisClient = redis.createClient(REDIS_URL);
const getAsync = promisify(redisClient.get).bind(redisClient);
const setAsync = promisify(redisClient.set).bind(redisClient);

module.exports = {
  getValue: async key => {
    const value = await getAsync(key);
    return JSON.parse(value);
  },

  setValue: async (key, value) => {
    const success = await setAsync(key, JSON.stringify(value));
    return success === 'OK' ? 1 : 0;
  },
};
