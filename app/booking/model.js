const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  bookStartDate: {
    type: Date,
    require: [true, "title harus diisi"],
  },
  bookingEndDate: {
    type: Date,
    require: [true, "title harus diisi"],
  },
  itemId: [
    {
      _id: {
        type: ObjectId,
        ref: "Item",
      },
      price: {
        type: Number,
        require: true,
      },
      night: {
        type: Number,
        require: true,
      },
    },
  ],
  memberId: [
    {
      type: ObjectId,
      ref: "Member",
    },
  ],
  bankId: [
    {
      type: ObjectId,
      ref: "Bank",
    },
  ],
  proofPayment: {
    type: String,
    require: true,
  },
  bankForm: {
    type: String,
    require: true,
  },
  accountHolder: {
    type: String,
    require: true,
  },
  //   imageUrl: {
  //     type: String,
  //     require: true,
  //   },
  status: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
