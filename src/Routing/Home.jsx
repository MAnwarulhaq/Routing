import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to MyApp</h1>
      <p style={styles.description}>
        This is a modern React-based web application that demonstrates routing and component structure. 
        Use the navigation bar to explore different sections such as About, Login, College Info, and more.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '30px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1e3a8a',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.6',
  },
};

export default Home;
