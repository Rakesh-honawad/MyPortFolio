require('dotenv').config();

const nodemailer = require('nodemailer');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
    },
});

// Set up email data
const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to: 'recipient@example.com', // Test recipient
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from Node.js!', // Plain text body
};

// Send mail
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error); // Log error if sending fails
    }
    console.log('Email sent:', info.response); // Log success message
});