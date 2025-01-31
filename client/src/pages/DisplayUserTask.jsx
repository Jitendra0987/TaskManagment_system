import axios from "axios";
import { useEffect,useState} from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';



const DisplayUserTask=()=>{
       const empid=localStorage.getItem("empid");
       const [mydata, setMydata]=useState([]);
       const [taskStatus, setTaskStatus] = useState("");

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
               
               

                </td>
            </tr>
            
            </>
        )
    })



    return(
        <>
        <h1> user task </h1>
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>Task Title</th>
                <th>Description</th>
                <th>Total Days</th>
                
            </tr>
            </thead>
            {ans}
        </table>

        </>
    )
}
export default DisplayUserTask;