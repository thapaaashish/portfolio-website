import React, { useState, useEffect } from "react";
import { DiMongodb } from "react-icons/di";

import javascriptIcon from "../../Icons/icons8-js.svg";
import reactIcon from "../../Icons/icons8-react.svg";
import nodejsIcon from "../../Icons/icons8-node-js.svg";
import pythonIcon from "../../Icons/icons8-python.svg";
import mongodbIcon from "../../Icons/mongodb-icon.svg";
import awsIcon from "../../Icons/icons8-aws.svg";
import githubIcon from "../../Icons/icons8-github.svg";
import tailwindcssIcon from "../../Icons/icons8-tailwind-css.svg";
import firebaseIcon from "../../Icons/icons8-firebase.svg";
import figmaIcon from "../../Icons/icons8-figma.svg";
import expressjsIcon from "../../Icons/icons8-express-js.svg";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "JavaScript", icon: javascriptIcon },
    { name: "React", icon: reactIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Python", icon: pythonIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "AWS", icon: awsIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "Tailwind CSS", icon: tailwindcssIcon },
    { name: "Express.js", icon: expressjsIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "Figma", icon: figmaIcon },
  ];

  const orbitingIcons = [
    {
      icon: javascriptIcon,
      name: "JavaScript",
      bg: "bg-yellow-500/90 dark:bg-yellow-400/90",
      angle: 0,
      radius: 100,
      duration: 8,
    },
    {
      icon: reactIcon,
      name: "React",
      bg: "bg-blue-500/90 dark:bg-blue-400/90",
      angle: 72,
      radius: 110,
      duration: 9,
    },
    {
      icon: nodejsIcon,
      name: "Node.js",
      bg: "bg-green-500/90 dark:bg-green-400/90",
      angle: 144,
      radius: 105,
      duration: 10,
    },
    {
      icon: mongodbIcon,
      name: "MongoDB",
      bg: "bg-green-600/90 dark:bg-green-500/90",
      angle: 216,
      radius: 115,
      duration: 8.5,
    },
    {
      icon: tailwindcssIcon,
      name: "Tailwind CSS",
      bg: "bg-teal-500/90 dark:bg-teal-400/90",
      angle: 288,
      radius: 108,
      duration: 9.5,
    },
  ];

  const floatingIcons = [
    {
      icon: javascriptIcon,
      name: "JavaScript",
      position: { left: "-left-8", top: "top-16" },
      delay: "delay-200",
      particles: [
        {
          size: "w-2 h-2",
          color: "bg-blue-400/60 dark:bg-blue-300/60",
          animation: "animate-float-1",
          position: { top: "10%", left: "10%" },
        },
        {
          size: "w-1.5 h-1.5",
          color: "bg-purple-500/60 dark:bg-purple-400/60",
          animation: "animate-float-2",
          position: { top: "80%", right: "15%" },
        },
      ],
    },
    {
      icon: reactIcon,
      name: "React",
      position: { left: "-right-8", top: "bottom-20" },
      delay: "delay-300",
      animationDelay: "0.5s",
      particles: [
        {
          size: "w-1 h-1",
          color: "bg-pink-500/60 dark:bg-pink-400/60",
          animation: "animate-float-3",
          position: { top: "20%", right: "10%" },
        },
        {
          size: "w-1.5 h-1.5",
          color: "bg-indigo-400/60 dark:bg-indigo-300/60",
          animation: "animate-float-4",
          position: { bottom: "15%", left: "20%" },
        },
      ],
    },
    {
      icon: tailwindcssIcon,
      name: "Tailwind CSS",
      position: { left: "-left-6", top: "bottom-12" },
      delay: "delay-400",
      animationDelay: "1s",
      particles: [
        {
          size: "w-2 h-2",
          color: "bg-teal-400/60 dark:bg-teal-300/60",
          animation: "animate-float-1",
          position: { top: "15%", left: "15%" },
        },
        {
          size: "w-1 h-1",
          color: "bg-cyan-500/60 dark:bg-cyan-400/60",
          animation: "animate-float-2",
          position: { top: "70%", right: "20%" },
        },
      ],
    },
    {
      icon: figmaIcon,
      name: "Figma",
      position: { left: "-right-6", top: "top-12" },
      delay: "delay-500",
      animationDelay: "1.5s",
      particles: [
        {
          size: "w-1.5 h-1.5",
          color: "bg-pink-400/60 dark:bg-pink-300/60",
          animation: "animate-float-3",
          position: { top: "25%", right: "15%" },
        },
        {
          size: "w-2 h-2",
          color: "bg-purple-400/60 dark:bg-purple-300/60",
          animation: "animate-float-4",
          position: { bottom: "20%", left: "10%" },
        },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 relative quicksand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
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
              <div className="p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  Hi, I'm{" "}
                  <span className="font-semibold text-gray-900 dark:text-gray-100">
                    Aashish Thapa
                  </span>
                  , a passionate BSc (Hons) Computer Science student who loves
                  crafting digital experiences. I specialize in full-stack
                  development using the MERN stack, creating responsive and
                  user-friendly web applications that solve real-world problems.
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                    Available for freelance
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 dark:from-blue-300/20 via-purple-500/20 dark:via-purple-400/20 to-pink-500/20 dark:to-pink-400/20 animate-spin-slow"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500/20 dark:from-pink-400/20 via-blue-400/20 dark:via-blue-300/20 to-purple-500/20 dark:to-purple-400/20 animate-spin-reverse"></div>
              </div>

              {/* Main Profile Container */}
              <div className="relative w-80 h-80 bg-gradient-to-br from-gray-50 dark:from-gray-800 via-white dark:via-gray-900 to-gray-100 dark:to-gray-800 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
                {/* Floating Particles for Profile */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div
                    className="absolute w-2 h-2 bg-blue-400/60 dark:bg-blue-300/60 rounded-full animate-float-1"
                    style={{ top: "20%", left: "15%" }}
                  ></div>
                  <div
                    className="absolute w-1.5 h-1.5 bg-purple-500/60 dark:bg-purple-400/60 rounded-full animate-float-2"
                    style={{ top: "70%", right: "20%" }}
                  ></div>
                  <div
                    className="absolute w-1 h-1 bg-pink-500/60 dark:bg-pink-400/60 rounded-full animate-float-3"
                    style={{ top: "40%", right: "10%" }}
                  ></div>
                  <div
                    className="absolute w-1.5 h-1.5 bg-indigo-400/60 dark:bg-indigo-300/60 rounded-full animate-float-4"
                    style={{ bottom: "25%", left: "25%" }}
                  ></div>
                </div>

                {/* Profile Image */}
                <div className="relative z-10">
                  <img
                    src="https://res.cloudinary.com/dwhsjkzrn/image/upload/v1742663452/HomeFinder/profile_picture/users/IMG_7537_bxcj2o.jpg"
                    alt="Aashish Thapa - Full Stack Developer"
                    className="w-72 h-72 rounded-full object-cover ring-4 ring-white/80 dark:ring-gray-200/80 shadow-lg group-hover:ring-6 group-hover:ring-blue-100/50 dark:group-hover:ring-blue-200/50 transition-all duration-500"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 dark:via-gray-200/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Orbiting SVG Icons */}
                {orbitingIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="absolute w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 orbit-icon"
                    style={{
                      transform: `rotate(${icon.angle}deg) translateX(${icon.radius}px) rotate(-${icon.angle}deg)`,
                      animation: `orbit ${icon.duration}s linear infinite`,
                      transformOrigin: "center",
                      left: "50%",
                      top: "50%",
                      marginLeft: "-24px",
                      marginTop: "-24px",
                    }}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className={`${
                        icon.bg
                      } w-full h-full rounded-lg flex items-center justify-center transition-all duration-300 ${
                        hoveredSkill === index ? "scale-125 z-10 shadow-xl" : ""
                      }`}
                    >
                      <img
                        src={icon.icon}
                        alt={icon.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  </div>
                ))}

                {/* Floating SVG Icons with Particles */}
                {floatingIcons.map((icon, index) => (
                  <div
                    key={index}
                    className={`absolute ${icon.position.left} ${icon.position.top} opacity-0 group-hover:opacity-100 transition-all duration-700 ${icon.delay}`}
                    onMouseEnter={() => setHoveredSkill(icon.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div
                      className="relative w-8 h-8 rounded-lg flex items-center justify-center shadow-lg animate-bounce-slow"
                      style={{ animationDelay: icon.animationDelay || "0s" }}
                    >
                      {/* Particles for Floating Icon */}
                      <div className="absolute inset-0">
                        {icon.particles.map((particle, pIndex) => (
                          <div
                            key={pIndex}
                            className={`absolute ${particle.size} ${particle.color} rounded-full ${particle.animation}`}
                            style={particle.position}
                          ></div>
                        ))}
                      </div>
                      <img
                        src={icon.icon}
                        alt={icon.name}
                        className={`w-6 h-6 object-contain transition-transform duration-300 ${
                          hoveredSkill === icon.name ? "scale-125" : ""
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          className={`transition-all duration-1000 ease-out delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center justify-center gap-2">
              <DiMongodb className="w-8 h-8 text-green-600 dark:text-green-500" />
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
                    className={`relative p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer flex items-center gap-3 h-16 ${
                      isHovered ? "ring-2 ring-gray-300 dark:ring-gray-600" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 bg-gray-100 dark:bg-gray-700 ${
                        isHovered
                          ? "bg-gray-200 dark:bg-gray-600 scale-105"
                          : ""
                      }`}
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 text-sm group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors duration-200">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
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

        .orbit-icon {
          will-change: transform;
        }

        .orbit-icon:hover {
          animation-play-state: paused;
          transform: scale(1.2);
          z-index: 10;
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
        }

        .dark .orbit-icon:hover {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
        }
      `}</style>
    </section>
  );
};

export default About;
