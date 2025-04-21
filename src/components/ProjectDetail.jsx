import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { professionalProjects, personalProjects, academicProjects, aiProjects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Combine all projects to find the matching one
  const allProjects = [...professionalProjects, ...personalProjects, ...academicProjects, ...aiProjects];
  const project = allProjects.find(p => p.id === id);

  if (!project) {
    return (
      <Container className="py-5">
        <h2>Project not found</h2>
        <Button variant="primary" onClick={() => navigate('/')}>
          <FaArrowLeft className="me-2" />
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Button variant="outline-primary" className="mb-4" onClick={() => navigate('/')}>
        <FaArrowLeft className="me-2" />
        Back to Projects
      </Button>
      
      <Row>
        <Col md={6}>
          <img 
            src={project.image || "/placeholder.jpg"} 
            alt={project.title} 
            className="img-fluid rounded shadow"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </Col>
        <Col md={6}>
          <h1 className="mb-4">{project.title}</h1>
          
          {project.longDescription && (
            <div className="mb-4">
              <h3>About this Project</h3>
              <p>{project.longDescription}</p>
            </div>
          )}
          
          {project.technologies && (
            <div className="mb-4">
              <h3>Technologies Used</h3>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {project.learned && (
            <div className="mb-4">
              <h3>What I Learned</h3>
              <p>{project.learned}</p>
            </div>
          )}
          
          <div className="d-flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                <FaGithub className="me-2" />
                View on GitHub
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaExternalLinkAlt className="me-2" />
                Live Demo
              </a>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail; 