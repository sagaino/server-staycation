const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  imageUrl: {
    type: String,
    require: [true, "image tidak boleh kosong"],
  },
});

module.exports = mongoose.model("Image", imageSchema);
