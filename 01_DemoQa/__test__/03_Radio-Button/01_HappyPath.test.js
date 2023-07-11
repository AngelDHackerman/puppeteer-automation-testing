const puppeteer = require('puppeteer');
const {click, getText, clickDelayed} = require('../../libs/helpers')
const timeDelay = 17_000_000
const afterAllDelay = 1_000
let browser 
let page 

describe('Radio button selection and validation', () => { 

  // Hook beforeAll
  beforeAll ( async () => { 
    browser = await puppeteer.launch({ 
      headless: false,
      defaultViewport: null, // Set default viewport to null
      args: ['--start-maximized'] // Start browser maximized
    });

    // Adding the web page to test: 
    page = await browser.newPage()

    await page.goto('https://demoqa.com/radio-button', { waituntil: 'networkidel0' })
  }, timeDelay)

  // Hook afterAll
  afterAll ( async () => { 
    // Wait for 3 seconds before closing the browser
    await new Promise(resolve => setTimeout(resolve, afterAllDelay));
    await browser.close()
  }, timeDelay); 

  // Executing the test cases: 
  it ('Clicking and verifying the yes button', async () => { 

    await click(page, '#yesRadio')

    // Assertion of shown text
    const yesText = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > p > span');
    expect(yesText).toBe('Yes');

    await new Promise(resolve => setTimeout(resolve, afterAllDelay));
  }, timeDelay);


  it ('Clicking and verifying the Impresive button', async () => { 

    await click(page, '#impressiveRadio')

    // Assertion of shown text
    const yesText = await getText(page, '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div:nth-child(2) > p > span');
    expect(yesText).toBe('Impressive');

  }, timeDelay);

  it ('Validating that NO button is disabled', async () => { 
    const isDisabled = await page.$eval('#noRadio', input => input.hasAttribute('disabled'));
    expect(isDisabled).toBe(true);
  }, timeDelay)
  
}, timeDelay)
