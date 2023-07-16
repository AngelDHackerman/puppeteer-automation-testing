const puppeteer = require('puppeteer');
const {click, type, getText} = require('../../libs/helpers')
const timeDelay = 17_000_000
const afterAllDelay = 4_000
let browser 
let page 

describe('Previous And Next Buttons', () => { 

  // Hook beforeAll
  beforeAll ( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null, // Set default viewport to null
      args: ['--start-maximized'] // Start browser maximized
    });

    // Adding the web page to test: 
    page = await browser.newPage()

    await page.goto('https://demoqa.com/', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterAll
  afterAll ( async () => { 
    // Wait for 3 seconds before closing the browser
    await new Promise(resolve => setTimeout(resolve, afterAllDelay));
    await browser.close()
  }, timeDelay); 

  // Executing the test cases: 
  it ('Adding data and changing row display', async () => { 


  }, timeDelay);
}, timeDelay)
