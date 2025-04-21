import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ title, description, image, link, github, id }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="h-100 shadow-sm project-card" 
      onClick={() => navigate(`/project/${id}`)}
      style={{ cursor: 'pointer' }}
    >
      <Card.Img variant="top" src={image || "/placeholder.jpg"} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white border-0">
        <div className="d-flex gap-3">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-dark" onClick={(e) => e.stopPropagation()}>
              <FaGithub size={20} />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-dark" onClick={(e) => e.stopPropagation()}>
              <FaExternalLinkAlt size={18} />
            </a>
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;