import React, { useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible] = useState(true); // Removed animation state management

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="opacity-100 translate-y-0">
          {" "}
          {/* Removed animation classes */}
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Aashish Thapa
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Full Stack Developer passionate about creating{" "}
              <span className="text-blue-600 font-semibold">beautiful</span>,{" "}
              <span className="text-indigo-600 font-semibold">functional</span>{" "}
              web experiences that make a difference
            </p>
          </div>
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="p-3 bg-gray-100 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-200 hover:scale-110 transform transition-all duration-300 group shadow-sm hover:shadow-md"
                aria-label={label}
              >
                <Icon
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 transform hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>

            <button
              onClick={scrollToProjects}
              className="px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 transform shadow-sm hover:shadow-md"
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-gray-500 text-sm mb-2">Scroll down</span>
            <ChevronDown
              className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              size={28}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
