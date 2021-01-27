const puppeteer = require('puppeteer');

const url = 'https://hellnar.github.io/openings/Openings.html';
const scrapeHellner = async () => {
  try {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.goto(url);

    const jobs = await page.evaluate(() => {
      const jobEls = document.querySelectorAll('#myTable tr');
      const dateUpdated = document.querySelector('.date-update > p')
        .textContent;

      const jobsArr = Array.from(jobEls).map((itemEl, i) => {
        const item = {};
        const data = itemEl.querySelectorAll('td');
        const order = [
          'position',
          'company',
          'country',
          'remoteOrLocal',
          'fullTimeOrPartTime',
          'experience',
          'languages',
          'link',
        ];
        data.forEach((dataItem, index) => {
          if (index === 7) {
            item[order[index]] = dataItem.querySelector('a').href;
          } else {
            item[order[index]] = dataItem.textContent;
          }
        });

        return item;
      });

      return { jobsArr, dateUpdated };
    });

    await browser.close();
    return {
      source: {
        name: 'Hellner Github',
        link: url,
        lastUpdated: jobs.dateUpdated,
      },
      jobs: jobs.jobsArr,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = scrapeHellner;
