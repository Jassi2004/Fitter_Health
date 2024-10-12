const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    activity: { type: String, required: true }, // Running, Cycling
    duration: { type: Number, required: true }, // in minutes
    caloriesBurned: { type: Number }
});

const WorkoutData = mongoose.model('WorkoutData', WorkoutSchema);

module.exports = WorkoutData;