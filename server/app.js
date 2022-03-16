const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv') 
dotenv.config({path: './config.env'})
const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use(require('./controller/userController'))


const mongoose = require('mongoose')
const DB = 'mongodb+srv://Montage_Website:valorant@cluster0.dmavh.mongodb.net/Montage_Website?retryWrites=true&w=majority'
mongoose.connect(DB, {
    useNewUrlParser:true
}).then(()=>{
    console.log('Connection Successfull')
}).catch((err) =>console.log('Connection failed'))


app.listen(port, ()=>{
    console.log("Server is running on port 5000")
})

