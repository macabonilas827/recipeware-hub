import mongoose from "mongoose";
import Joi from "joi";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

//function to validate using Joi
export function validate(user: Object) {
  const schema = Joi.object({
    username: Joi.string()
      .pattern(/^[a-z\s\d_]{3,20}$/i)
      .message(
        "Username must contain only letters, digits or underscore and atleast 3 characters long"
      )
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

export default User;
