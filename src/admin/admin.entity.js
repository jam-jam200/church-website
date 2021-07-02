const mongoose = require("mongoose");

const DevotionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  scripture: {
    type: String,
    required: true,
  },
  sermon: {
    type: String,
    required: true,
  },
  thoughtForTheDay: {
    type: String,
    required: true,
  },
  prayer: {
    type: String,
    required: true,
  },
  confession: {
    type: String,
    required: true,
  },
  prophet_blessing: {
    type: String,
    required: true,
  },
  dailyBibleReading: {
    type: String,
    required: true,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },
});

const Devotion = mongoose.model("Devotion", DevotionSchema);

module.exports = { DevotionSchema, Devotion };
