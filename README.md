# Scraper_Puppeteer_Axios_Nodemailer

1) Both yarn start / npm start should work 
2) index.js starts the file by calling browser.js
3) browser.js gets the options for chrome header (it opens as headless)
4) index.js calls pageController 
5) pageController is our control flow that tells the compiler which methods to run from loading desired webpage
to scraping messages to be exported to SMS and Slack
6) pageController will call pageScraper that stores our logic 
7) clearInstances/EmailtoSMS/relayToSlack/constants.js contains constants and reusable code 

