const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types;

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "title harus diisi"],
  },
  price: {
    type: Number,
    default: 0,
  },
  country: {
    type: String,
    default: "Indonesia",
  },
  city: {
    type: String,
    require: [true, "city harus diisi"],
  },
  isPopular: {
    type: Boolean,
  },
  description: {
    type: String,
    require: [true, "deskripsi harus disi"],
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],
  featureId: [
    {
      type: ObjectId,
      ref: "Feature",
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
