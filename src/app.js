const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("Tested!");
});

app.use("/hello",(req,res)=>{
    res.send("Hello!");
});

app.use("/",(req,res)=>{
    res.send("Home page");
});

app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});