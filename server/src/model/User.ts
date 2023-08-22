import mongoose from "mongoose";
import Joi from "joi";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  isAdmin: Boolean,
  isDemoUser: Boolean,
});

const User = mongoose.model("User", userSchema);

//function to validate using Joi
function validate(user) {
  const schema = Joi.object({
    name: Joi.string()
      .pattern(/^[a-z\s\d]{5,12}$/i)
      .message("Name must be at least 5 characters long")
      .required(),
    password: Joi.string()
      .pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/)
      .message(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 8-50 characters long"
      )
      .required(),
    email: Joi.string()
      .pattern(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)
      .message("Email mmust contain @ symbol")
      .required(),
  });

  //return function to the user route in order to validate the user inputted credentials pattern
  return schema.validate(user);
}

module.exports = { User, validate };
