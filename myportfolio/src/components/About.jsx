import React from 'react';

const About = () => {
  return (
    <section id="about" style={{
      padding: '4rem 2rem',
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>About Me</h3>
      <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
        I am a full stack web developer specializing in building (and occasionally designing) exceptional digital experiences.
        I'm focused on building responsive web apps using MongoDB, Express, React, and Node.js.
      </p>
    </section>
  );
};

export default About;
