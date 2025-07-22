import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#F5F5F5',
        color: '#0A192F',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Me</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        I'm open to opportunities, collaborations, or just a friendly hello!
      </p>

      {/* Contact Info with Icons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <a
          href="mailto:toshanveemirge21@gmail.com"
          style={{
            color: '#0A192F',
            fontSize: '1.1rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <FaEnvelope /> toshanveemirge21@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/toshanvee-mirge/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#0A192F',
            fontSize: '1.1rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <FaLinkedin /> linkedin.com/in/toshanvee-mirge
        </a>
        <a
          href="https://github.com/toshanvee21"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#0A192F',
            fontSize: '1.1rem',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <FaGithub /> github.com/toshanvee21
        </a>
      </div>
    </section>
  );
};

export default Contact;
