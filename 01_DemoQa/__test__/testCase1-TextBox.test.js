const puppeteer = require('puppeteer');
const timeDelay = 17_000_000

describe('Helpers de utilidad', () => { 
  let browser 
  let page 

  // Hook beforeEach 
  beforeEach( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
    });

  // Adding the web page to test: 
    page = await browser.newPage()
    await page.goto('https://demoqa.com/', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterEach 
  afterEach ( async () => { 
    await browser.close()
  }); 

  // Executing the test cases: 

  it ('Check that inputs can be fill out', async () => { 

    await page.waitForSelector('#submit')

    new Promise(resolve => setTimeout(resolve, timeDelay))
  });

}, timeDelay)