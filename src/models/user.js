const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 50
    },
    lastName : {
        type : String
    },
    emailId : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address" + value);
            }
        }
    },
    password : {
        type : String,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter a strong password" + value);
            }
        }
    },
    age : {
        type : Number,
        min : 5,
        max : 100
    },
    gender : {
        type : String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender data is not valid!!!");
            }
        }
    },
    photoUrl : {
        type : String,
        default : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid Photo Url" + value);
            }
        }
    },
    about:{
        type : String,
        default : "Hey there!!!"
    },
    skills:{
        type : [String],
    }
},
{
    timestamps:true
});

userSchema.methods.getJWT = async function () {
    const user = this;

    const token = await jwt.sign({_id:user._id},"DEV@Tinder$790",{    
        expiresIn : "7d",
    });

    return token;
}

userSchema.methods.validatePassword = async function(passwordInputByUser){
    const user = this;
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(passwordInputByUser,passwordHash);

    return isPasswordValid;
}   

module.exports = mongoose.model("User",userSchema);