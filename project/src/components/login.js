import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {

  const navigate = useNavigate()

   const userLogin = async (e) =>{
      try{
        const {email,password} = inputs
        e.preventDefault()
      const res = await fetch("http://localhost:5000/login", {
        method:"POST",
        headers:{
          "Accept": "application/json",
          "Content-Type": "application/json",
          
        },
        
        body: JSON.stringify({email,password})
        
      })
  

      const data = await res.json();
      console.log(data)

      if(res.status === 421 || !data){
        window.alert("Please fill the required fields")
      }else if(res.status === 422){
        window.alert("User doesn't exists")
      }else if(res.status === 424){
        window.alert("Invalid email or password")
      }else if(res.status === 423){
        window.alert("Login Successfully")
        navigate("/home")
      }
      }catch(err){
        console.log(err)
        
      }

   }

    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        setInputs(values => ({...values, [name]:value }))
        console.log(value)
    }


  return (
    <body className='login-body'>
      <div className='l-Box'>
    <h1 className='l-header'>Log In</h1>

    <div className='l-inputs'>
       <input className='l-i1' placeholder='Email' name='email' value={inputs.email || ""} onChange={handleInput} ></input>
       <input className='l-i1' placeholder='password' name='password' value={inputs.password} onChange={handleInput}></input>
       <button className='l-b1' onClick={userLogin}>Log In</button>
       <a className='l-createAccount' href='/signup'>Create Account</a>
    </div>
</div>

    </body>
    
   
  )
}

export default Login