import React from 'react';

const CollegeDetail = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Our College</h1>

      <p style={styles.paragraph}>
        Established in 1995, our college has grown into a premier institution offering world-class education in diverse fields including
        Computer Science, Engineering, Business Studies, and Humanities. Our campus is equipped with state-of-the-art labs, libraries,
        research centers, and recreational facilities.
      </p>

      <p style={styles.paragraph}>
        Our mission is to empower students with the knowledge, skills, and values necessary to lead and innovate in a global society.
        We believe in a holistic education approach that combines academics, research, and community engagement.
      </p>

      <div style={styles.highlights}>
        <h2 style={styles.subheading}>College Highlights:</h2>
        <ul style={styles.list}>
          <li>Accredited by HEC and internationally recognized</li>
          <li>Highly qualified and experienced faculty</li>
          <li>Modern research and innovation labs</li>
          <li>Career development and placement services</li>
          <li>Vibrant campus life with clubs, sports, and events</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f0f4f8',
    borderRadius: '10px',
    maxWidth: '900px',
    margin: '30px auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.07)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1e3a8a',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#1e40af',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.6',
    textAlign: 'justify',
    marginBottom: '20px',
  },
  highlights: {
    marginTop: '30px',
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.8',
    color: '#111827',
  },
};

export default CollegeDetail;
