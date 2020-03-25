import redis from 'redis';

const redisClient = redis.createClient(PORT_REDIS);

export default redisClient;
