const express = require("express");

const app = express();

const {adminAuth , userAuth} = require("./middlewares/auth");

app.use("/admin",adminAuth);
app.use("/user",userAuth);

app.get("/admin/getAllData",(req,res)=>{
    res.send("All data received");
});

app.delete("/admin/deleteUser",(req,res)=>{
    res.send("Deleted a User");
});

app.get("/user/getData",(req,res)=>{
    res.send("User data");
});

app.delete("/user/deleteData",(req,res)=>{
    res.send("Data deleted");
})

app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});