const validator = require("validator");

const validateSignUpData = (req) => {
    const { firstName, lastName, emailId, password} = req.body;
    if(!firstName || !lastName){
        throw new Error("Name is invalid");
    } else if(!validator.isEmail(emailId)){
        throw new Error("Invalid Email Address");
    } else if(!validator.isStrongPassword(password)){
        throw new Error("Please Enter A Strong Password");
    }
};

module.exports = {validateSignUpData};