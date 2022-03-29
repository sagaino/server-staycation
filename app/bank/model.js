const mongoose = require("mongoose");

const bankSchema = mongoose.Schema({
  nameBank: {
    type: String,
    require: [true, "harus diisi"],
  },
  nomorRekening: {
    type: String,
    require: [true, "harus diisi"],
  },
  name: {
    type: String,
    require: [true, "harus diisi"],
  },
});

module.exports = mongoose.model("Bank", bankSchema);
