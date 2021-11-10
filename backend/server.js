const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./lib/passportConfig");
const cors = require("cors");
const fs = require("fs");
const nodemailer = require('nodemailer');

// MongoDB
mongoose
  .connect("mongodb+srv://abc:Abcdefg@cluster0.9ouox.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

// initialising directories
if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public");
}
if (!fs.existsSync("./public/resume")) {
  fs.mkdirSync("./public/resume");
}
if (!fs.existsSync("./public/profile")) {
  fs.mkdirSync("./public/profile");
}

const app = express();
const port = 4444;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Setting up middlewares
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Routing
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/host", require("./routes/downloadRoutes"));


//Contact
app.post('/contact', (req, res) => {
  const data = req.body;
  // console.log(")
  console.log("data from backend", data);

  var transporter = nodemailer.createTransport({
    sendmail: true,
    service: 'gmail',
    auth: {
      user: 'wkarya2021@gmail.com',
      pass: 'Newwkarya@2021'
    }
  });
  var mailOptions = {
    from: 'wkarya2021@gmail.com',
    to: 'raj1999gupta@gmail.com',
    subject: 'Query email from the users',
    text: "Cjecking mails from node.js!"
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(401).json({
        message: "Email failed!"
      });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: "Email sent successfully",
        response: info.response
      })
    }
  });
});



app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
