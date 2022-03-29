const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "name harus diisi"],
  },
  type: {
    type: String,
    require: [true, "harus diisi"],
  },
  imageUrl: {
    type: String,
    require: [true, "imageUrl harus ada"],
  },
  isPopular: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
