const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ActorSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    isAlive: { type: Boolean, required: true, default: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Actor', ActorSchema);