import { useState, useEffect } from 'react';

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'professional', 'personal', 'academic', 'ai'];
      const scrollPosition = window.scrollY + 100; // Offset for header
      const viewportHeight = window.innerHeight;

      // Find the section that is most in view or closest to being in view
      let bestSection = '';
      let bestScore = -Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionBottom = offsetTop + offsetHeight;
          
          // Calculate the distance from the top of the viewport to the section
          const distanceFromTop = offsetTop - scrollPosition;
          
          // If the section is in view, calculate its visibility
          if (distanceFromTop <= viewportHeight && distanceFromTop > -offsetHeight) {
            const visibleHeight = Math.min(
              viewportHeight,
              sectionBottom - scrollPosition
            ) - Math.max(0, distanceFromTop);
            
            const visibility = visibleHeight / offsetHeight;
            const score = visibility;
            
            if (score > bestScore) {
              bestScore = score;
              bestSection = section;
            }
          } 
          // If the section is below the viewport, calculate how close it is
          else if (distanceFromTop > 0) {
            const score = -distanceFromTop / viewportHeight;
            if (score > bestScore) {
              bestScore = score;
              bestSection = section;
            }
          }
        }
      }

      if (bestSection) {
        setActiveSection(bestSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
};

export default useActiveSection; 