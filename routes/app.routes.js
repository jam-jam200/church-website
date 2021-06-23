const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index.ejs", {
    title: "Home",
  });
});

router.get("/about", (req, res, next) => {
  res.render("about.ejs", {
    title: "About us",
  });
});

router.get("/ministries", (req, res, next) => {
  res.render("ministries.ejs", {
    title: "Ministries",
  });
});

router.get("/sermons", (req, res, next) => {
  res.render("sermons.ejs", {
    title: "Sermons",
  });
});

router.get("/daily_devotion", (req, res, next) => {
  res.render("daily_devotion.ejs", {
    title: "Daily Devotion",
  });
});

router.get("/events", (req, res, next) => {
  res.render("events.ejs", {
    title: "Events",
  });
});

router.get("/donation", (req, res, next) => {
  res.render("donate.ejs", {
    title: "Donation",
  });
});

router.get("/contact", (req, res, next) => {
  res.render("contact.ejs", {
    title: "Contact us",
  });
});

module.exports = router;