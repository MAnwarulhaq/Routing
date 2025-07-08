
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PageNotFound from './PageNotFound';

function App() {
  

  return (
   <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      {/* Page not found */}
      {/* <Route path="/*" element={<h1>404 Not Found</h1>} /> */}
      <Route path="/*" element={<PageNotFound/>} />
    </Routes>
   </div>
  );
}


export default App;
