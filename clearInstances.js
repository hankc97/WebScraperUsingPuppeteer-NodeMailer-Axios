module.exports = {
    async Failed_Login() {
        console.log("Failed to login to Discord, Exiting ...");
        console.log("Browser last on url: " + page.url());
        page.close();
        browser.close();
    },
}