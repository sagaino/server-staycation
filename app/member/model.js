const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "harus diisi"],
  },
  lastName: {
    type: String,
    require: [true, "harus diisi"],
  },
  email: {
    type: String,
    require: [true, "harus diisi"],
  },
  phoneNumber: {
    type: String,
    require: [true, "harus diisi"],
  },
});

module.exports = mongoose.model("Member", memberSchema);
