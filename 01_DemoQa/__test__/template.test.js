const puppeteer = require('puppeteer');
const {click, type} = require('../libs/helpers')
const timeDelay = 17_000_000

describe('Helpers de utilidad', () => { 
  let browser 
  let page 

  // Hook beforeEach 
  beforeEach( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null, // Set default viewport to null
      args: ['--start-maximized'] // Start browser maximized
    });

    // Adding the web page to test: 
    page = await browser.newPage()

    await page.goto('https://demoqa.com/', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterEach 
  afterEach ( async () => { 
    // Wait for 3 seconds before closing the browser
    await new Promise(resolve => setTimeout(resolve, 4000));
    await browser.close()
  }, timeDelay); 

  // Executing the test cases: 
  it ('Check that inputs can be fill out', async () => { 


  }, timeDelay);

}, timeDelay)
