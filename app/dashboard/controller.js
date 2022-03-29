module.exports = {
  index: async (req, res) => {
    try {
      res.render("admin/dashboard/view_dashboard", {
        title: "Staycation | Dashboard",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
