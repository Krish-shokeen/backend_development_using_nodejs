
const Post = require("../models/post.model");
const router = require("../routes/user.routes");

// logic to insert posts

const insertPost = async (req, res) => {
    try{
        const insertedPosts = await Post.insertMany([
            {
                title : "Docker",
                Descreption : "This is my 3 post",
                category : "education",
            },
            {
                title : "tarun's sad life",
                Descreption : "learning full stack development",
                category : "education",
            }
        ])        // takes an array 
        return res.json({
            message : "Posts inserted succesfully",
            posts : insertedPosts,
        });
    }catch(err){
        console.log(err);
    }
}
// sort posts by title in ascending order

const sortPosts = async (req, res) => {
    try{
        const sortedPosts = await Post.find().sort({title: 1}); // 1 for ascending order, -1 for descending order
        return res.json({
            message : "Posts sorted successfully",
            posts : sortedPosts,
        });
    }catch(err){
        console.log(err);
    }
}


module.exports = {insertPost, sortPosts};