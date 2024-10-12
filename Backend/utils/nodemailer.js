const nodemailer = require('nodemailer');
require('dotenv').config();

// Function to send emails
const mailSender = async (email, title, body) => {
    try {
        // Create a transporter using SMTP
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            service: "gmail",
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        // Send email
        let info = await transporter.sendMail({
            to: email,
            subject: title,
            html: body,
        });
        console.log('Email info: ', info);
    } catch (error) {
        console.log('Error while sending mail: ', error);
    }
};

// Function to send OTP verification email
const sendVerificationMail = async (email, otp) => {
    const title = 'Verify Your Email';
    const body = `Your OTP for email verification is: <strong>${otp}</strong>`;
    await mailSender(email, title, body);
};

// Function to send login notification email
const sendLoginNotification = async (email, otp) => {
    const title = 'New Login to Your Account';
    const body = `A new login to your account has been detected. Your OTP for this login attempt is: <strong>${otp}</strong>. If this wasn't you, please secure your account immediately.`;
    await mailSender(email, title, body);
};

// Exporting functions
module.exports = { mailSender, sendVerificationMail, sendLoginNotification };
