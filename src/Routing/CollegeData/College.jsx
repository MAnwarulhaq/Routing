import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'

import './College.css' // ✅ Link to external CSS

const College = () => {
  return (
    <div className="college-container">
      <h1 className="college-heading">College Data</h1>

      <nav className="college-nav">
        <Link to="student" className="college-link">Student Data</Link>
        <Link to="department" className="college-link">Department Data</Link>
        <Link to="faculty" className="college-link">Faculty Information</Link>
      </nav>

      <div className="college-content">
        <Outlet />
      </div>
    </div>
  )
}

export default College
