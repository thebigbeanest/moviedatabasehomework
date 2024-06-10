const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MovieReviewSchema = new Schema(
  {
    movieId: { type: Schema.Types.ObjectId, ref: 'Movie', required: true }, // Reference to the movie
    score: { type: Number, required: true, min: 1, max: 10 }, // Score out of 10
    comment: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('MovieReview', MovieReviewSchema);