import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import { professionalProjects, personalProjects, academicProjects, aiProjects } from './data/projects';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <main id="projects">
                <ProjectSection 
                  title="Professional Projects" 
                  projects={professionalProjects} 
                  sectionId="professional"
                />
                <ProjectSection 
                  title="Personal Projects" 
                  projects={personalProjects} 
                  sectionId="personal"
                />
                <ProjectSection 
                  title="Academic Projects" 
                  projects={academicProjects} 
                  sectionId="academic"
                />
                <ProjectSection 
                  title="AI Projects" 
                  projects={aiProjects} 
                  sectionId="ai"
                />
              </main>
            </>
          } />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;