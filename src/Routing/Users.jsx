import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';


const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f3f4f6', // lighter gray
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    color: '#111827',
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '30px',
  },
  userList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '24px',
  },
  userCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    width: '250px',
    padding: '20px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  userCardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.1)',
  },
  userName: {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#1f2937',
  },
  userEmail: {
    fontSize: '0.95rem',
    color: '#6b7280',
  },
};

const Users = () => {
  const navigate = useNavigate()
  const users = [
    { id: 1, name: 'Haadi', email: 'haadi@example.com' },
    { id: 2, name: 'Ali', email: 'ali@example.com' },
    { id: 3, name: 'Sara', email: 'sara@example.com' },
    { id: 4, name: 'Fiazan', email: 'faizan@example.com' },
    { id: 5, name: 'Anwar', email: 'anwar@example.com' },
    { id: 6, name: 'Kaleem', email: 'kaleem@example.com' },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const handlelogOut = ()=>{
    localStorage.removeItem("login")
    navigate('/login')

  }
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User List</h1>
      <button onClick={handlelogOut}>LogOut</button>
      <div style={styles.userList}>
        {users.map((user) => {
          const isHovered = hoveredCard === user.id;
          const cardStyle = isHovered
            ? { ...styles.userCard, ...styles.userCardHover }
            : styles.userCard;

          return (
            <Link
              key={user.id}
              to={`/users/${user.id}`}
              style={cardStyle}
              onMouseEnter={() => setHoveredCard(user.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h2 style={styles.userName}>{user.name}</h2>
              <p style={styles.userEmail}>{user.email}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
