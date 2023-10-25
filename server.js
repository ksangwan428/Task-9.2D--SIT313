const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your production URL
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a Nodemailer transporter using your SMTP configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail', // E.g., 'Gmail', 'Outlook', 'Yahoo', etc.
  auth: {
    user: 'your-email@example.com',
    pass: 'your-email-password',
  },
});

// API endpoint for subscription
app.post('/', (req, res) => {
  const email = req.body.email; // Assuming the email is sent in the request body
  const mailData = {
    from: 'ksangwan428@gmail.com',
    to: email,
    subject: 'Welcome to Our Newsletter!',
    text:
      'Dear subscriber,\n\nThank you for signing up for our newsletter. We are excited to have you on board!\n\nBest regards,\nThe Newsletter Team',
  };

  // Send the email using the Nodemailer transporter
  transporter.sendMail(mailData, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    } else {
      console.log(info);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`The Server is running at port ${PORT}!`);
});