const mongoose = require("mongoose")

const connectDb =async ()=>{
   try{
      await mongoose.connect(process.env.MONGOOSE_URL)

    console.log("MongoDB Connected");
   }catch(e){
    console.log(`error ${e}`)
   }
}
module.exports = connectDb