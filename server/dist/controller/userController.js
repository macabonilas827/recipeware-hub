"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res) => {
    const { username, password, email } = req.body;
    res
        .status(200)
        .send(`thank you ${username} ${email} ${password} for registering }`);
};
exports.registerUser = registerUser;
