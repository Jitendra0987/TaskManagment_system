

const mongoose=require("mongoose");
 
const taskAssignSchema=new mongoose.Schema({
    tasktitle: String,
    taskDescription: String,
    compdays: String,
    empid:{
         type: mongoose.Types.ObjectId, ref:"userCreate"
    }
})
module.exports=mongoose.model("empTask",taskAssignSchema)