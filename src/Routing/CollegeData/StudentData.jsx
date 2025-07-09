import React from 'react';

const StudentData = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Student Information</h2>
      <p style={styles.paragraph}>
        Our college takes pride in nurturing a diverse and talented student community. With a focus on both academic and extracurricular development,
        students are encouraged to participate in various activities, clubs, research, and internships throughout their time at the college.
      </p>

      <p style={styles.paragraph}>
        Here’s what makes our students stand out:
      </p>

      <ul style={styles.list}>
        <li>Access to modern labs and digital learning tools</li>
        <li>Participation in national and international competitions</li>
        <li>Personalized academic advising and career counseling</li>
        <li>Strong placement record with top companies</li>
        <li>Active student clubs and societies for leadership and fun</li>
      </ul>

      <p style={styles.paragraph}>
        With a student-first approach, we aim to provide a supportive environment that helps each individual grow into a well-rounded professional.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#f8fafc',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: 'auto',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  heading: {
    fontSize: '2rem',
    color: '#1d4ed8',
    textAlign: 'center',
    marginBottom: '20px',
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
    marginBottom: '20px',
    color: '#111827',
    lineHeight: '1.8',
  },
};

export default StudentData;
