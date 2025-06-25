import React, { useState, useEffect } from "react";
import { DiMongodb } from "react-icons/di";

import javascriptIcon from "../../icons/icons8-js.svg";
import reactIcon from "../../icons/icons8-react.svg";
import nodejsIcon from "../../icons/icons8-node-js.svg";
import pythonIcon from "../../icons/icons8-python.svg";
import mongodbIcon from "../../icons/mongodb-icon.svg";
import awsIcon from "../../icons/icons8-aws.svg";
import githubIcon from "../../icons/icons8-github.svg";
import tailwindcssIcon from "../../icons/icons8-tailwind-css.svg";
import firebaseIcon from "../../icons/icons8-firebase.svg";
import figmaIcon from "../../icons/icons8-figma.svg";
import expressjsIcon from "../../icons/icons8-express-js.svg";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "JavaScript", icon: javascriptIcon }, // JavaScript yellow
    { name: "React", icon: reactIcon }, // React blue
    { name: "Node.js", icon: nodejsIcon }, // Node.js green
    { name: "Python", icon: pythonIcon }, // Python blue
    { name: "MongoDB", icon: mongodbIcon }, // MongoDB green
    { name: "AWS", icon: awsIcon }, // AWS orange
    { name: "GitHub", icon: githubIcon }, // Git orange
    { name: "Tailwind CSS", icon: tailwindcssIcon }, // Tailwind teal
    { name: "Express.js", icon: expressjsIcon }, // Express.js gray (Node-based)
    { name: "Firebase", icon: firebaseIcon }, // Firebase yellow
    { name: "Figma", icon: figmaIcon }, // Figma pink
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="p-8  rounded-3xl shadow-lg border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Hi, I'm{" "}
                  <span className="font-semibold text-gray-900">
                    Aashish Thapa
                  </span>
                  , a passionate BSc (Hons) Computer Science student who loves
                  crafting digital experiences. I specialize in full-stack
                  development using the MERN stack, creating responsive and
                  user-friendly web applications that solve real-world problems.
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    Available for freelance
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Based in Nepal
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`order-1 lg:order-2 flex justify-center transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative group">
              {/* Animated Background Rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500/20 via-blue-400/20 to-purple-500/20 animate-spin-reverse"></div>
              </div>

              {/* Main Profile Container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-50 via-white to-gray-100 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 backdrop-blur-sm border border-white/20">
                {/* Floating Particles */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div
                    className="absolute w-2 h-2 bg-blue-400/60 rounded-full animate-float-1"
                    style={{ top: "20%", left: "15%" }}
                  ></div>
                  <div
                    className="absolute w-1.5 h-1.5 bg-purple-500/60 rounded-full animate-float-2"
                    style={{ top: "70%", right: "20%" }}
                  ></div>
                  <div
                    className="absolute w-1 h-1 bg-pink-500/60 rounded-full animate-float-3"
                    style={{ top: "40%", right: "10%" }}
                  ></div>
                  <div
                    className="absolute w-1.5 h-1.5 bg-indigo-400/60 rounded-full animate-float-4"
                    style={{ bottom: "25%", left: "25%" }}
                  ></div>
                </div>

                {/* Profile Image */}
                <div className="relative z-10">
                  <img
                    src="https://res.cloudinary.com/dwhsjkzrn/image/upload/v1742663452/HomeFinder/profile_picture/users/IMG_7537_bxcj2o.jpg"
                    alt="Aashish Thapa - Full Stack Developer"
                    className="w-72 h-72 rounded-full object-cover ring-4 ring-white/80 shadow-lg group-hover:ring-6 group-hover:ring-blue-100/50 transition-all duration-500"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -left-8 top-16 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
                <div className="w-8 h-8 bg-blue-500/90 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce-slow">
                  JS
                </div>
              </div>

              <div className="absolute -right-8 bottom-20 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
                <div
                  className="w-8 h-8 bg-purple-500/90 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce-slow"
                  style={{ animationDelay: "0.5s" }}
                >
                  ⚛️
                </div>
              </div>

              <div className="absolute -left-6 bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-400">
                <div
                  className="w-8 h-8 bg-green-500/90 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-lg animate-bounce-slow"
                  style={{ animationDelay: "1s" }}
                >
                  💻
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes spin-slow {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes spin-reverse {
              from {
                transform: rotate(360deg);
              }
              to {
                transform: rotate(0deg);
              }
            }

            @keyframes float-1 {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-20px) rotate(180deg);
              }
            }

            @keyframes float-2 {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-15px) rotate(-180deg);
              }
            }

            @keyframes float-3 {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-25px) rotate(180deg);
              }
            }

            @keyframes float-4 {
              0%,
              100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-18px) rotate(-180deg);
              }
            }

            @keyframes bounce-slow {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            .animate-spin-slow {
              animation: spin-slow 20s linear infinite;
            }

            .animate-spin-reverse {
              animation: spin-reverse 15s linear infinite;
            }

            .animate-float-1 {
              animation: float-1 6s ease-in-out infinite;
            }

            .animate-float-2 {
              animation: float-2 8s ease-in-out infinite;
            }

            .animate-float-3 {
              animation: float-3 7s ease-in-out infinite;
            }

            .animate-float-4 {
              animation: float-4 9s ease-in-out infinite;
            }

            .animate-bounce-slow {
              animation: bounce-slow 2s ease-in-out infinite;
            }
          `}</style>
        </div>

        {/* Skills Section */}
        <div
          className={`transition-all duration-1000 ease-out delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <javascriptIcon className="w-8 h-8" />
              Skills & Technologies
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 sm:px-0">
            {skills.map((skill, index) => {
              const isHovered = hoveredSkill === index;

              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className={`relative p-4 bg-white rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer flex items-center gap-3 h-16 ${
                      isHovered ? "ring-2 ring-gray-300" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gray-100 ${
                        isHovered ? "bg-gray-200 scale-105" : ""
                      }`}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <h4 className="font-medium text-gray-700 text-sm group-hover:text-gray-600 transition-colors duration-200">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
