const webScraper = require('./webScraper');

async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
        const page = await browser.newPage();
        await webScraper.login(browser, page);
        await webScraper.relayDiscordMessages(browser, page);
    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)