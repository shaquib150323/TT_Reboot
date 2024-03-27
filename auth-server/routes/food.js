const express = require("express");
const protect = require ("../middleware/authMiddleware");
const { createFood, getAllFoods } = require("../controller/food");



router = express.Router();

router.post("/addfood",createFood);
router.post("/getAllFoods",getAllFoods);


module.exports = router;
