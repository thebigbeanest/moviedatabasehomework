const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    genre: { type: String, required: true },
    summary: { type: String, required: true },
    poster: { type: String, required: true },
    actors: [{ type: Schema.Types.ObjectId, ref: 'Actor' }] // Reference to actors
  },
  { timestamps: true }
);

module.exports = mongoose.model('Movie', MovieSchema);