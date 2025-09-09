// create server

// import express

const express = require("express");


//app
const app = express();

// listen -> server run(Server creation)

// home route

app.get("/",(req,res) =>{
    return res.send("<h1> Hello World<h1/>");
});

app.listen(6969,() => {
    console.log("Server is running on port 6969");

});
