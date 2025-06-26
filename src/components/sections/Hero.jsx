import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Code,
  Palette,
} from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  // Typewriter effect
  useEffect(() => {
    setIsLoaded(true);

    const typeWriter = () => {
      const currentText = roles[currentRole];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);

          setTimeout(() => {
            setIsTyping(true);
            setDisplayText("");
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
    };

    const timeout = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timeout);
  }, [currentRole]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/thapaaashish",
      color: "hover:bg-gray-900 hover:text-white hover:shadow-gray-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aashish-thapa-b2165a369/",
      color: "hover:bg-blue-600 hover:text-white hover:shadow-blue-500/20",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:taashish510@gmail.com",
      color: "hover:bg-red-500 hover:text-white hover:shadow-red-500/20",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 quicksand">
        {/* Main Content */}
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight quicksand">
            <span className="block text-gray-900 mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent relative">
              Aashish Thapa
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-lg -z-10 animate-pulse" />
            </span>
          </h1>

          {/* Description */}
          <div className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Crafting digital experiences that blend{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                innovation
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>{" "}
            with{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                functionality
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map(({ icon: Icon, label, href, color }, index) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`group relative p-4 bg-white border border-gray-200 rounded-2xl text-gray-600 hover:border-transparent transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-xl ${color} ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                aria-label={label}
              >
                <Icon
                  size={24}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center -mt-6">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Let's Connect
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>

            <button
              onClick={scrollToProjects}
              className="group px-10 py-5 bg-white border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code size={20} />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute -bottom-25 left-1/2 transform -translate-x-1/2">
          <div
            className="flex flex-col items-center group cursor-pointer"
            onClick={scrollToProjects}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full mb-2 relative overflow-hidden group-hover:border-blue-500 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 group-hover:bg-blue-500 transition-colors duration-300 animate-bounce" />
            </div>
            <span className="text-gray-500 text-sm group-hover:text-blue-500 transition-colors duration-300">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
