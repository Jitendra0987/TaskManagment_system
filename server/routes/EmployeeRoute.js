const express=require("express");
const route=express.Router();
const employeecontroller=require("../controller/EmployeeController")

 route.post("/employeelogin",employeecontroller.employeeLogin);
 route.post("/emptaskdisplay",employeecontroller.empTaskDisplay);
 route.post("/employeetasksubmit",employeecontroller.empTaskSubmit);
 route.post("/passwordreset",employeecontroller.ResetPassword);
 

 
module.exports=route;  