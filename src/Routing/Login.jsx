import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" placeholder="Enter your email" style={styles.input} />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input type="password" placeholder="Enter your password" style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f3f4f6',
    borderRadius: '10px',
    maxWidth: '400px',
    margin: '50px auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2rem',
    color: '#1e3a8a',
    marginBottom: '20px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#374151',
  },
  input: {
    padding: '10px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Login;
