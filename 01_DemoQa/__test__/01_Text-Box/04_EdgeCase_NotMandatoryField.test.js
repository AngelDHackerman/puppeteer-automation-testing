const puppeteer = require('puppeteer');
const {click, type, getText} = require('../../libs/helpers')
const timeDelay = 17_000_000
let browser 
let page 

describe('Edge test case: Not mandatory fields', () => { 

  // Hook beforeAll
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

  // Executing the negative test case: 
  it ('Fullname and current address must be fulled; email and permanent address should be empty', async () => { 

    let typeDelay = { delay: 100}
    await page.waitForSelector('#submit')

    // Adding the data and sending it. 
    await type(page, '#userName', 'Angel Hackerman', typeDelay)
    await type(page, '#currentAddress', '9896 Rockland Street Spartanburg, SC 29301', typeDelay)
    await click(page, '#submit')

    // Validating that data was send and shown in the footer of the form
    await page.waitForTimeout(1000);
    const nameText = await getText(page, '#name');
    expect(nameText).toBe('Name:Angel Hackerman');
    const currentAdrText = await page.$eval('p#currentAddress', el => el.innerText);
    expect(currentAdrText).toBe('Current Address :9896 Rockland Street Spartanburg, SC 29301');

    // Checking that email and permanent address are empty: 
    const email = await page.$('#email');
    expect(email).toBeNull();
    const permanentAdrText = await page.$('p#permanentAddress');
    expect(permanentAdrText).toBeNull();

  }, timeDelay);
}, timeDelay); 