const puppeteer = require('puppeteer');
const {click, type, getText} = require('../../libs/helpers')
const timeDelay = 17_000_000
let browser 
let page 

describe('Negative Test Case 2: Incorrect Email Format', () => { 

  // Hook beforeAll 
  beforeAll( async () => { 
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
    await new Promise(resolve => setTimeout(resolve, 4000));
    await browser.close()
  }, timeDelay); 

  // Executing the test cases: 
  it ('Check that inputs can be fill out', async () => { 

    let typeDelay = { delay: 100}

    await page.waitForSelector('#submit')

    await type(page, '#userName', 'Angel Hackerman', typeDelay)
    await type(page, '#userEmail', 'AngelHackerman.net', typeDelay)  // Testing the input format for the Emails 
    await type(page, '#currentAddress', '9896 Rockland Street Spartanburg, SC 29301', typeDelay)
    await type(page, '#permanentAddress', '9896 Rockland Street Spartanburg, SC 29301', typeDelay)
    await click(page, '#submit')
  }, timeDelay);

  // Executing the validation: 
  it ('Validating the border color of the email input', async () => { 

    // Wait for a short time before getting the style
    await page.waitForTimeout(1000);

    // Get the border color of the email input
    const borderColor = await page.evaluate(() => {
      const element = document.querySelector('#userEmail');
      const style = window.getComputedStyle(element);
      return style.border;
    });

    // Check that the border color is '1px solid red'
    expect(borderColor).toBe('1px solid rgb(255, 0, 0)');
  }, timeDelay);

}, timeDelay)