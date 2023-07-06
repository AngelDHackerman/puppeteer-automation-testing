const puppeteer = require('puppeteer');
const {click, type, getText} = require('../../libs/helpers')
const timeDelay = 17_000_000
let browser 
let page 

describe('Negative Test Case 1, Empty Fields', () => { 

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
  it ('Check that form does not submit with empty fields, #name, #email, p#currentAddress & p#permanentAddress should not exist', async () => { 

    // Clicking the submit button: 
    await click(page, '#submit')

    // Checking that nothing was submited: 
    const name = await page.$('#name');
    expect(name).toBeNull();
    const email = await page.$('#email');
    expect(email).toBeNull();
    const currentAdrText = await page.$('p#currentAddress');
    expect(currentAdrText).toBeNull();
    const permanentAdrText = await page.$('p#permanentAddress');
    expect(permanentAdrText).toBeNull();

  }, timeDelay);
}, timeDelay); 