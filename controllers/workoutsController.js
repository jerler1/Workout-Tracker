// Making a router instead of importing the app.
const router = require("express").Router();
const Workout = require("../models/Workout.js");

// ROUTES

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
