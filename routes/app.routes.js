const express = require("express");

const router = express.Router();

const appController = require("../controller/appController");

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

// router.get("/virginaKingsley/admin/fruitfulife", appController.admin);

module.exports = router;
