const mongoose = require("mongoose");

const featureSchema = mongoose.Schema({
  name: {
    type: String,
    require: [true, "name harus diisi"],
  },
  qty: {
    type: Number,
    require: [true, "quantity harus diisi"],
  },
  imageUrl: {
    type: String,
    require: [true, "imageUrl harus ada"],
  },
});

module.exports = mongoose.model("Feature", featureSchema);
