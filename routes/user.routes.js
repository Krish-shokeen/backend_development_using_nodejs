// require express

const express = require("express");

// import user module

const User =require("../models/user.model");




// router -> tp create apis

const router = express.Router();



router.post("/store-user",async function(req,res) {
    try{
        // whatever

        // store user

        const {username, email,password}=req.body;

        // create new user

        const newUser = new User({
            username,
            email,
            password,
        });

        // save newUser

        await newUser.save()

        return res.json({message: "User stored succesfully",user :newUser});


    }
    catch(err){
        console.log(err);
    }
    
})



// api to fetch users
router.get("/users", async(req,res) =>{
    try{
        const users =await User.find(); // array []
        return res.json({ message : "Users Fetched",users });
    }catch(err){
        console.log(err);
    }
})




// update single user api
router.patch("/edit-user/:userId",async (req,res) =>{
    try{
        // logic
        const{userId}=req.params;

        // get password

        const{password} = req.body;

        // find user based on userId

        const user = await User.findById(userId);

        user.password = password;

        await user.save();

        return res.json({message : "User updated successfully",user});

    }catch(err){
        console.log("err",err);
        
    }
})

// delete user api

router.delete("/delete-account/:userId",async (req,res) =>{
    try{
        // logic

        // step 1
        const{userId} = req.params;
        // step 2
        const deletedUser = await User.findByIdAndDelete(userId);

        return res.json({
            message : "User deleted successfully",
            user : deletedUser
        });
    }catch(err){
        console.log(err);
    }
});












module.exports =router;