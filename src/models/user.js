const mongoose = require("mongoose");

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
    },
    password : {
        type : String
    },
    age : {
        type : String,
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
        default : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
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

module.exports = mongoose.model("User",userSchema);