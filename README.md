# Scraper_Puppeteer_Axios_Nodemailer
Uses Node Library, Puppeteer, to control Chromium over the DevTools Protocol. DevTools are used to receive the 
desired URL and Selector to scrape the last message received on the Discord Webpage. The messaged is relayed 
to Slack and Email/SMS.
# Prerequisites
A) Node.js should be installed npm version 6.14.6

B) If you do not have package.json do:
1) npm init -Y
___Dependencies___
2) npm install --save puppeteer
3) npm install nodemailer
4) npm install axios

C) Inside package.json save your 'start' to:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
this allows you to npm start from index.js

# Start Program
npm start and yarn start should work
Remember to include nodemodule folder!

1) Both yarn start / npm start should work 
2) index.js starts the file by calling browser.js
3) browser.js gets the options for chrome header (it opens as headless)
4) index.js calls pageController 
5) pageController is our control flow that tells the compiler which methods to run from loading desired webpage
to scraping messages to be exported to SMS and Slack
6) pageController will call webScraper that stores our logic 
7) SMSRelayer/SlackRelayer/constants.js contains constants and reusable code 

