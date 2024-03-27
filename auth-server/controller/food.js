const Food = require("../model/Food");

const createFood = async (req, res) => {
  try {
    // console.log(req.body);
    // const { name, price, description, category, weight, foodImage } = req.body;
    console.log(req.body);
    const newFood = new Food(req.body);
    const saveFood = newFood.save();
    res.status(200).json({
      message: "Food item added successfully!",
      success: true,
      data: {
        food: saveFood,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

const getAllFoods = async (req, res) => {
  try {
    const foodItems = await Food.find();

    res.status(200).json({
      message: "Food item added successfully!",
      success: true,
      data: {
        food: foodItems,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

module.exports = { createFood, getAllFoods };
