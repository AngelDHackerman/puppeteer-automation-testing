const puppeteer = require('puppeteer');
const {click, type, getText} = require('../libs/helpers')
const timeDelay = 17_000_000

describe('Test Case 1, Text Box', () => { 
  let browser 
  let page 

  // Hook beforeEach 
  beforeAll ( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null, // Set default viewport to null
      args: ['--start-maximized'] // Start browser maximized
    });

    // Adding the web page to test: 
    page = await browser.newPage()

    await page.goto('https://demoqa.com/text-box', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterAll 
  afterAll ( async () => { 
    // Wait for 3 seconds before closing the browser
    await new Promise(resolve => setTimeout(resolve, 3000));
    await browser.close()
  }, timeDelay); 


  // Executing the test cases: 
  it ('Check that inputs can be fill out', async () => { 

    let typeDelay = { delay: 100}

    await page.waitForSelector('#submit')
    await type(page, '#userName', 'Angel Hackerman', typeDelay)
    await type(page, '#userEmail', 'AngelHackerman@testing.com', typeDelay)
    await type(page, '#currentAddress', '9896 Rockland Street Spartanburg, SC 29301', typeDelay)
    await type(page, '#permanentAddress', '9896 Rockland Street Spartanburg, SC 29301', typeDelay)
    await click(page, '#submit')

  }, timeDelay);

  it ('Validating the output of the form', async () => { 

    const nameText = await getText(page, '#name');
    expect(nameText).toBe('Name:Angel Hackerman');
  })

}, timeDelay)