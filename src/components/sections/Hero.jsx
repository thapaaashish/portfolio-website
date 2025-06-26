import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      color:
        "hover:bg-gray-900 dark:hover:bg-gray-700 hover:text-white dark:hover:text-gray-100 hover:shadow-gray-500/20 dark:hover:shadow-gray-400/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aashish-thapa-b2165a369/",
      color:
        "hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-100 hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:taashish510@gmail.com",
      color:
        "hover:bg-red-500 dark:hover:bg-red-400 hover:text-white dark:hover:text-gray-100 hover:shadow-red-500/20 dark:hover:shadow-red-400/20",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      <div className="max-w-7xl mx-auto text-center relative z-10 quicksand">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight quicksand">
            <span className="block text-gray-900 dark:text-gray-100 mb-2">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 bg-clip-text text-transparent relative">
              Aashish Thapa
            </span>
          </h1>

          <div className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Crafting digital experiences that blend{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 bg-clip-text text-transparent font-semibold">
              innovation
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-transparent font-semibold">
              functionality
            </span>
            <div className="mt-4">Kathmandu, Nepal</div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map(({ icon: Icon, label, href, color }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl text-gray-600 dark:text-gray-300 hover:border-transparent transform hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-xl ${color} ${
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
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center -mt-6">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white dark:text-gray-100 font-bold rounded-2xl hover:from-blue-500 hover:to-indigo-500 dark:hover:from-blue-400 dark:hover:to-indigo-400 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Let's Connect
              </span>
            </button>

            <button
              onClick={scrollToProjects}
              className="group px-10 py-5 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Code size={20} />
                View Projects
              </span>
            </button>
          </div>
        </div>

        <div className="absolute -bottom-25 left-1/2 transform -translate-x-1/2">
          <div
            className="flex flex-col items-center group cursor-pointer"
            onClick={scrollToProjects}
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full mb-2 relative overflow-hidden group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-300">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300 animate-bounce" />
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-sm group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
