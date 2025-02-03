import { useEffect, useState } from "react";
import axios from "axios";
import {message}   from "antd";

const PasswordReset=()=>{
    const[input, setInput]=useState({});
    const [empid, setEmpid]=useState("")

    useEffect(()=>{
            setEmpid(localStorage.getItem("empid"))
    },[])

    const handelChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }



    const handelInput=async()=>{

        try {
            let api="http://localhost:8000/employee/passwordreset";
            const response=await  axios.post(api ,{empid:empid,...input})
                 message.success("password succesfulley change!!!")
                   
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
        <div className="passwordReset">

        <input type="password" placeholder="old password"  name="oldpassword" onChange={handelChange} /><br />
        <input type="password" placeholder="new password" name="newpassword" onChange={handelChange} />
        <button onClick={handelInput}>Submit</button>
        </div>
        </>
    )
}
export default PasswordReset;