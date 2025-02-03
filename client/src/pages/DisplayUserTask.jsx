import axios from "axios";
import { useEffect,useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button"



const DisplayUserTask=()=>{
       const empid=localStorage.getItem("empid");
       const [mydata, setMydata]=useState([]);
       const [taskStatus,setTaskStatus]=useState("");
      

    const loadData=async()=>{
         
        try {

            let api="http://localhost:8000/employee/emptaskdisplay";
             const response=await axios.post(api,{empid:empid})
             setMydata(response.data)
             console.log(response.data)
            } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        loadData()
    },[])


    const taskSubmit=async(taskid)=>{
        
        try {
            let api="http://localhost:8000/employee/employeetasksubmit";
            const response=await  axios.post(api,{taskid:taskid, taskstatus:taskStatus })
                 alert(response.data);
            
        } catch (error) {
            console.log(error);
        }


    }
    let sno=0;
    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.tasktitle}</td>
                <td>{key.taskDescription}</td>
                <td>{key.compdays}</td>
                <td>
                <Form.Select aria-label="Default select example" name="taskStatus" value={taskStatus} onChange={(e)=>{setTaskStatus(e.target.value)}}>
                 <option>Select Task</option>
                 <option value="Fully Completed">Fully Completed</option>
                 <option value="Partial Completed">Partial Completed</option>
                 <option value="No Completed">No Completed</option>
                 </Form.Select>
                 </td>

                 <td>
                     {key.empreport=="submitted"?(<Button disabled>submitted</Button>):(<Button onClick={()=>{taskSubmit(key._id)}}>send</Button>)}
                 </td>
               
            </tr>
            
            </>
        )
    })



    return(
        <>
        <h1 style={{fontSize:"30px"}}> User Task </h1>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Task Title</th>
                <th>Description</th>
                <th>Total Days</th>
                <th>Select Task</th>
                <th>Task send</th>
            </tr>
            </thead>
            {ans}
        </table>

        </>
    )
}
export default DisplayUserTask;