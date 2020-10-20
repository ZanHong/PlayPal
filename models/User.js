const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    // required: true,
    unique: true
  },

  email: {
    type: String,
    trim: true,
    required: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
    unique: true
  },

  password: {
    type: String,
    trim: true,
    required: "Password is required!",
    validate: [({ length }) => length >= 6, "Password must have at least 6 characters."]
  },

  userCreated: {
    type: Date,
    default: Date.now()
  },

  planner: Array
})

UserSchema.methods.validPassword = function (userPassword) {
  return bcrypt.compareSync(userPassword, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;