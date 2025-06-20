import "./index.css";

import React from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

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
