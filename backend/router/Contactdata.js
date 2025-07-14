const express = require("express")
const nodemailer = require("nodemailer")
const Contact = require("../Models/ContactSchema.js")

const Connect = require("../db/Connect.js");

const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    await Connect();
    const { name, email, phone, message } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: process.env.EMAILPORT,
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    async function main() {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_ADDRESS,
        to: process.env.EMAIL_SEND,
        subject: "Samad Portfolio",
        html:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f4f4f4">
    <tr>
      <td align="center" style="padding: 20px;">
        <table role="presentation" width="600px" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" style="border-radius: 10px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1); padding: 20px;">
          <tr>
            <td align="center" style="padding: 20px; border-bottom: 2px solid #eeeeee;">
              <h2 style="color: #333333;">📩 New Contact Message</h2>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px; font-size: 16px; color: #555555;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF; text-decoration: none;">${email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #007BFF; text-decoration: none;">${phone}</a></p>
              <p><strong>Message:</strong></p>
              <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333;">${message}</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 20px; font-size: 14px; color: #999999; border-top: 2px solid #eeeeee;">
              <p>⚡ This message was sent from your website contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

</body>
</html>
`
      });

      console.log("Message sent: %s", info.messageId);
    }
    main().catch(console.error);

    const sender = nodemailer.createTransport({
        service:'gmail',
        port: process.env.EMAILPORT,
        secure: true, // true for port 465, false for other ports
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function Send() {
        // send mail with defined transport object
        const info = await sender.sendMail({
          from: process.env.EMAIL_ADDRESS, // sender address
          to: email,
          subject: "🌟 Thank You for Reaching Out!",
          html:`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting Us</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #007BFF, #00C6FF);
      color: white;
      text-align: center;
      padding: 20px;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
      text-align: center;
      color: #333;
      font-size: 16px;
    }
    .highlight {
      color: #007BFF;
      font-weight: bold;
    }
    .cta {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 24px;
      background: #007BFF;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
      transition: 0.3s ease-in-out;
    }
    .cta:hover {
      background: #0056b3;
    }
    .footer {
      margin-top: 20px;
      background: #f4f4f4;
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #666;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animated {
      animation: fadeIn 1.2s ease-in-out;
    }
  </style>
</head>
<body>

  <div class="container animated">
    <div class="header">
      🚀 Thank You for Contacting Us!
    </div>
    <div class="content">
      <p>We truly appreciate you reaching out. Our team is always <span class="highlight">ready to assist you</span> with your projects, and we’re committed to providing the <span class="highlight">best support possible.</span></p>
      
      <p>💡 <strong>Stay tuned!</strong> You’ll receive a response within the next hour.</p>
      
      <p>In the meantime, feel free to <span class="highlight">explore our services</span> or reach out if you have any urgent queries.</p>
      
      <a href="https://yourwebsite.com" class="cta">Visit Our Website</a>

      <p style="margin-top: 20px;">✨ <strong>Your success is our priority!</strong></p>
      
      <p style="margin-top: 20px; font-weight: bold;">Best regards,<br> Abdul Samad Nizamani</p>
    </div>
    <div class="footer">
      &copy; 2025 Your Company Name | All Rights Reserved
    </div>
  </div>

</body>
</html>
` });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      Send().catch(console.error);

    await Contact.create({ name, email, phone, message });
    return res.status(200).json({message:'Message send Successfully'})
  } catch (error) {
    console.log(error);
  }
});

module.exports = router
