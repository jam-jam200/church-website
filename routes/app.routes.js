const express = require("express");
const argon = require("argon2");

const router = express.Router();

const appController = require("../controller/appController");
const Admin = require("../model/admin");

router.get("/", appController.index);

router.get("/about", appController.about);

router.get("/ministries", appController.ministries);

router.get("/sermons", appController.sermons);

router.get("/daily_devotion", appController.devotion);

router.get("/events", appController.events);

router.get("/donation", appController.donation);

router.get("/dashboard", appController.dashboard);

router.get("/contact", appController.contact);

router.post("/contact", appController.postContact);

router.post("/admin/new", async (req, res, next) => {
  try {
    console.log(req.body);
    let hashedPassword = await argon.hash(req.body.password);
    let admin = await Admin.create({
      name: req.body.name,
      password: hashedPassword,
      role: req.body.role,
      email: req.body.email,
    });
    res.send(admin);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
