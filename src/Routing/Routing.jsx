import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound';
import Login from './Login';
import College from './CollegeData/College';
import StudentData from './CollegeData/StudentData';
import DepartmentData from './CollegeData/DapartmentData';
import Faculty from './CollegeData/Faculty';
import CollegeDetail from './CollegeData/CollegeDetail';
import Users from './Users';
import UserDetails from './UserDetails';
function Routing() {
  return (
    
      <div>
        {/* Modern Navbar */}
        <nav style={styles.navbar}>
          <div style={styles.logo}>MyApp</div>
          <div style={styles.links}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/college/" style={styles.link}>College</Link>
             <Link to="/users" style={styles.link}>Users</Link>
          </div>
        </nav>

        {/* Page Routes */}
        <div style={styles.pageContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/college" element={<College />} >
              <Route index element={<CollegeDetail/>} />
              <Route path="student" element={<StudentData />} />
              <Route path="department" element={<DepartmentData />} />
              <Route path="faculty" element={<Faculty />} />
            </Route>
            <Route path="/users" element={<Users />} />
            <Route path='/users/:id' element={<UserDetails/>}/>
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
    padding: '10px 20px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  logo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: '0.3s',
  },
  pageContainer: {
    padding: '20px',
  },
};

styles.link[':hover'] = {
  backgroundColor: '#3b3b5c',
};

export default Routing;
