const pageScraper = require('./pageScraper');

async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        let page = await browser.newPage();
        await pageScraper.login(browser, page);
        await pageScraper.relayDiscordMessages(browser, page);
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)