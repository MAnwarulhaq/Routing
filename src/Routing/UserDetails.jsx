import React from 'react';
import { useParams } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: '500px',
    margin: '60px auto',
    padding: '30px',
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'left',
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#111827',
    textAlign: 'center',
  },
  detail: {
    fontSize: '1rem',
    marginBottom: '12px',
    color: '#374151',
  },
  label: {
    fontWeight: '600',
    color: '#1f2937',
  },
};

const mockUsers = [
  { id: '1', name: 'Haadi', email: 'haadi@example.com', phone: '0312-0000001', address: 'Karachi, Pakistan' },
  { id: '2', name: 'Ali', email: 'ali@example.com', phone: '0312-0000002', address: 'Lahore, Pakistan' },
  { id: '3', name: 'Sara', email: 'sara@example.com', phone: '0312-0000003', address: 'Islamabad, Pakistan' },
  { id: '4', name: 'Fiazan', email: 'faizan@example.com', phone: '0312-0000004', address: 'Peshawar, Pakistan' },
  { id: '5', name: 'Anwar', email: 'anwar@example.com', phone: '0312-0000005', address: 'Multan, Pakistan' },
  { id: '6', name: 'Kaleem', email: 'kaleem@example.com', phone: '0312-0000006', address: 'Quetta, Pakistan' },
];

const UserDetails = () => {
  const { id } = useParams();
  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    return <div style={styles.container}><h3>User not found</h3></div>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Detail Page</h2>
      <p style={styles.detail}><span style={styles.label}>Name:</span> {user.name}</p>
      <p style={styles.detail}><span style={styles.label}>Email:</span> {user.email}</p>
      <p style={styles.detail}><span style={styles.label}>Phone:</span> {user.phone}</p>
      <p style={styles.detail}><span style={styles.label}>Address:</span> {user.address}</p>
    </div>
  );
};

export default UserDetails;
