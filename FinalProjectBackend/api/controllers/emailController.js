const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
module.exports.post = (req, res) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({       
        service: 'gmail',
        auth: {
            user: 'onkkr123@gmail.com',
            pass: '202199412'
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Admin" <onkkr123@gmail.com>', // sender address
        to: req.body.username, // list of receivers
        subject: 'Event Booking!', // Subject line
        text: 'Hi,\n'+
        'Congratulations...!!! This is your ticket for the event '+req.body.eventName+
        '.\nEvent details are : '+
        '\nDetails: '+req.body.eventDetails+
        '\nContact: '+req.body.eventContact+
        '\nVenue: '+req.body.eventVenue+
        '\nDate: '+req.body.eventDate+'' // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
};