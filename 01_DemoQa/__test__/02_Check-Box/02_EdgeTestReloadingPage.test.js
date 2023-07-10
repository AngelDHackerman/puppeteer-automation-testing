const puppeteer = require('puppeteer');
const {click, clickDelayed} = require('../../libs/helpers')
const timeDelay = 17_000_000
let browser 
let page 

describe('Edge Test Case Reloading The Page', () => { 

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
  it ('Selecting the files and directories and reloading the page', async () => { 

    // Toogle for Home Directory
    await clickDelayed(page, '#tree-node > ol > li > span > button') 

    // Selecting the files for Desktop
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(1) > span > label > span.rct-checkbox')
    //  Documents 
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > span > label > span.rct-checkbox')
    // Downloads
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(3) > span > label > span.rct-checkbox')

    // Refreshing the page 
    await page.reload({ waitUntil: "networkidle2" });
  }, timeDelay);


  it('Validation that no files are selected after refreshing page', async () => { 
    const selector = `#result > span:nth-child(1)`;  // This is the 'You have selected' span
  
    // Check if the 'You have selected' span exists
    const spanExists = await page.evaluate((sel) => {
      return document.querySelector(sel) != null;
    }, selector);
  
    expect(spanExists).toBe(false);  // The span should not exist if no files are selected
  }, timeDelay);  
}, timeDelay); 
