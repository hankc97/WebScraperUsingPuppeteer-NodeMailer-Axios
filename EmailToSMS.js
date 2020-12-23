var EmailConstants = require('./constants');
var nodemailer = require('nodemailer');

module.exports = {
    transporter: nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: EmailConstants.GMAIL_EMAIL_USERNAME,
            pass: EmailConstants.GMAIL_EMAIL_PASSWORD
        }
    }),
    sendEmailToSMS(lastMessage) {
        var mailOptions = {
            from: EmailConstants.GMAIL_EMAIL_USERNAME,
            to: EmailConstants.SMS_Gateway,
            subject: 'Xenith_Alert',
            text: lastMessage,
        }
        this.transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    },
}

