const puppeteer = require('puppeteer-extra');

  

(async () => {
    const browser = await puppeteer.launch({headless: false, defaultViewport: null, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args:['--start-maximized' ]});
    const page = await browser.newPage();
    await page.goto('https://academia.srmist.edu.in/#Page:Course_Feedback');
    await page.focus('#Email');
    await page.keyboard.type('gauravganju@gmail.com');

    await page.type('#Password', 'Logistics$#1');
    await page.waitForTimeout('25000');
    await browser.close();

})();
