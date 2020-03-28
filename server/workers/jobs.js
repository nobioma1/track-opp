const cron = require('node-cron');

const scrapeROK = require('../scrappers/scrapeROK');
const redisClient = require('../src/db/redisClient');

cron.schedule('00 7 * * *', async () => {
  const allRoles = await scrapeROK('https://remoteok.io');
  const juniorRoles = await scrapeROK('https://remoteok.io/remote-junior-jobs');

  await redisClient.setValue('jobPostings', { allRoles, juniorRoles });
});
