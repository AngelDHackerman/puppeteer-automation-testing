module.exports = { 

  // Creating the "click" helper
  click: async function ( page, selector) { 
    try{ 

      // It's good practice to wait for the selector we're going to interact with. 
      await page.waitForSelector(selector)
      await page.click(selector)

    } catch (err){ 
      throw new Error(`Error clicking on the selector: ${selector}`)
    }
  },

  // Creating doubleClick helper
  doubleClick: async function ( page, selector) { 
    try { 
      await page.waitForSelector(selector);
      await page.click(selector, {clickCount: 2})  // double clicking

    } catch (err) { 
      throw new Error(`Error double clicking on the selector: ${selector}`)
    }
  },

  // Getting the text of the element 
  getText: async function ( page, selector) { 
    try { 
      await page.waitForSelector(selector)
      return await page.$eval(selector, (element) => element.textContent)

    } catch (err) { 
      throw new Error(`Error getting the text from the selector: ${selector}`)
    }
  },

  // Type: writing in a web page input
  type: async function ( page, selector, text, opts = {} ) { 
    try { 
      await page.waitForSelector(selector)
      await page.type(selector, text, opts)

    } catch (err) { 
      throw new Error (`Error typing in the selector: ${selector}`)
    }
  },

  // getCount, counting the number of certain elements on a page 
  getCount: async function (page, selector, opts = {}) { 
    try { 
      await page.waitForSelector(selector)
      // $$eval, is a getQueryAll will take all elements with the "selector" and then return the "length" of all matching elements
      return await page.$$eval(selector, (elements) => elements.length)
    } catch (err) { 
      throw new Error(`Error counting elements with the selector: ${selector}`)
    }
  }
}
