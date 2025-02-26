// Import the express module
const express = require("express");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const { mailAccounts, emailSettings } = require("./data");
const transporter = nodemailer.createTransport({
  service: "gmail",
  //   host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "abhishek4321u@gmail.com",
    pass: "xgfe kucp rokv wyfe",
    // pass: "Tiger@1985",
  },
});
const sendEmail = async (subject, htmlContent) => {
  try {
    const info = await transporter.sendMail({
      from: '"Abhishek Khari 👻" <your-email@gmail.com>',
      to: "pallaviprajapati71@gmail.com",
      bcc: "abhishek4321u@gmail.com",
      subject: subject,
      html: htmlContent,
    });
    console.log(`Email sent: ${info.messageId}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Email templates
const morningTemplate = `
    <div style="max-width: 600px; margin: auto; padding: 20px; text-align: center; font-family: Arial, sans-serif; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
      <h1 style="color: #ff8c00; font-size: 28px;">🌞 Good Morning! ☕</h1>
      <img src="https://drive.google.com/uc?export=view&id=1VYr1TbLVKXUg8yucBDbny9JV72C3MmG2" alt="Morning Image" style="width: 100%; border-radius: 10px; margin-top: 10px;">
      <p style="color: #555; font-size: 18px; line-height: 1.5; margin-top: 15px;">Good Morning Pallu🌹</p>
      <p style="font-size: 16px; color: #888; margin-top: 20px;">Have a great day ahead! 😊</p>
    </div>
  `;

const lunchTemplate = `
    <div style="max-width: 600px; margin: auto; padding: 20px; text-align: center; font-family: Arial, sans-serif; background-color: #fff3cd; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
      <h1 style="color: #d48806; font-size: 28px;">🍽️ Good Afternoon, Pallu! ☀️</h1>
      <img src="https://drive.google.com/uc?export=view&id=1omiKfZww-QehXxJvDHnopja1rf5E8wwt" alt="Lunch Image" style="width: 100%; border-radius: 10px; margin-top: 10px;">
      <p style="color: #555; font-size: 18px; line-height: 1.5; margin-top: 15px;">Hope you're having a wonderful day! Take a break and enjoy a delicious lunch. 🍛🥗</p>
    </div>
  `;

const nightTemplate = `
    <div style="max-width: 600px; margin: auto; padding: 20px; text-align: center; font-family: Arial, sans-serif; background-color: #001f3f; color: #fff; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
      <h1 style="color: #ffcc00; font-size: 28px;">🌙 Good Night, Pallu! 😴</h1>
      <img src="https://drive.google.com/uc?export=view&id=1fN5AFwZw7Ei6wzH0FcT_l5lCRo-8ODyY" alt="Night Image" style="width: 100%; border-radius: 10px; margin-top: 10px;">
      <p style="color: #fff; font-size: 18px; line-height: 1.5; margin-top: 15px;">May your dreams be sweet and peaceful. Sleep well! 💫</p>
    </div>
  `;

// Schedule a cron job to run every hour
cron.schedule("* * * * *", () => {
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 8 && hours < 13) {
    sendEmail("Good Morning!", morningTemplate);
  } else if (hours >= 13 && hours < 22) {
    sendEmail("Lunch Time!", lunchTemplate);
  } else if (hours >= 22) {
    sendEmail("Good Night!", nightTemplate);
  }
});

// cron.schedule("* * * * *", async () => {
//   const info = await transporter.sendMail({
//     from: '"Abhishek Khari 👻" ', // sender address
//     to: "sssgrouprk@gmail.com", // list of receivers
//     subject: "Morning", // Subject line
//     // plain text body
//     html: `  <div style="max-width: 600px; margin: auto; padding: 20px; text-align: center; font-family: Arial, sans-serif; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
//       <h1 style="color: #ff8c00; font-size: 28px;">🌞 Good Morning! ☕</h1>
//       <img src="https://drive.google.com/uc?export=view&id=1VYr1TbLVKXUg8yucBDbny9JV72C3MmG2"  alt="Morning Image" style="width: 100%; border-radius: 10px; margin-top: 10px;">
//       <p style="color: #555; font-size: 18px; line-height: 1.5; margin-top: 15px;">
//        Good Morning Pallu🌹
//       </p>
//       <p style="font-size: 16px; color: #888; margin-top: 20px;">Have a great day ahead! 😊</p>
//       <a href="https://www.google.com" style="display: inline-block; margin-top: 15px; padding: 10px 20px; font-size: 16px; color: #fff; background-color: #ff8c00; text-decoration: none; border-radius: 5px;">Start Your Day</a>
//     </div>`, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
// });

// Create an instance of the express application
const app = express();
// Specify a port number for the server
const port = 5000;
// Start the server and listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${process.env.MONGO_URI}`);
});
