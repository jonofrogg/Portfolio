const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your@email.com",
      pass: "your-app-password"
    }
  });

  await transporter.sendMail({
    from: email,
    to: "jonathanpwells@outlook.com",
    subject: `Message from ${name}`,
    text: message
  });

  res.send("Email sent!");
});

app.listen(3000);