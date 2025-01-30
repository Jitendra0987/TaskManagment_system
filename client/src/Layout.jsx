import { Outlet } from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/Footer"
import Topmenu from "./components/Navbar";




const Layout=()=>{
    return(
        <>
          
          <Topmenu/>
          <Header/>

          <Outlet/>
          <Footer/>
          
        </>
    )
}
export default Layout;