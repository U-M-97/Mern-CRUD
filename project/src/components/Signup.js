import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './signup.css'

const Signup = () => {

        const navigate = useNavigate()

        const Post = async (e)=>{
            e.preventDefault()
            const {name,email,password}= inputs;

            const res = await fetch("http://localhost:5000/signup" ,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,email,password
                })
            })

            const data = await res.json()

            if (res.status === 422 || !data){
                window.alert("Email already exists")
                console.log("Email already exists")
            } else if(res.status === 421){
                window.alert("Please fill the required field")
                console.log("Please fill the required field")
            }
            else{
                window.alert("Registration Successfull")
                console.log("Registration Successfull")

                navigate("/login")
            }
        }


    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password:""
    })

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}))
        console.log(value)
    }

    const handleSubmit= (e)=>{
        e.preventDefault()
        alert(inputs)
    }


  return (
   <body className='signup-body'>
        <div className='box'>
        <h1 className='header'>Create an Account</h1>
        
        <div className='d1'>
         <h2 className='h2'>Already have an account?</h2>
         <a className='signin' href='/login'>Sign In</a>
        </div>
        
        <div className='inputs'>
        <input placeholder='Name' className='i1' name='name' value={inputs.name || ""} onChange={handleChange}></input>
        <input placeholder='Email' className='i1' name='email' value={inputs.email || ""} onChange={handleChange}></input>
        <input placeholder='Password' className='pass' name='password' value={inputs.password || ""} onChange={handleChange}></input>

         <button className='b1' onClick={Post}>Sign Up</button>
         <div className='cond'>
         <input className='b2' type={"checkbox"}></input>
         <label className='l1'>I have read and agree to the Terms of Service</label>
         </div>
         
        </div>
        
        
        </div>
   </body>
  )
}

export default Signup