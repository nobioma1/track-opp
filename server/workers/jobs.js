const cron = require('node-cron');

const scrapeHellner = require('../scrappers/scrapeHellner');
const redisClient = require('../src/db/redisClient');

function workerJobs() {
  console.log('Worker Launched...');

  cron.schedule('*/58 * * * *', async () => {
    console.log('Fetching new data...');
    // const allRoles = await scrapeROK('https://remoteok.io');
    // const juniorRoles = await scrapeROK('https://remoteok.io/remote-junior-jobs');

    const postings = await scrapeHellner();
    await redisClient.setValue('jobPostings', { postings });
    console.log('Fetch complete and saved...');
  });
}

workerJobs();
