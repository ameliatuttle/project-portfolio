import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-md-0">© {new Date().getFullYear()} Amelia Tuttle</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://github.com/ameliatuttle" className="text-white" target="_blank">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/amelia-tuttle/" className="text-white" target="_blank">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:aetuttle.18@gmail.com" className="text-white">
                <FaEnvelope size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;