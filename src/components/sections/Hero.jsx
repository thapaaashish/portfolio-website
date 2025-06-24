import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    <Projects></Projects>
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-ping" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Content */}
          <div className="mb-8">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent leading-tight">
              Hi, I'm{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Aashish Thapa
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards]" />
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
            ].map(({ icon: Icon, label, href }, index) => (
              <a
                key={label}
                href={href}
                className={`p-3 bg-gray-100 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-200 hover:scale-110 transform transition-all duration-300 group shadow-sm hover:shadow-md ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
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
              onClick={scrollToProjects}
              className={`group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 hover:scale-105 transform hover:shadow-xl hover:shadow-blue-500/25 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.2s" }}
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </button>

            <button
              className={`px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 transform shadow-sm hover:shadow-md ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.3s" }}
            >
              View My Work
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-15 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "1.5s" }}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-gray-500 text-sm mb-2">Scroll down</span>
            <ChevronDown
              className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
              size={28}
            />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-700 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes scaleX {
          to {
            transform: scaleX(1);
          }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
