import React, {useState} from 'react'
import "./Signup.css"
import axios from "axios"
// to create  and maintain state -> .usestate hook

const Signup = () => {
    // for username
    const[username,setUsername] = useState("");
    console.log("Username is:",username)
    // for email
    const[email,setEmail] = useState("");
    console.log("Email is:",email)
    // for password
    const[password,setPassword] = useState("");
    console.log("Password is:",password)


    // signup function
    const signup = async() =>{
        try{

            // make api call 
            const response =await axios.post("http://localhost:6969/api/store-user")

        }catch(err){
            console.log("err while signing up",err)
        }
    }


    return (
    <div>
        <h1>Signup Page</h1>
        
        <form className='signup-form'>
            <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Signup</button>
        </form>
    </div>

  )
}

export default Signup


