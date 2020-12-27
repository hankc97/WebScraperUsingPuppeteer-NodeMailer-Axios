const EmailConstants = require('./constants');
const nodemailer = require('nodemailer');

module.exports = {
    transporter: nodemailer.createTransport({
        service: 'gmail',
        auth : {
            user: EmailConstants.GMAIL_EMAIL_USERNAME,
            pass: EmailConstants.GMAIL_EMAIL_PASSWORD
        }
    }),
    sendEmailToSMS(message) {
        const mailOptions = {
            from: EmailConstants.GMAIL_EMAIL_USERNAME,
            to: EmailConstants.SMS_RECIPIENTS,
            subject: 'Xenith_Alert',
            text: message,
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

