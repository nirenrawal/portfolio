const express = require('express');
const app = express();
const fs = require("fs");
require('dotenv').config();
const nodemailer = require('nodemailer');

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contactRouter = require("./routes/contact.js");
const projectsRouter = require("./routes/projects.js");

app.use(contactRouter.router);
app.use(projectsRouter.router);


const header = fs.readFileSync(__dirname + "/public/header/header.html", "utf-8");
const footer = fs.readFileSync(__dirname + "/public/footer/footer.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const contact = fs.readFileSync(__dirname + "/public/contact/contact.html", "utf-8");
const education = fs.readFileSync(__dirname + "/public/education/education.html", "utf-8");
const skills = fs.readFileSync(__dirname + "/public/skills/skills.html", "utf-8");
const projects = fs.readFileSync(__dirname + "/public/projects/projects.html");

app.get("/", (req, res) => {
    res.send(header + frontpage + footer);
});

app.get("/contact", (req, res) => {
    res.send(header + contact + footer);
});

app.post("/contact", (req, res) => {
  console.log(req.body);
    const output = `
        <ul>
            <li> Name: ${req.body.name}</li>
            <li> Email: ${req.body.email}</li>
            <li> Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.USER_NAME,
          pass: process.env.PASSWORD // naturally, replace both with your real credentials or an application-specific password
        }
      });
      
      const mailOptions = {
        from: 'neymarsinghrawal@gmail.com',
        to: 'nirenrawal@gmail.com',
        html: output,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        res.redirect('/');
      });
});

app.get("/education", (req, res) => {
    res.send(header + education + footer);
});

app.get("/skills", (req, res) => {
    res.send(header + skills + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projects + footer);
});




const server = app.listen(process.env.PORT || 3000, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("The server is running on ", server.address().port);
});