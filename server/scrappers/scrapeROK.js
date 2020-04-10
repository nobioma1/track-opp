const puppeteer = require('puppeteer');

async function scrapeROK(url) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const jobs = await page.evaluate(() => {
      function getJobDetails(section) {
        const jobsEl = section.querySelectorAll('.job');
        const postings = {};

        jobsEl.forEach((el) => {
          const link = `https://remoteok.io${el.dataset.url}`;
          const jobTitle = el.querySelector('.company > h2').textContent;
          const company = el.querySelector('.company .companyLink > h3')
            .textContent;
          const tags = Array.from(el.querySelectorAll('.tag')).map(
            (item) => item.textContent
          );
          const jobId = el.getAttribute('id');
          const postedAt = el.querySelector('.time').textContent;

          postings[jobId] = { company, link, jobTitle, tags, postedAt };
        });

        return postings;
      }

      const sections = document.querySelectorAll('#jobsboard > tbody');
      let recentJobs, earlierJobs;

      if (sections.length >= 2) {
        const [recent, earlier] = sections;

        recentJobs = getJobDetails(recent);
        earlierJobs = getJobDetails(earlier);
      }

      return { recentJobs, earlierJobs };
    });

    await browser.close();
    return jobs;
  } catch (error) {
    console.log(error);
  }
}

scrapeROK('https://remoteok.io/remote-junior-jobs');

module.exports = scrapeROK;
