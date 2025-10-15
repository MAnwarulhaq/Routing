
import Home from "./Routing/Home";
import About from "./Routing/About";
import Login from "./Routing/Login";
import Users from "./Routing/Users";
import College from './Routing/CollegeData/College'
import { Routes,Route } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import PrivateRouting from "./PrivateRouting/PrivateRouting";
import StudentData from "./Routing/CollegeData/StudentData"
import Faculty from "./Routing/CollegeData/Faculty"
import DepartmentData from './Routing/CollegeData/DapartmentData'
function App() {
  return (
    <>

        <Navbar/>
      
      <Routes>

        <Route path="/" element={<Home/>} />
        
        <Route path="/about" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/users" element={<Users/>}/> */}
        <Route path="/users" element= {<PrivateRouting component={<Users/>}/>}/>
        {/* <Route path="/college" element={<College/>}/> */}
        <Route path="/college" element= {<PrivateRouting component={<College/>}/>}>
        <Route path="student" element={<StudentData/>}/>
         <Route path="department" element={<DepartmentData/>}/>
          <Route path="faculty" element={<Faculty/>}/>

        </Route>

      </Routes>
      
    </>
      
      
    
  );
}


export default App;
