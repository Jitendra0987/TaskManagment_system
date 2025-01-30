const express=require("express");
const route=express.Router();
const mycountrollere=require("../controller/controller")

route.post("/datasave",mycountrollere.Datasave)
route.post("/usercreate",mycountrollere.userCreated)
route.get("/dataDisplay",mycountrollere.userDataDisplay)
route.post("/assigntask",mycountrollere.assigntask)



module.exports=route;