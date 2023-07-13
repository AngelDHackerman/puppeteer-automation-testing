const puppeteer = require('puppeteer');
const {click, type, getText, clickDelayed, clearInput} = require('../../libs/helpers')
const timeDelay = 17_000_000
const afterAllDelay = 4_000
let typeDelay = { delay: 100}
let browser 
let page 

describe('Web Tables Happy Path: adding, searching and removing information', () => { 

  // Hook beforeAll
  beforeAll ( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null, // Set default viewport to null
      args: ['--start-maximized'] // Start browser maximized
    });

    // Adding the web page to test: 
    page = await browser.newPage()

    await page.goto('https://demoqa.com/webtables', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterAll
  afterAll ( async () => { 
    // Wait for 3 seconds before closing the browser
    await new Promise(resolve => setTimeout(resolve, afterAllDelay));
    await browser.close()
  }, timeDelay); 

  // Executing the test cases: 
  it ('Happy path', async () => { 

    // Removing first row 
    await clickDelayed(page, '#delete-record-1')
    // Editing "last" row
    await clickDelayed(page, '#edit-record-3')
    // Changing name
    await clearInput(page, '#firstName')
    await type(page, '#firstName', 'Katrina', typeDelay)
    // Changing age
    await clearInput(page, '#age')
    await type(page, '#age', '19', typeDelay)



  }, timeDelay);
}, timeDelay)
