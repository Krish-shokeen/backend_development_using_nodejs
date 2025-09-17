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


// update single user

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



module.exports =router;