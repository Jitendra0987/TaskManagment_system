 const EmpModel=require("../model/userCreateModel")
 const userTaskAssignModel=require("../model/TaskAssign")

const employeeLogin=async(req,res)=>{
        
           const {userid, password} = req.body;
        

           try {

            const Employee=  await EmpModel.findOne({email:userid})
            
            if(!Employee)
            {
                res.status(400).send({msg:"Invalid Email!!!!"})
            }
            if(Employee.password!=password)
            {
                res.status(400).send({msg:"Invalid password!!!"})
            }
                
           res.status(200).send(Employee);

           } catch (error) {
            console.log(error)
           }
         
}


const empTaskDisplay=async(req,res)=>{
    const {empid}=req.body;
        
    try {
        const Task=await userTaskAssignModel.find({empid:empid});
         res.status(200).send(Task)
    } catch (error) {
         console.log(error);
    }
}


 const empTaskSubmit=async(req,res)=>{
           const {taskid, taskstatus}=req.body;
        //    console.log(req.body)
           try {

               const Task=await userTaskAssignModel.findByIdAndUpdate(taskid,{taskstatus:taskstatus , empreports:"submitted"});
               res.status(200).send("Task successfully submited!!!")
            
           } catch (error) {
                   console.log(error);
           }
 }
           
 const ResetPassword=async(req,res)=>{
       const {oldpassword,newpassword,empid}=req.body;
    try {
        
           const Data=await EmpModel.findById(empid);
           console.log(Data)

           if(Data.password !== oldpassword){
                
            return res.status(400).json({ message: "Old password is incorrect" })
           }
           else if(Data.password = newpassword){
                 
            await Data.save();

           }
           res.json({ message: "Password changed successfully" });
         

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
        
    }

 }

module.exports={
    employeeLogin,
    empTaskDisplay,
    empTaskSubmit,
    ResetPassword
}