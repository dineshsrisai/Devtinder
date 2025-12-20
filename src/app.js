const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("Tested!");
});

app.get("/user",(req,res)=>{
    res.send({firstName : "dinesh", lastName : "srisai"});
});

app.post("/user",(req,res)=>{
    res.send("Successfully saved to DB!");
});

app.delete("/user",(req,res)=>{
    res.send("Successfully deleted from DB!");
});

app.patch("/user",(req,res)=>{
    res.send("Successfully patched to DB!");
});

app.put("/user",(req,res)=>{
    res.send("Successfully put to DB!");
});

app.head("/user",(req,res)=>{
    console.log("HEAD request received!"); // Check your terminal!
    res.send("Successfully headed to DB!");
});

app.options("/user",(req,res)=>{
    res.send("Successfully options to DB!");
});

app.get("/user/:userId/:name",(req,res)=>{
    console.log(req.params);
    res.send({firstName : "DineshSriSai",lastName : "Rudrakshala"});
});

app.listen(7777,()=>{
    console.log("Server is successfully listening on port 7777");
});