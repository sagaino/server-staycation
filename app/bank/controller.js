module.exports = {
  index: async (req, res) => {
    try {
      res.render("admin/bank/view_bank", {
        title: "Staycation | Bank",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
