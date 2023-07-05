const puppeteer = require('puppeteer');
const {click, type, getText} = require('../libs/helpers')
const timeDelay = 17_000_000
let browser 
let page 


describe('Test Case 1, Text Box', () => { 

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

  // Executing the validation: 
  it ('Validating the output of the form', async () => { 

  // Wait for a short time before getting the text
  await page.waitForTimeout(1000);

    const nameText = await getText(page, '#name');
    expect(nameText).toBe('Name:Angel Hackerman');

    const emailText = await getText(page, '#email');
    expect(emailText).toBe('Email:AngelHackerman@testing.com');

    // todo: Add note about repetitive ID #currentAddress
    const currentAdrText = await page.$eval('p#currentAddress', el => el.innerText);
    expect(currentAdrText).toBe('Current Address :9896 Rockland Street Spartanburg, SC 29301');
    
    // todo: Add note about repetitive ID #permanentAddress
    const permanentAdrText = await page.$eval('p#permanentAddress', el => el.innerText);
    expect(permanentAdrText).toBe('Permananet Address :9896 Rockland Street Spartanburg, SC 29301');
    
  }, timeDelay)
}, timeDelay)


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
