const axios = require('axios')

module.exports = {
    relayMessageToSlack(message) {
        const payload = JSON.stringify({"text": message})
        axios.post(
            'Link to hook.slack.url', payload)
                .then((response) => {
                    console.log(response.statusText + '... Successfully sent to Slack')
                })
    },
}
