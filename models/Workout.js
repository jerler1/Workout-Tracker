// Creating a workout model.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        duration: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

// Virtual for total duration.
// WorkoutSchema.virtual("totalDuration").get(function(){
//   let total = 0;
//   for (let i = 0; i < this.exercises.length; i++) {
//     total += this.exercies[i].duration;
//     console.log(total);
//   }
//   return total;
// });

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
