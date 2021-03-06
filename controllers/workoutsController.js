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
// Generic Get.
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workout) => {
      return res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Range - Getting last 7 workouts.
router.get("/api/workouts/range", (req, res) => {
  console.log(req.body);
  Workout.find({})
    .sort({ day: -1 })
    .limit(7)
    .then((sevenWorkout) => {
      return res.json(sevenWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Update
router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  Workout.findByIdAndUpdate(
    { _id: id },
    {
      $push: { exercises: req.body },
    },
    { new: true }
  )
    .then((populatedWorkout) => {
      res.json(populatedWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((newWorkout) => {
      return res.json(newWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
