import React from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Navbar from "./components/sections/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import BackgroundParticles from "./components/BackgroundParticles";
import Footer from "./components/sections/Footer";
import { ThemeProvider } from "./components/theme";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <BackgroundParticles>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </BackgroundParticles>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
