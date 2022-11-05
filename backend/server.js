const dotenv = require("dotenv").config();
const express= require("express");
const mongoose= require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();
const PORT= process.env.PORT || 3000;
//Middlewares
app.use(express.json())//handle json data
app.use(express.urlencoded({extend: false}))//handle data through url
app.use(bodyParser.json());//helps to parse data from front-end to backend
//Routes
app.get("/",()=>(req,res)=>{
  res.send("Home Page");
})
//Connect mongoDb
mongoose
  .connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(PORT,()=>{
        console.log('Server Running on port '+PORT)
    })
  }) 
  .catch((err)=>console.log(err))  