import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        MyApp is a modern web application built using React. It demonstrates key concepts such as routing, reusable components, 
        and clean UI design. The project aims to help learners and developers understand how to build scalable React apps.
      </p>
      <p style={styles.paragraph}>
        Whether you're navigating to the college data, viewing faculty info, or exploring student details, this app ensures a smooth and intuitive experience.
        Our goal is to combine clean code, great UX, and educational value in one place.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    backgroundColor: '#f3f4f6',
    borderRadius: '10px',
    maxWidth: '800px',
    margin: '30px auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1e3a8a',
    marginBottom: '20px',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#374151',
    lineHeight: '1.6',
    textAlign: 'justify',
    marginBottom: '15px',
  },
};

export default About;
