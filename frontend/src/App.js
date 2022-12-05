import {BrowserRouter,Routes,Route}from "react-router-dom"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Home from "./pages/Home/Home";
import Forgot from "./pages/auth/Forgot";
import Sidebar from "./component/sidebar/SideBar";
import Layout from "./component/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import axios from "axios";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials=true;
function App() {
  return (
     <BrowserRouter>
      <ToastContainer />
       <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>  
        <Route path="/register" element={<Register/>}/>  
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/resetPassword/:resetToken" element={<Reset/>}/> 

        <Route path="/dashboard" element={
         <Sidebar>
          <Layout>
              <Dashboard/>
          </Layout>
        </Sidebar>}/>   
       </Routes>
     </BrowserRouter>
  )
}

export default App;
