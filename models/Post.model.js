// import mongoose

const mongoose = require("mongoose");

//user schema

const postSchema = new mongoose.Schema({
    title :{
        type : String
    },
    descreption :{
        type : String
    },
    category :{
        type : String
    }
},
{ timestamps : true }

);

// model 

const Post = mongoose.model("Post", postSchema);

module.exports = Post;