//  require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})





connectDB()





 /*
 import express from "express";
 const app = express();

 ( async ()=>{

    try{
       await  mongoose.connect(`$(process.env.MONGODB_URI)/${DB_NAME}`);
       app.on("error" ,(error) => {
        console.log("the database do not call express");
        throw error;
       })
       app.listen(process.env.PORT , () =>{
        console.log(`App is listening on prot ${process.env.PORT}`);
       })

    }catch(error)
    {
        console.error("Error:" , error);
        throw error;
    }

 })()
    */