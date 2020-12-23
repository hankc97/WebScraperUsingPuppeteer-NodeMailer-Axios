var axios = require('axios')

module.exports = {
    getSlackRequestHeader() {
        console.log('getting header...')
        return {'Content-Type' : 'application/json'}
    },
    relayMessageToSlack(lastMessage) {
        var payload = {"text": lastMessage}
        payload = JSON.stringify(payload)

        axios.post(
            'https://hooks.slack.com/services/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', payload)
                .then((response) => {
                    console.log(response.statusText + '... Successfully sent to Slack')
                })
    },
}
