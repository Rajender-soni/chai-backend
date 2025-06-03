import dotenv from "dotenv";
import connectDB from "./db/index.js";

//dotenv provide environment variable access to all the program 
dotenv.config({
    path: `./env`,
})


connectDB();













//----------------------------------------------------------------------------------------------------------------------------------------------
//----this is the first approach to connect the server with database another approach is we write the code in db/index.js file and import here---

/*import express from "express"
const app=express()

//()()  this is IIFE used to immediate invoke mtlb hame ise call karne ki jarurat nahi ha 
(async () => {
    try{
        //use await bcx data ko ane me time lagta ha 
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error
        })
        
        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening ${process.env.PORT}`);
        })
    }catch(error){
        console.log("ERROR",error)
        throw error
    }
})()

*/
