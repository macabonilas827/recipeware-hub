import { RequestHandler } from "express";
import { User, validate } from "../model/User.js";

export const registerUser: RequestHandler = async (req, res) => {
  const { username, password, email } = req.body;

  const { error } = validate({ username, password, email });
  if (error) return res.status(404).send(error?.message);

  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res
      .status(409)
      .send({ message: `User ${existingUser.email} already exists` });

  try {
    // Create a new user
    const user = await User.create({ username, password, email });
    res.status(201).send({ user, message: "User registered successfully" });
  } catch (error) {
    res.status(500).send("An error occurred while registering the user.");
  }
};
