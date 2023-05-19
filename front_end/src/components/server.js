import { getReqUrlAddress } from './GetUrl/GetUrl.js';

const axios = require("axios");

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8001, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "jhjo9719@gmail.com",
    pass: "wogud0620!"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "jhjo1997@naver.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

// router.post('/contact', async (req, res) => {
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;

//   const postData = {
//     name: name,
//     email: email,
//     message: message,
//     phone: phone,
//   };

//   try {
//     const response = await axios.post('http://192.168.0.9:8001/api/contact/', postData);
//     res.json({ code: 200, status: 'Message Sent' });
//   } catch (error) {
//     res.json(error);
//   }
// });
