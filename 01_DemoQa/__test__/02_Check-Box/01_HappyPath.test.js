const puppeteer = require('puppeteer');
const {click, clickDelayed, getText} = require('../../libs/helpers')
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
  
  // Following the happy path test case: 
  it ('Opening all the toggle options', async () => { 
    
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
  }, timeDelay);


  it ('Clicking the select button on each select option', async () => {
    // Selecting the WorkSpace options
    // React
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > ol > li:nth-child(1) > span > label > span.rct-checkbox')
    // Angular
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > ol > li:nth-child(2) > span > label > span.rct-checkbox')
    // Veu
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(1) > ol > li:nth-child(3) > span > label > span.rct-checkbox')

    // Selecting the Office options
    // Public
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > ol > li:nth-child(1) > span > label > span.rct-checkbox')
    // Private
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > ol > li:nth-child(2) > span > label > span.rct-checkbox')
    // Classified
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > ol > li:nth-child(3) > span > label > span.rct-checkbox')
    // General
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(2) > ol > li:nth-child(2) > ol > li:nth-child(4) > span > label > span.rct-checkbox')

    // Selecting the Desktop options
    // Notes
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(1) > ol > li:nth-child(1) > span > label > span.rct-checkbox')
    // Commands
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(1) > ol > li:nth-child(2) > span > label > span.rct-checkbox')

    // Selecting the Downloads options
    // Word File.doc
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(3) > ol > li:nth-child(1) > span > label > span.rct-checkbox')
    // Excel File.doc
    await clickDelayed(page, '#tree-node > ol > li > ol > li:nth-child(3) > ol > li:nth-child(2) > span > label > span.rct-checkbox')
  }, timeDelay);


  it('Validation of the bottom message', async () => { 

  const expectedTexts = ['home', 'desktop', 'notes', 'commands', 'documents', 'workspace', 'react', 'angular', 'veu', 'office', 'public', 'private', 'classified', 'general', 'downloads', 'wordFile', 'excelFile'];

  for (let i = 0; i < expectedTexts.length; i++) {
    const selector = `#result > span:nth-child(${i + 2})`;  // +2 because the first span is 'You have selected'
    const text = await getText(page, selector);
    expect(text).toBe(expectedTexts[i]);
  }

  }, timeDelay);

  it('Unselecting all the files and directories and hidding them', async () => { 
    await clickDelayed(page, '#tree-node > ol > li > span > label > span.rct-checkbox')  // Unselecting all
    await clickDelayed(page, '#tree-node > ol > li > span > label > span.rct-checkbox')  // Selecting all the files
    await clickDelayed(page, '#tree-node > ol > li > span > label > span.rct-checkbox')  // Unselecting all again

    // Wainting time 
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Clicking the toggle, hiding all elements. 
    await click(page, '#tree-node > ol > li > span > button')

  }, timeDelay)
});


