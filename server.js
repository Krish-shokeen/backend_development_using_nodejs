// create server

// import express

const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");
dotenv.config();
//import mongoose

const mongoose = require("mongoose");

// import user router

const userRouter = require ("./routes/user.routes")
const postRouter = require ("./routes/post.routes") 
//app
const app = express();

app.use(cors());
app.use(express.json());

// database connection

mongoose
.connect(process.env.MANGO_URL)
.then(() => {
    console.log("database connected")

}).catch((err) => console.log(err) );
// listen -> server run(Server creation)

// home route

app.use("/api",userRouter); // http://localhost:6969/api/store-user

app.use("/api/post",postRouter);

// app.get("/hello",(req,res) =>{
//     return res.send("<h1> Hello World<h1/>");
// });


app.get("/users",(req,res) => {
    //logic

    return res.json({
        users :[
        {
            id:1,
            name:"tarun ",
        
        
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


// username : krishshokeen55_db_user
// password :  zg899wGBQeVuKrRr