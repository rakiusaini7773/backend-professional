import express from "express";
import cors from  "cors"
import cookieParser from "cookie-parser";
const app  = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})); //from ya request kin body say data lena par

app.use(express.urlencoded({extended:true , limit:"16kb"})) //kis bhi url say speace ki %20 ya + sign lagaya jata hai
app.use(express.static("public"));  //way to serve static files, such as images, CSS files, and JavaScript files i public folder 

app.use(cookieParser()); //Parses the cookie data to extract individual values such as the cookie name, value, and expiration date.



export {app};