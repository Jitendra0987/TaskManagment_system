import axios from "axios";
import { useEffect, useState } from "react";
import {message} from "antd";


const UserReport=()=>{
    const [myData, setMyData]=useState([]);


    const loadData=async()=>{
        
try {

    let api="http://localhost:8000/admin/showreport";
        const response=await axios.get(api);
        setMyData(response.data);
        console.log(response.data);
       
} catch (error) {
    console.log(error)
}
    
}
  
    useEffect(()=>{
             loadData()
    },[])


    const ressignTask=async(taskid)=>{
           
        try {

            let api="http://localhost:8000/admin/taskreassign";
             const response=await axios.post(api,{taskid:taskid});
             message.success(response.data.msg);
            
        } catch (error) {
            console.log(error)
        }

    }
    const ans=myData.map((key)=>{
         return(
            <>
            <tr className="report">
                <td>{key.empid.username}</td>
                <td>{key.empid.designation}</td>
                <td>{key.empid.email}</td>
                <td>{key.tasktitle}</td>
                <td>{key.taskDescription}</td>
                <td>{key.compdays}</td>
                <td>{key.taskstatus}</td>

                <td>
                    {key.empreport=="submitted"?(      
                        <>
                        <span style={{color:"green", fontWeight:"bold"}} >{key.empreports}</span>
                        </>
                    ):(
                        <>
                        <span style={{color:"red",fontWeight:"bold"}}>{key.empreports}</span>
                        </>
                    )}

                </td>
                
                <button onClick={()=>{ressignTask(key._id)}} >reAssign</button>


            </tr>
            </>
         )
    })
  
    return(
        <>
        <table className="userReport">
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Designation</th>
                    <th>Email</th>
                    <th>Task Description</th>
                    <th>Assign Days</th>
                    <th>Task Status</th>
                    <th>Report</th>
                    <th> task submit </th>
                    <th> Reassign</th>
                </tr>
            </thead>
            {ans}
        </table>

        </>
    )
}
export default UserReport;