const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const adminRoute= require("./routes/route");
const bodyparser = require('body-parser');
const PORT = 8000


// require('dotenv').config();
// console.log(process.env)
// let PORT = process.env.PORT  || 8000



mongoose.connect("mongodb://127.0.0.1:27017/TaskManagmentSystem").then(()=>{
    console.log("DB connected!");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin", adminRoute);



app.listen(PORT, ()=>{
    console.log(`Server run on  ${PORT}`);
})