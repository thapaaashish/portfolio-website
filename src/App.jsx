import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import BackgroundParticles from "./components/BackgroundParticles";
import Footer from "./components/sections/Footer";
import { ThemeProvider } from "./components/theme";
import ProjectDetails from "./components/sections/ProjectDetails";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const pendingScrollId = useRef(null);

  const handleNavClick = (id) => {
    setSelectedProject(null);
    pendingScrollId.current = id;
  };

  useEffect(() => {
    if (selectedProject === null && pendingScrollId.current) {
      // Wait for the DOM to fully render before scrolling
      const timeout = setTimeout(() => {
        const element = document.getElementById(pendingScrollId.current);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        pendingScrollId.current = null; // Clear after scroll
      }, 200); // Slightly longer delay ensures content is rendered

      return () => clearTimeout(timeout);
    }
  }, [selectedProject]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <BackgroundParticles>
          <Navbar
            setSelectedProject={setSelectedProject}
            handleNavClick={handleNavClick} // Pass the new handler
          />
          <main>
            {selectedProject ? (
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            ) : (
              <>
                <Hero />
                <About />
                <Projects setSelectedProject={setSelectedProject} />
                <Contact />
              </>
            )}
          </main>
        </BackgroundParticles>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
