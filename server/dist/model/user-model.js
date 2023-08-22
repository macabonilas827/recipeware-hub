"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const { Schema } = mongoose_1.default;
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
const User = mongoose_1.default.model("User", userSchema);
//function to validate using Joi
function validate(user) {
    const schema = joi_1.default.object({
        name: joi_1.default.string()
            .pattern(/^[a-z\s\d]{5,12}$/i)
            .message("Name must be at least 5 characters long")
            .required(),
        password: joi_1.default.string()
            .pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/)
            .message("Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 8-50 characters long")
            .required(),
        email: joi_1.default.string()
            .pattern(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/)
            .message("Email mmust contain @ symbol")
            .required(),
    });
    //return function to the user route in order to validate the user inputted credentials pattern
    return schema.validate(user);
}
module.exports = { User, validate };
