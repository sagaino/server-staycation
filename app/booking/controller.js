module.exports = {
  index: async (req, res) => {
    try {
      res.render("admin/booking/view_booking", {
        title: "Staycation | Booking",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
