// require express

const express = require("express");

const bcrypt = require("bcryptjs");

// import user module

const User =require("../models/user.model");




// router -> tp create apis

const router = express.Router();



router.post("/store-user",async function(req,res) {
    try{
        // whatever

        // store user

        const {username, email,password}=req.body;


        // hash the password
        const hashedPassword = await bcrypt.hash(password,10); 

        // create new user

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
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



// api route to search for a user 

router.get("/search-user",async (req,res) =>{
    try{
        // req.query 

        // www.amazon.com/search?query=mobile

        const{searchInput} = req.query;

        const users = await User.find({
            username : { $regex : searchInput, $options : "i" } // i -> case insensitive
        });


        // filtering logic
        // const filteredUsers = users.filter((user,index) => 
        //     user.username.toString().toLowerCase().includes(searchInput.toLowerCase())
            
        // );

        return res.status(200).json({message : "User fetched : ", users});
    }
    catch(err){
        console.log("error while searching a user",err.message);
        return res.status(500).json({message : "Internal server error"});
    }
});

// sort 

router.get("/sort",async (req,res) =>{
    try{
        // sort users in ascending order based on username
        const users = await User.find().sort({ username : 1}); 
        // 1 -> ascending order, 
        // -1 -> descending order
        return res.status(200).json({ message : "Users sorted successfully in ascending order", users});
    }catch(err){
        console.log("error while sorting users", err.message);
        return res.status(500).json({ message : "Internal server error"});
    }
});



module.exports =router;