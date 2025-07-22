import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={{ padding: '4rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
      <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#0A192F' }}>Skills</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git'].map(skill => (
          <span key={skill} style={{
            backgroundColor: '#0A192F',
            color: '#64FFDA',
            padding: '0.75rem 1.25rem',
            borderRadius: '20px',
            fontSize: '1rem',
            transition: '0.3s',
            cursor: 'default'
          }}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
