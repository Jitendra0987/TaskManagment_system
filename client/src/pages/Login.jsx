import { useState } from "react";
import axios from "axios";
import {message} from "antd"
import { useNavigate } from "react-router-dom";


const Login = () => {
   const [userid, setUserid]=useState("");
   const [password, setPassword]=useState("");
   const [usertype, setUsertype]=useState("");
   const navigate=useNavigate();
    

// console.log(userid,password,usertype)


const handelsubmit=async()=>{
   
    
  if(usertype== "admin"){


    try {
      let api="http://localhost:8000/admin/datasave";
     const response= await axios.post(api ,{
         userid:userid,
         password:password
       });
       console.log(response)
     
       if(response.status==200)
       {
        localStorage.setItem("adminname",response.data.username);
        localStorage.setItem("adminid",response.data.userid);
         message.success("Login Succesfulley");
         navigate("/AdminDashboard")
       }

    } catch (error) {
      message.error(error.response.data.msg)
    }
        
   }
   else{
    message.error("pls select valid option")
  }
}




  return (
    <div className="form-container">
      <div className="form">
        <input type="text" placeholder="Enter your ID" className="form-input" value={userid} onChange={(e)=>{setUserid(e.target.value)}}/>
        <br />
        <input type="password" placeholder="Password" className="form-input" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <br />


        <select name="usertype" value={usertype} onChange={(e)=>{setUsertype(e.target.value)}} >
        <option value="">Login</option>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
      </select>


        <button type="button" className="form-button" onClick={handelsubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
