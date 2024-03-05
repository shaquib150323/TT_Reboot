const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type:String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please provide email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: true,
    minlength: 8,
    select: false,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password don't match, Try again.",
    },
  },
  isVerified: {
    type: Boolean,
    default: false,
    select: false,
  },
  otp: {
    type: Number,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
profileImage:{
    type: String,
    required: true,
},
},
{
    timestamps:true,
}

);

module.exports= mongoose.model("User", UserSchema);
