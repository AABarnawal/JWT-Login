const mongoose = require("mongoose");

const {isEmail} = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true, "please enter name"],
    },
    email:{
        type: String,
        require: [isEmail, "please enter Email"],
        unique: true,
        lowercase: true,
        validate: [isEmail, "please Enter a valid Email"],
    },
    password:{
        type: String,
        require: [true, "please enter password"],
        minLength: [6, "MInimum Lemngth is 6"],
    }
});

const User = mongoose.model("user", userSchema);

module.exports = User;