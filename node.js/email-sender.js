var nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD,
  },
});

var mailOptions = {
  from: `Claire Art <${process.env.GMAIL_USERNAME}>`,
  to: process.env.GMAIL_GUEST,
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
