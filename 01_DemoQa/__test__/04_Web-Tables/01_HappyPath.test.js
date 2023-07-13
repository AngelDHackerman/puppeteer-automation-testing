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
  it ('Removing first row, modifying the last one: ', async () => { 

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
    // submit new information
    await click(page, '#submit')

  }, timeDelay);

  it('Validation of the changes', async () => { 
    const nameSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(1)';
    const ageSelector = '#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.web-tables-wrapper > div.ReactTable.-striped.-highlight > div.rt-table > div.rt-tbody > div:nth-child(2) > div > div:nth-child(3)';
  
    const name = await getText(page, nameSelector);
    const age = await getText(page, ageSelector);
  
    expect(name).toBe('Katrina');
    expect(age).toBe('19');
  }, timeDelay);
  
}, timeDelay)

