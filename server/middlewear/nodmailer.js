
const nodemailer=require("nodemailer");

const transporter=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:"jitendra01432@gmail.com",
        pass:""              
      }
})
transporter.verify((error,success)=>{
       
      if(error){
        console.error("Error connection to email service:",error);
      }
      else{
        console.log("Email service ready to send messages")
      }
})
module.exports=transporter;