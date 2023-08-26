import { User, validate } from "../model/User.js";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    //validate username, password and email to match regex pattern
    const { error } = validate({ username, password, email });
    if (error)
        return res.status(404).send(error?.message);
    //check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail)
        return res
            .status(409)
            .send({ message: `User ${existingEmail.email} already exists` });
    //check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername)
        return res
            .status(409)
            .send({ message: `User ${existingUsername.username} already exists` });
    //has the password
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        // Create a new user
        const user = await User.create({
            username,
            password: hashedPassword,
            email,
        });
        res.status(201).send({ user, message: "User registered successfully" });
    }
    catch (error) {
        res.status(500).send("An error occurred while registering the user.");
    }
};
//# sourceMappingURL=userController.js.map