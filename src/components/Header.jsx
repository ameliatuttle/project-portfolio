import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import useActiveSection from '../hooks/useActiveSection';

const Header = () => {
  const activeSection = useActiveSection();

  const handleClick = (e) => {
    const targetId = e.target.getAttribute('data-section');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4 sticky-top">
      <Container>
        <Navbar.Brand data-section="top" onClick={handleClick} style={{ cursor: 'pointer' }}>
          Project Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link 
              data-section="about"
              onClick={handleClick}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </Nav.Link>
            <Nav.Link 
              data-section="professional"
              onClick={handleClick}
              className={activeSection === 'professional' ? 'active' : ''}
            >
              Professional
            </Nav.Link>
            <Nav.Link 
              data-section="personal"
              onClick={handleClick}
              className={activeSection === 'personal' ? 'active' : ''}
            >
              Personal
            </Nav.Link>
            <Nav.Link 
              data-section="academic"
              onClick={handleClick}
              className={activeSection === 'academic' ? 'active' : ''}
            >
              Academic
            </Nav.Link>
            <Nav.Link 
              data-section="ai"
              onClick={handleClick}
              className={activeSection === 'ai' ? 'active' : ''}
            >
              AI Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;