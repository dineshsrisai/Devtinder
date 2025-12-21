const express = require("express");

const app = express();

app.get("/getUserData",(req,res)=>{
    throw new Error("Abracadraba");
    res.send("User Data sent");
});

app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something Went wrong!!!!");
    }
});

app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});