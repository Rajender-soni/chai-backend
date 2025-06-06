import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        //hum phale file ko local me store kara rahe ha to hum check karege ki local me store ha ki nahi
        if(!localFilePath) return null

        //yaha humne cloudinary me upload kar diya 
        const response = await cloudinary.uploader.upload(localFilePath , {
            resource_type : "auto" 
        })
        console.log("file is uploasded on cloudinary" , response.url);
        return response;
    } catch(error) {
        //agar upload operation fail ho gaya to local se bhi remove kar do
        fs.unlinkSync(localFilePath)
    }
}


export {uploadOnCloudinary}