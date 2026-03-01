import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import Book from './model/book.model.js';
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
import cors from 'cors'
import cookieParser from "cookie-parser";
const app=express();
dotenv.config()

const PORT=process.env.PORT || 4000
const URI=process.env.MONGODB_URI


mongoose.connect(URI)
    .then(()=> console.log("db connected"))
    .catch((err)=>console.log("Error",err))



app.use(express.json())
app.use(cookieParser()); 
app.use(cors({
  origin: "http://localhost:5173", // frontend URL (must be exact)
  credentials: true                // allow cookies
}));

app.get('/',(req,res)=>{

    res.send("hello from")
})

app.use(bookRoute)
app.use('/user',userRoute)
app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})
