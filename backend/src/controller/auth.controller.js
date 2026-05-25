


const authModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcrypt")



const registerAuth = async(req,res)=>{
     const {username, email, password}= req.body
     if(!username|| !email ||!password)   {
        return res.status(400).json({message:"please fill the form"})
     }  
    try{
  const userEmail=  await authModel.findOne({email})

  if(userEmail){
    return res.status(400).json({message:"email has been already register"})
  }

  const hashPassword =await bcrypt.hash(password,10)
  const user= await authModel.create({
     username,
     email,
     password:hashPassword
  })
  const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET,{expiresIn:"7d"})
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,        // ✅ ALWAYS TRUE (Render uses HTTPS)
  sameSite: "none"     // ✅ REQUIRED for cross-origin
})
res.status(200).json({message:"successfully register",user:{
      id:user.id,
        username:user.username,
    email:user.email,
}})
    }catch(e){
     return res.status(500).json({message:e.message})
    }
}
const loginAuth = async(req,res)=>{
    const {email, password} = req.body
    try{
         if( !email ||!password)   {
        return res.status(400).json({message:"please fill the form"})
     } 
     const user= await authModel.findOne({email})
     if(!user){
         return res.status(400).json({message:"email is not register"})
     }
     const camparePassword = await bcrypt.compare(password, user.password)
     if(!camparePassword){
           return res.status(400).json({message:"password is incorrect"})
     }
     const token= jwt.sign({ id: user._id, username: user.username },process.env.JWT_SECRET,{expiresIn:"7d"})
      res.cookie("token", token, {
  httpOnly: true,
  secure: true,        // ✅ ALWAYS TRUE (Render uses HTTPS)
  sameSite: "none"     // ✅ REQUIRED for cross-origin
})
res.status(200).json({message:"",user:{
    email:user.email,
    username:user.username,
    id:user.id
}})
    }catch(e){
         return res.status(500).json({message:e})
    }
}

const logoutAuth = async (req, res) => {
 
 res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "none"
})
  res.status(200).json({ message: "User logged ourt successfully" })
}



module.exports = {
    registerAuth,
    loginAuth,
    logoutAuth
}