const mongoose = require("mongoose");

const amenitiesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  slug: String,
  userId: {
    type: String,
    required: [true, "User ID is required"],
  },
  amenities: [],
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

amenitiesSchema.index({ slug: 1 });

const Amenities = mongoose.model("Amenities", amenitiesSchema);

module.exports = Amenities;