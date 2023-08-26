import bcrypt from "bcrypt";
import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    //check if username exists
    const user = await User.findOne({ username });
    if (!user)
        return res.status(404).send({ message: "User not found" });
    //compare if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
        return res.status(401).send({ message: "Invalid password" });
    const accessToken = jwt.sign({
        UserInfo: {
            username: user.username,
            roles: user.isAdmin,
        },
    }, process.env.ACCESS_TOKEN_SECRET);
    res.json({ message: "You are login", accessToken });
};
//# sourceMappingURL=authController.js.map