import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built using React and Vite to showcase my skills, projects, and contact information.'
    },
    {
      title: 'Employee Leave System',
      description: 'A full-stack MERN application for managing employee leave requests, approvals, and tracking with separate admin and employee panels.'
    },
    {
      title: 'Movie Search App',
      description: 'A responsive React app that uses a third-party movie API to search for movies, display details, and manage favorites.'
    }
  ];

  return (
    <section
      id="projects"
      style={{
        padding: '4rem 2rem',
        backgroundColor: '#F5F5F5',
        color: '#0A192F'
      }}
    >
      <h3
        style={{
          fontSize: '2rem',
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        Projects
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}
      >
        {projectData.map((project, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '8px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = 'scale(1.03)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = 'scale(1)')
            }
          >
            <h4 style={{ marginBottom: '1rem', color: '#0A192F' }}>
              {project.title}
            </h4>
            <p style={{ color: '#555' }}>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

