import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-primary text-white py-5 mb-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center mb-4">
            <h1 className="display-4 mb-3">
              <span className="fw-bold">Amelia Tuttle </span> | <span className="fw-normal"> Software Engineer</span>
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10}>
            <div id="about" className="bg-white bg-opacity-10 p-4 rounded">
              <h2 className="h3 mb-4">About Me</h2>
              <p className="mb-3">
                I'm a passionate software engineer with a focus in data science and backend programming. 
                My journey in software development began with a curiosity for building things that challenge my skills, so 
                I decided to take a coding class in college and never looked back. 
              </p>
              <p className="mb-3">
                With experience in both front-end and back-end development, I enjoy tackling complex problems and turning them 
                into elegant, efficient solutions. I'm particularly interested in database design and management, backend programming, and algorithm design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, reading a fantasy novel, or doing something outdoors.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;