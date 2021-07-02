const { response } = require("express");
const validation = require("../utils/validation");
const nodemailer = require("nodemailer");
const { Contact } = require("../src/contact/contact.entity");
const { Devotion } = require("../src/admin/admin.entity");

exports.index = (req, res, next) => {
  res.render("index.ejs", {
    title: "Home",
  });
};

exports.about = (req, res, next) => {
  res.render("about.ejs", {
    title: "About us",
  });
};

exports.ministries = (req, res, next) => {
  res.render("ministries.ejs", {
    title: "Ministries",
  });
};

exports.sermons = (req, res, next) => {
  res.render("sermons.ejs", {
    title: "Sermons",
  });
};

exports.singleDevotion = async (req, res, next) => {
  console.log(req.params.id);
  const devotion = await Devotion.findById(req.params.id);
  res.render("singleDevotion.ejs", {
    title: "Daily Devotion",
    server_url: req.server_url,
    devotion,
  });
};

exports.devotion = async (req, res, next) => {
  const devotion = await Devotion.find();
  res.render("daily_devotion.ejs", {
    title: "Daily Devotion",
    devotion,
  });
};

exports.donation = (req, res, next) => {
  res.render("donate.ejs", {
    title: "Donation",
  });
};

exports.contact = (req, res, next) => {
  res.render("contact.ejs", {
    title: "Contact us",
  });
};

exports.events = (req, res, next) => {
  res.render("events.ejs", {
    title: "Events",
  });
};

exports.postContact = async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  const { error } = validation.contactValidation(req.body);
  error && next(error);
  const newContact = new Contact({
    name,
    email,
    subject,
    message,
  });

  newContact.save((err, contacts) => {
    err && next(err);
    res.render("contact.ejs", {
      title: "Contact us",
    });
  });

  // // create reusable transporter object using the default SMTP transport
  // let transporter = nodemailer.createTransport({
  //   host: "mail.google.com",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: "oyakhilomejessica@gmail.com", // generated ethereal user
  //     pass: "oyakhilomejessica2003", // generated ethereal password
  //   },
  // });

  // const msg = {
  //   from: `${email}`, // sender address
  //   to: "oyakhilomejessica@gmail.com", // list of receivers
  //   subject: `Message from ${email}:  ${subject}`, // Subject line
  //   text: `${message}`, // plain text body

  // };

  // // send mail with defined transport object
  // let info = await transporter.sendMail({ msg });
  // console.log("Message sent: %s", info.messageId);
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // res.send("email sent");

  // console.log(req.body);
  // res.send(req.body);
};
