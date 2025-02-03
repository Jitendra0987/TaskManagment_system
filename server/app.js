const express= require("express");
const app= express();
const cors= require("cors");
const mongoose=require("mongoose");
const adminRoute= require("./routes/route");
const emplooyeRoute=require("./routes/EmployeeRoute");
const bodyparser = require('body-parser');



require('dotenv').config();
console.log(process.env)
let PORT = process.env.PORT 
let Dbconnect=process.env.DBCON



mongoose.connect(Dbconnect).then(()=>{
    console.log("DB connected!");
})
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/admin", adminRoute);
app.use("/employee",emplooyeRoute);


app.listen(PORT, ()=>{
    console.log(`Server run on  ${PORT}`);
})