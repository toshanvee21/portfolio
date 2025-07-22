import React from 'react';
import profileImg from '../assets/profile.jpg'; // Ensure image path is correct

const Hero = () => {
  return (
    <section
      style={{
        backgroundColor: '#0A192F',
        color: '#CCD6F6',
        minHeight: '100vh',
        padding: '4rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        gap: '3rem',
      }}
    >
      {/* Text Section */}
      <div style={{ flex: '1 1 300px', maxWidth: '600px' }}>
        <p style={{ color: '#64FFDA', fontSize: '1.1rem' }}>
          Hi, my name is
        </p>
        <h1 style={{ fontSize: '3rem', margin: '0.5rem 0', fontWeight: 'bold' }}>
          Toshanvee Mirge
        </h1>
        <h2 style={{ fontSize: '2rem', color: '#8892B0' }}>
          I'm a Full Stack Web Developer
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#8892B0', marginTop: '1rem' }}>
          I build fast and scalable web applications using the MERN stack with a focus on responsive design and clean code.
        </p>

        <button
          style={{
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            border: '2px solid #64FFDA',
            color: '#64FFDA',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#64FFDA';
            e.target.style.color = '#0A192F';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#64FFDA';
          }}
          onClick={() => window.location.href = "#projects"}
        >
          View My Work
        </button>
      </div>

      {/* Image Section */}
      <div
        style={{
          flex: '1 1 300px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '300px',
            height: '400px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '4px solid #64FFDA',
            boxShadow: '0 6px 25px rgba(0, 0, 0, 0.5)',
          }}
        >
          <img
            src={profileImg}
            alt="Toshanvee Mirge"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
