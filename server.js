// create server

// import express

const express = require("express");


//app
const app = express();

// listen -> server run(Server creation)

// home route

app.get("/hello",(req,res) =>{
    return res.send("<h1> Hello World<h1/>");
});

app.get("/about",(req,res) => {
    //logic

    return res.json({
        users :[
        {
            id:1,
            name:"tarun",
        
        
        },
        {
            id:2,
            name:"aryan",
        },
        {
            id:3,
            name:"krish",
        },
    ],
});
});

app.listen(6969,() => {
    console.log("Server is running on port 6969");

});
