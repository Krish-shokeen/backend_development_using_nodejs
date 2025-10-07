
const Post = require("../models/post.model");

// logic to insert posts

const insertPost = async (req, res) => {
    try{
        const insertedPosts = await Post.insertMany([
            {
                title : "learning js",
                Descreption : "This is my first post",
                category : "education",
            },
            {
                title : "learn node",
                Descreption : "learning node",
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

module.exports = {insertPost};