// Making a router instead of importing the app.
const router = require("express").Router();
const Workout = require("../models/Workout.js");
const path = require("path");

// VIEW ROUTES
// =========================================
router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/index.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/stats.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../public/exercise.html"));
});

// API ROUTES
// =========================================

router.get("/api/workouts", (req, res) => {
  console.log(req.body);
});

router.get("/api/workouts/range", (req, res) => {
  console.log(req.body);
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
});

router.post("/api/workouts", (req, res) => {
  console.log(req.body);
});

module.exports = router;
