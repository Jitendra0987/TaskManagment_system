import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CreateUser from "./pages/createUser";
import AssignTask from "./pages/AssignTask";


const App=()=>{
    return(
        
        <>
        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>  
            <Route path="login" element={<Login/>}/> 
            <Route path="login" element={<Login/>}/> 
            <Route path="admindashboard" element={<AdminDashboard/>}>
            <Route path="createuser"   element={<CreateUser/>}/>
            <Route path="assigntask"   element={<AssignTask/>}/>
            </Route>


            </Route>
        </Routes>
        </BrowserRouter>

        </>
    )

}
export default App;