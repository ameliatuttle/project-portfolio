import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const ProjectSection = ({ title, projects, sectionId }) => {
  return (
    <Container className="mb-5" id={sectionId}>
      <h2 className="mb-4 pb-2 border-bottom">{title}</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectSection;