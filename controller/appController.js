const validation = require("../utils/validation");

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

exports.devotion = (req, res, next) => {
  res.render("daily_devotion.ejs", {
    title: "Daily Devotion",
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

exports.postContact = (req, res, next) => {
  const { error } = validation.contactValidation(req.body);
  if (error) {
    next(error);
  }
  console.log(req.body);
};
