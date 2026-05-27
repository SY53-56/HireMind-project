const jwt = require("jsonwebtoken")

const authMiddleware= async(req,res,next)=>{
  try{
 const token = req.cookies.token
   if(!token){
    res.status(400).json({message:"token invaild"})
   }
   const decode = jwt.verify(token,process.env.JWT_SECRET)
   user= req.decode
   next()
  }catch(e){
  return res.status(500).json({message:e})
  }
    
}


module.exports = {
    authMiddleware
}