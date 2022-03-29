const express = require("express");
const {
  index,
  addCategory,
  editCategory,
  deleteCategory,
} = require("./controller");
const router = express.Router();

router.get("/", index);
router.post("/", addCategory);
router.put("/", editCategory);
router.delete("/delete/:id", deleteCategory);
module.exports = router;
