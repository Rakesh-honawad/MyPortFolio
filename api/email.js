import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            // 1️⃣ Send to you
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: 'rakeshhonawad46@gmail.com',
                subject: `New Message from ${name}`,
                text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
            });

            // 2️⃣ Auto-reply to user
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email,
                subject: `Thanks for contacting me!`,
                text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you soon.\n\nBest,\nRakesh`,
            });

            return res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Email error:', error);
            return res.status(500).json({ message: 'Email send failed', error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}