import { RequestHandler } from "express";

export const registerUser: RequestHandler = (req, res) => {
  const { username, password, email } = req.body;

  res
    .status(200)
    .send(`thank you ${username} ${email} ${password} for registering }`);
};
