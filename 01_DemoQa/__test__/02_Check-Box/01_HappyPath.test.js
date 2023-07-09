const puppeteer = require('puppeteer');
const {click, type, getText} = require('../../libs/helpers')
const timeDelay = 17_000_000
let browser 
let page 

describe('Testing the CheckBox', () => { 

  // Hook beforeAll
  beforeAll ( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null, // Set default viewport to null
      args: ['--start-maximized'] // Start browser maximized
    });

    // Adding the web page to test: 
    page = await browser.newPage()

    await page.goto('https://demoqa.com/checkbox', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterAll
  afterAll ( async () => { 
    // Wait for 3 seconds before closing the browser
    await new Promise(resolve => setTimeout(resolve, 4000));
    await browser.close()
  }, timeDelay); 

  // Executing the test cases: 

  // Following the happy path test case: 
  it ('Opening all the toggle options', async () => { 
    const awaitHalfSecond = () => page.waitForTimeout(750); // Wait for 0.5 second
    
    // clicking the toggle home 
    await click(page, '#tree-node > ol > li > span > button') 
    await awaitHalfSecond()

    // Clicking the toggle for:
    // Desktop
    await click(page, '#tree-node > ol > li > ol > li:nth-child(1) > span > button') 
    await awaitHalfSecond()
    // Documents
    await click(page, '#tree-node > ol > li > ol > li:nth-child(2) > span > button') 
    await awaitHalfSecond()
    // Downloads
    await click(page, '#tree-node > ol > li > ol > li:nth-child(3) > span > button') 
    await awaitHalfSecond()
    // WorkSpace
    await click(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > span > button') 
    await awaitHalfSecond()
    // Office
    await click(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > span > button') 
    await awaitHalfSecond()
  }, timeDelay);

  it ('Clicking the select button on each select option', async () => {
    
  })

}, timeDelay)
