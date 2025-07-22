import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#0A192F',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#64FFDA',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <h1 style={{ fontSize: '1.5rem' }}>My Portfolio</h1>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0 }}>
        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                color: '#CCD6F6',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#64FFDA')}
              onMouseLeave={(e) => (e.target.style.color = '#CCD6F6')}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
