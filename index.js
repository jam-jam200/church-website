const express = require("express");
const path = require("path");
const churchRoute = require("./routes/app.routes");
const nodemailer = require("nodemailer");

const app = express();

const port = 8000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", churchRoute);
app.use("/", express.static(path.join(__dirname, "/public")));

app.get("/contact", (req, res, next) => {
  res.sendFile(__dirname + "./views/contact.ejs");
});

app.post("/contact", (req, res, next) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jessieoyaks4j@gmail.com",
      pass: "2852003.",
    },
  });

  const mailOptions = {
    from: req.body.email,
    to: "jessieoyaks4j@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {});
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//error message handler
app.all("*", (req, res, next) => {
  res.send("<h1>404 page not found 😢😢</h1>");
});

//server
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
