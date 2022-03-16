const express = require('express');
const User = require('../models//userSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/', (req,res)=>{
    res.send(`Usama Billionaire`)
    console.log('Connected to React')
})


router.post('/signup', async (req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        return res.status(421).json({error:"Please fill the required fields"})
    }

    try{
        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(422).json({error:"Email already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const user = new User({
            name,
            email, 
            password:hashPassword
        })
        await user.save()
        res.status(201).json({message:"Registration Successfull"})
    }catch(err){
        console.log(err)
    }
})

router.post('/login', async (req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        res.status(421).json({error:"Please fill the required fields"})
    }else{
        const user = await User.findOne({email:email})
        if(user){
            const isMatch = await bcrypt.compare(password, user.password)
            if(user.email === email && isMatch){
                res.status(423).json({message:"Login Successfully"})
            }else{
                res.status(424).json({error:"Invalid email or password"})
            }

        }else{
            res.status(422).json({error: "User doesn't exists"})
        }
    }
})

router.get('/display', async (req,res)=>{
    const user = await User.find()
    res.json(user)
})

router.delete('/display/:id', async(req,res)=>{
    try{
        console.log(req.params.id)
        const user = await User.findByIdAndDelete(req.params.id)   
        res.status(400).json(user)
 
    }catch(err){
        console.log(err)
    }
})

router.put('/display/:id', async (req,res) =>{
    console.log(req.params.id)
    const user = await User.findByIdAndUpdate(req.params.id , {name:"UwedsA"})
    res.status(400).json(user)
}  )



module.exports = router
