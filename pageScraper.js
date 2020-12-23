var DiscordConstants = require('./constants')
var Exit = require('./clearInstances')
var Slack = require('./relayToSlack')
var SendEMAIL = require('./EmailToSMS')

const scraperObject = {
    async login(browser, page){
        console.log('Navigating to Discord Login Page...');

        await page.goto(DiscordConstants.XENITH_SWING_ALERTS_DISCORD, {waitUntil: 'networkidle2'});
        await page.waitForSelector(DiscordConstants.EXPECTED_DISCORD_EMAIL_SELECTOR);
        console.log('Submitting Discord Credentials...')

        await page.type(DiscordConstants.EXPECTED_DISCORD_EMAIL_SELECTOR, DiscordConstants.DISCORD_USERNAME);
        await page.type(DiscordConstants.EXPECTED_DISCORD_PASSWORD_SELECTOR, DiscordConstants.DISCORD_PASSWORD);
        await Promise.all([page.click(DiscordConstants.EXPECTED_DISCORD_SUBMITBUTTON_SELECTOR), page.waitForNavigation({ waitUntil: 'networkidle0' })]);
        page.url() === DiscordConstants.XENITH_SWING_ALERTS_DISCORD ? console.log('Successfully Logged into Discord...') : Exit.Failed_Login();
    },
    async relayDiscordMessages(browser, page){
        await page.waitForSelector(DiscordConstants.DISCORD_MESSAGES_SELECTOR)
        var previousLastMessage = await page.$$eval(DiscordConstants.DISCORD_MESSAGES_SELECTOR, allMessages => allMessages[allMessages.length - 1].innerText.trim())
        console.log(`Displaying First Message Of The Day: \n ${previousLastMessage}`)

        // Main Loop to Relay Discord to Slack/SMS
        var readLoop = async () => {
            var lastMessage = await page.$$eval(DiscordConstants.DISCORD_MESSAGES_SELECTOR, allMessages => allMessages[allMessages.length - 1].innerText.trim())
            if (lastMessage !== previousLastMessage) {
                console.log(`Relaying new discord message: \n ${lastMessage}`);
                previousLastMessage = lastMessage;
                Slack.relayMessageToSlack(lastMessage);
                SendEMAIL.sendEmailToSMS(lastMessage);
            }
            return readLoop();
        }
        await readLoop();
    },
}


module.exports = scraperObject;


// var lastMessage = await page.$$eval(DiscordConstants.DISCORD_MESSAGES_SELECTOR, allMessages => allMessages[allMessages.length - 1].innerText) ===
// var lastMessage = await page.evaluate(() => {
        //     var allMessages = document.querySelectorAll(".message-2qnXI6")
        //     return allMessages[allMessages.length - 1].innerText;
        // })