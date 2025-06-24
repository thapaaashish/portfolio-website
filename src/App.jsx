import "./index.css";

import React from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import SplineScene from "./components/Spline";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Aashish Thapa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
