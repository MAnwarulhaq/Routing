import React from 'react';

const DapartmentData = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Department Overview</h2>
      <p style={styles.paragraph}>
        Our college houses several departments that offer high-quality education and hands-on learning experiences.
        Each department is dedicated to academic excellence, equipped with expert faculty, modern infrastructure, and
        a curriculum that meets industry standards.
      </p>

      <p style={styles.paragraph}>
        <strong>Major Departments:</strong>
        <ul style={styles.list}>
          <li>Computer Science</li>
          <li>Electrical Engineering</li>
          <li>Business Administration</li>
          <li>Humanities & Social Sciences</li>
          <li>Mathematics & Statistics</li>
        </ul>
      </p>

      <p style={styles.paragraph}>
        These departments focus on nurturing students with theoretical knowledge and practical skills.
        With access to labs, seminars, and research opportunities, students are well-prepared for academic and professional success.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f0f4f8',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#1e3a8a',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.6',
    marginBottom: '15px',
    textAlign: 'justify',
  },
  list: {
    paddingLeft: '20px',
    marginTop: '10px',
    lineHeight: '1.8',
  },
};

export default DapartmentData;
