const server = require('../../utilities/webapp-server');

const value = 'thisisthestring';
describe('Index', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3030');
    await page.evaluate(() => {
      localStorage.setItem('x', 'thisisthestring');
    });
    await page.goto('http://localhost:3030');
  });
  it('should show the index page', async () => {
    // await jestPuppeteer.debug();
    await expect(page).toMatch(value);
  });
});
