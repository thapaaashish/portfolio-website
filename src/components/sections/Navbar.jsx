import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Text-Only Animated Logo Component
const Logo = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main text with multiple animation layers */}
      <div className="relative">
        {/* Background glow text (for glow effect) */}
        <span className="absolute inset-0 text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-0 group-hover:opacity-70 transition-all duration-500 blur-sm scale-110">
          AT
        </span>

        {/* Main visible text */}
        <span className="relative text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 transition-all duration-500 transform group-hover:scale-105">
          AT
        </span>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-clip-text text-transparent animate-pulse">
          <span className="text-2xl font-bold tracking-tight">AT</span>
        </div>
      </div>

      {/* Floating particles around text */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right particle */}
        <div className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>

        {/* Bottom left particle */}
        <div className="absolute -bottom-1 -left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>

        {/* Side particles */}
        <div className="absolute top-1/2 -right-3 w-0.5 h-0.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"></div>
        <div className="absolute top-1/2 -left-3 w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400 group-hover:animate-pulse"></div>
      </div>

      {/* Underline animation */}
      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full"></div>

      {/* Letter individual animations */}
      <style jsx>{`
        @keyframes letterBounce1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes letterBounce2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        .group:hover .letter-1 {
          animation: letterBounce1 0.6s ease-in-out;
        }

        .group:hover .letter-2 {
          animation: letterBounce2 0.6s ease-in-out 0.1s;
        }
      `}</style>

      {/* Individual letter animations (overlay) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-2xl font-bold tracking-tight text-transparent">
          <span className="letter-1 inline-block">A</span>
          <span className="letter-2 inline-block">T</span>
        </span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", onClick: () => scrollToSection("home") },
    { name: "About", onClick: () => scrollToSection("about") },
    { name: "Projects", onClick: () => scrollToSection("projects") },
    { name: "Contact", onClick: () => scrollToSection("contact") },
    { name: "Resume", onClick: () => scrollToSection("resume") },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Text-Only Animated Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  onClick={item.onClick}
                  className="relative text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 group cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-6 group-hover:left-1/2 transform -translate-x-1/2"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen
                      ? "opacity-0 rotate-90 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-75"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                onClick={item.onClick}
                className="cursor-pointer block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-medium transition-all duration-200 transform hover:translate-x-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
