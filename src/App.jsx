import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
}

export default App;
