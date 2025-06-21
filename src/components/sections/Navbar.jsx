import React, { useState } from "react";
import { Menu, X, Download, FileText } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleResumeClick = () => {
    // You can replace this with your actual resume file path
    const resumeUrl = "/resume.pdf"; // or any URL to your resume
    window.open(resumeUrl, "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                <span className="text-white font-bold text-lg tracking-tight">
                  AT
                </span>
              </div>

              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm"></div>

              {/* Floating particles effect */}
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg hover:bg-gray-50 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-6 group-hover:left-1/2 transform -translate-x-1/2"></span>
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="ml-6 pl-6 border-l border-gray-200">
              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md group"
              >
                <FileText
                  size={16}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span>Resume</span>
                <Download
                  size={14}
                  className="opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-200"
                />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Resume Button */}
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              <FileText size={14} />
              <span className="hidden xs:inline">Resume</span>
            </button>

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
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base font-medium transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Resume Button - Full Width */}
            <div className="pt-4 border-t border-gray-100">
              <button
                onClick={() => {
                  handleResumeClick();
                  setIsOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white text-base font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 group"
              >
                <FileText
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
                <span>Download Resume</span>
                <Download
                  size={16}
                  className="opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-200"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
