import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//highly possible that mogoose data give error so we use try and catch
const connectDB  = async () => {
    try{
        //used to connect mongoose
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        //this is used to check is our connection is connected with server?
        console.log(`\n MongoDB connected !! db host: ${connectionInstance.connection.host} `);

    } catch(error){

        console.log("MONGODB connection error ", error);
        //In Node.js, process.exit(1) is used to terminate a process with a failure code.
        process.exit(1);

    }
}
export default connectDB;