import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()
     const handlelogOut = ()=>{
    localStorage.removeItem("login")
    navigate('/login')

  }
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #1e1e2f, #121212)",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    },
    button: {
      padding: "12px 30px",
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "#fff",
      background: "linear-gradient(90deg, #ff4dc4, #9966ff)",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      boxShadow: "0 0 10px rgba(255, 77, 196, 0.4)",
      transition: "all 0.3s ease",
    },
  };

  // Hover effect through event handlers
  const handleMouseEnter = (e) => {
    e.target.style.transform = "scale(1.08)";
    e.target.style.boxShadow = "0 0 20px rgba(153, 102, 255, 0.7)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "scale(1)";
    e.target.style.boxShadow = "0 0 10px rgba(255, 77, 196, 0.4)";
  };

  return (
    <div style={styles.container}>
      <button
        style={styles.button}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handlelogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
