const express=require("express");
const app=express();
const port=8080;
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const userRoutes=require("./routes/userRoutes");
const cors=require("cors")


app.use(cors())
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
        .then(console.log("db connected successfully")).catch((err)=>{
            console.log(err)
        })
 
app.use(userRoutes)        


app.listen(port,()=>{
    console.log(`application loaded in port ${port}`)
})