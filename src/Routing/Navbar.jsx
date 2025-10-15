import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const login = localStorage.getItem("login")

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Users", path: "/users" },
    { name: "Login", path: "/login" },
    { name: "College", path: "/college" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <h1 className="nav-logo">
          <span>React</span>Portal
        </h1>

        {/* Hamburger (for mobile) */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        {
          login?
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/college">College</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            
            
        </ul>:
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
           <li><Link to="/about">About</Link></li>
          
            <li><Link to="/login">Login</Link></li>
           
            
            
        </ul>
        }
        
      </div>
    </nav>
  );
};

export default Navbar;
