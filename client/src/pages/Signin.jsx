import React, {useState} from 'react'
import "./Signup.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
// to create  and maintain state -> .usestate hook

const Signin = () => {

    // navigate 
    const Navigate = useNavigate();
    // for email
    const[email,setEmail] = useState("");
    console.log("Email is:",email)
    // for password
    const[password,setPassword] = useState("");
    console.log("Password is:",password)


    // signin function
    const signin = async(e) =>{
        e.preventDefault(); // to prevent reloading of page
        try{

            // make api call 

            const response =await axios.post("http://localhost:6969/api/store-user",
                {username,email,password} // data to be sent to backend

            )

        }catch(err){
            console.log("err while signing up",err)
        }
    }


    return (
    <div>
        <h1>Signin Page</h1>

        <form onSubmit={signin} className='signup-form'>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Signup</button>
        </form>
    </div>

  )
}

export default Signup


