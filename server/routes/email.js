// server/routes/email.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/send-email', async(req, res) => {
    const { name, email, message } = req.body;
    console.log(`[Email Request] Name: ${name}, Email: ${email}, Message: ${message}`);


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // from .env
            pass: process.env.EMAIL_PASS, // from .env
        },
    });

    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email, // ✅ So you can reply directly to user
        subject: `New message from ${name}`,
        html: `
    <h3>📩 New message from your portfolio</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br>${message}</p>
  `,
    };


    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to send email.' });
    }
});

module.exports = router;