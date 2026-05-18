require("dotenv").config()
const express =require("express")
const app  = express()
const connectDb = require("./src/config/db")


app.listen(5000,(req,res)=>{
    connectDb()
    console.log("successfully work on port 5000")
})