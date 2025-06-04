import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//Ye CORS (Cross-Origin Resource Sharing) ko configure karne ke liye Express middleware hai.
//Iska kaam hai allow karna ki ek origin (jaise frontend app) doosre origin (jaise backend server) se requests bhej sake bina CORS errors ke.
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//maximum 16 kilobytes tak ka JSON payload accept kiya jayega.Agar koi bada payload aayega toh request reject ho sakti hai.
app.use(express.json({limit:"16kb"}));
//- Yeh middleware form data ko handle karta hai jo x-www-form-urlencoded format me aata hai (jaise normal HTML form submit karne pe).
app.use(express.urlencoded({extended:true , limit:"16kb"}));
//- Is middleware ka kaam static files (pdf, video, images, JS) ko serve karna hai. 
// ye local storage me store karke sabke liye accesable banata ha (pdf,img)
app.use(express.static("public"));
//- Yeh middleware cookies ko parse karta hai jo client-side se request ke sath aati hain.
//- Yeh request ke andar se cookies ko read karta hai aur req.cookies me available kar deta hai.
//- Secure authentication ya user sessions me helpful hota hai.
app.use(cookieParser());

export {app};