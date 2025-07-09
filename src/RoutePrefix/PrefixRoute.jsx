import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Routing/Home';
import About from '../Routing/About';
import PageNotFound from '../Routing/PageNotFound';
import Login from '../Routing/Login';
import College from '../Routing/CollegeData/College';
import StudentData from '../Routing/CollegeData/StudentData';
import DepartmentData from '../Routing/CollegeData/DapartmentData';
import Faculty from '../Routing/CollegeData/Faculty';
import CollegeDetail from '../Routing/CollegeData/CollegeDetail';
function PrefixRoute() {
    return (

        <div>
            {/* Modern Navbar */}
            <nav style={styles.navbar}>
                <div style={styles.logo}>MyApp</div>
                <div style={styles.links}>
                    <Link to="/" style={styles.link}>Home</Link>
                    <Link to="/about" style={styles.link}>About</Link>
                    <Link to="/user/login" style={styles.link}>Login</Link>
                    <Link to="/college/" style={styles.link}>College</Link>
                </div>
            </nav>

            {/* Page Routes */}
            <div style={styles.pageContainer}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* PreFix Routing Start */}
                    <Route path='/user'>
                        <Route path="/user/login" element={<Login />} />
                    </Route>
                     {/* PreFix Routing End */}
                    <Route path="/college" element={<College />} >
                        <Route index element={<CollegeDetail />} />
                        <Route path="student" element={<StudentData />} />
                        <Route path="department" element={<DepartmentData />} />
                        <Route path="faculty" element={<Faculty />} />
                    </Route>
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

export default PrefixRoute;
