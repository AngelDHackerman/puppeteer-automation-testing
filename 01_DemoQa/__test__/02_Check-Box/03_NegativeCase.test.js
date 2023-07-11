const puppeteer = require('puppeteer');
const {click, type, getText, clickDelayed} = require('../../libs/helpers')
const timeDelay = 17_000_000
let browser 
let page 

describe('Negative Case, missing select buttons', () => { 

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
  it ('Selecting all the missing options', async () => { 

    // clicking the toggle home 
    await clickDelayed(page, '#tree-node > ol > li > span > button') 
    // Clicking the toggle for:
    // Desktop
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(1) > span > button') 
    // Documents
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > span > button') 
    // Downloads
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(3) > span > button') 
    // WorkSpace
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > span > button') 
    // Office
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > span > button') 

    // Selecting half of the options: 
    // Commands
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(1) > ol > li:nth-child(2) > span > label > span.rct-checkbox')
    // Angular
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > ol > li:nth-child(2) > span > label > span.rct-checkbox')
    // Classified
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > ol > li:nth-child(3) > span > label > span.rct-checkbox')
    // Excel File.doc
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(3) > ol > li:nth-child(2) > span > label > span.rct-checkbox')
  }, timeDelay);

  it ('Selecting all the missing options', async () => { 

    // Click on the Home select button
    await clickDelayed(page, '#tree-node > ol > li > span > label > span.rct-checkbox')

    // Validating that all options were selected: 
    const expectedTexts = ['home', 'desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private', 'classified', 'general', 'downloads', 'wordFile', 'excelFile'];

    for (let i = 0; i < expectedTexts.length; i++) {
      const selector = `#result > span:nth-child(${i + 2})`;  // +2 because the first span is 'You have selected'
      const text = await getText(page, selector);
      expect(text).toBe(expectedTexts[i]);
    };
  }, timeDelay);

  it ('Unselecting all the options', async () => { 

    // Click on the Home select button
    await clickDelayed(page, '#tree-node > ol > li > span > label > span.rct-checkbox')

    // Validating that no files or directories were selected: 
    const selector = `#result > span:nth-child(1)`;  // This is the 'You have selected' span
  
    // Check if the 'You have selected' span exists
    const spanExists = await page.evaluate((sel) => {
      return document.querySelector(sel) != null;
    }, selector);
  
    expect(spanExists).toBe(false);  // The span should not exist if no files are selected
  }, timeDelay)

}, timeDelay)
