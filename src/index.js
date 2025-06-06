import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"

//dotenv provide environment variable access to all the program 
dotenv.config({
    path: `./env`,
})

//kyoki connectDB async ha to ye promise return karega to humne then and catch use kara ha 
connectDB()
.then(() => {
    //agar koi error nahi ha to app listen karegi 
    app.listen(process.env.PORT||8000, () => {
        console.log(`Server is running at Port : ${process.env.PORT}`)
    });
})
.catch((err) => {
    //error ha to error show karo
    console.log("MONGO db connection failed !!!");
})













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
