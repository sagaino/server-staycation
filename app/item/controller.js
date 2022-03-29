module.exports = {
  index: async (req, res) => {
    try {
      res.render("admin/item/view_item", {
        title: "Staycation | Item",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
