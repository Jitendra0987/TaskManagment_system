const admiModel=require("../model/model")
const userCreatModel=require("../model/userCreateModel")
const randomPassword = require("../middlewear/UserPassword");
const transporter=require("../middlewear/nodmailer")
const taskAssignModel=require("../model/TaskAssign")


const Datasave=async(req,res)=>{
      const {userid, password}=req.body;

      try {

        const Admin =await admiModel.findOne({userid:userid});
        if(!Admin)
        {
          res.status(400).send({msg:"invalid user id"});
        }
        if(Admin.password!=password)
        {
          res.status(400).send({msg:" invalid password "});
        }

        res.status(200).send(Admin);

      } catch (error) {

        console.log(error);
      }

    }


    const userCreated=async(req,res)=>{
    const  { username , email , designation }=req.body;
    const mypass= randomPassword()

       const mailOptions={
        from:"jitendra01432@gmail.com",
        to:email,
        subject: "learning purpuse",
        text:`Dear ${username} your Account created with password : ${mypass}
        you can login using with your Email account `

       };
       
        try {


           const info =await transporter.sendMail(mailOptions);
              
           const userdata= await userCreatModel.create({           
            username:username,
            email:email,
            designation:designation,
            password: mypass

          })

       res.status(200).json({success:true,message:"email sent", info});
        
       } catch (error) {
            
        console.error('Error sending email:',email);
        res.status(500).json({ success: false, error: error.message});

       }
         
     }


     const userDataDisplay= async(req,res)=>{
          try {

             const Data= await userCreatModel.find();
             res.status(200).send(Data)
            
          } catch (error) {
               console.log(error);
          }
     }


    const  assigntask=async(req,res)=>{
             
      const  { empid, tasktitle, taskDescription,compdays }=req.body;

      try {
           
     const emplooye =await taskAssignModel.create({
          tasktitle:tasktitle,
          taskDescription: taskDescription,
          compdays: compdays,
          empid:empid

        })
        res.status(200).send("Task Succesfully Assigned!");
      } catch (error) {
        console.log(error)
      }

    }


module.exports={
    Datasave,
    userCreated,
    userDataDisplay,
    assigntask
}