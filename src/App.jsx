import React from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import BackgroundParticles from "./components/BackgroundParticles";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100">
      <BackgroundParticles>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </BackgroundParticles>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Aashish Thapa.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
