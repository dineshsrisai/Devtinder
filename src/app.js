const express = require("express");

const app = express();

app.use("/user",[(req,res,next) => {
    console.log("Handling route 1");
    // res.send("Responce 1");
    next();
},(req,res,next)=>{
    console.log("Handling route 2");
    // res.send("Responce 2");
    next();
},[(req,res,next)=>{
    console.log("Handling route 3");
    // res.send("Responce 3");
    next();
},(req,res,next)=>{
    console.log("Handling route 4");
    // res.send("Responce 4");
    next();
}],(req,res,next)=>{
    console.log("Handling route 5");
    res.send("Responce 5");
}
]);

app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});