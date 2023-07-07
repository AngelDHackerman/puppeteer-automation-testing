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
  it ('Following the happy path selecting and unselecting the checkbox', async () => { 

    // await page.waitForSelector('#tree-node-home')

    await click(page, '#tree-node > ol > li > span > label > span.rct-checkbox') // this is the span tag. 
    await page.waitForTimeout(1000); // Wait for 1 second
    await click(page, '#tree-node > ol > li > span > button') // this is a button tag


  }, timeDelay);

  // it ('Edge test case, Refreshing the web page while some checkbox are selected', async () => { 


  // }, timeDelay);
}, timeDelay)
