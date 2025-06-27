import React, { useState, useEffect } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, Code } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import figmaIcon from "../../Icons/icons8-figma.svg";
import reactIcon from "../../Icons/icons8-react.svg";
import nodejsIcon from "../../Icons/icons8-node-js.svg";
import mongodbIcon from "../../Icons/mongodb-icon.svg";
import expressjsIcon from "../../Icons/icons8-express-js.svg";

const techIconMap = {
  Figma: figmaIcon,
  React: reactIcon,
  "Node.js": nodejsIcon,
  MongoDB: mongodbIcon,
  Vercel: null,
  "Express.js": expressjsIcon,
};

const ProjectDetails = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const isMobileDesign = project.category === "Design";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const nextImage = () => {
    setDirection("right");
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setDirection("left");
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setDirection(index > currentImageIndex ? "right" : "left");
    setCurrentImageIndex(index);
  };

  const imageVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "right" ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen py-16 quicksand"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-6 md:p-8 text-gray-900 dark:text-gray-100">
          <div className="max-w-4xl mt-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 dark:bg-gray-200/20 rounded-full text-sm font-medium backdrop-blur-sm">
                {project.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === "Live"
                    ? "bg-green-200/50 dark:bg-green-800/50 text-green-900 dark:text-green-200 backdrop-blur-sm"
                    : "bg-blue-100/20 dark:bg-blue-900/20 text-blue-500 dark:text-blue-300 backdrop-blur-sm"
                }`}
              >
                {project.status}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {project.title}
            </h1>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div
            className={`relative mb-8 md:mb-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${
              isMobileDesign ? "p-8" : ""
            }`}
            style={{ minHeight: "500px" }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={currentImageIndex}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className={`max-h-[500px] object-contain ${
                  isMobileDesign ? "max-w-[300px]" : "w-full"
                }`}
              />
            </AnimatePresence>
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 md:left-4 top-50% -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 p-2 md:p-3 rounded-full shadow-lg transition-colors duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  style={{ top: "50%" }}
                  aria-label="Previous image"
                >
                  <ChevronLeft
                    size={20}
                    className="text-gray-900 dark:text-gray-100"
                  />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 md:right-4 top-50% -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 p-2 md:p-3 rounded-full shadow-lg transition-colors duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  style={{ top: "50%" }}
                  aria-label="Next image"
                >
                  <ChevronRight
                    size={20}
                    className="text-gray-900 dark:text-gray-100"
                  />
                </button>
              </>
            )}
          </div>
          {project.images.length > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${
                    currentImageIndex === index
                      ? "bg-blue-500 dark:bg-blue-400 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  About This Project
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-500" />
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl space-y-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Project Details
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Category
                    </p>
                    <p className="text-gray-900 dark:text-gray-100 font-medium">
                      {project.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Status
                    </p>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "Live"
                          ? "bg-green-200/50 dark:bg-green-800/50 text-green-900 dark:text-green-200"
                          : "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => {
                        const iconSrc = techIconMap[tech];
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-1 px-2.5 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                          >
                            {iconSrc ? (
                              <img
                                src={iconSrc}
                                alt={tech}
                                className="w-6 h-6 object-contain"
                              />
                            ) : null}
                            <span>{tech}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {project.link && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <a
                        href={project.link}
                        className="flex items-center justify-center gap-2 w-full bg-blue-400 dark:bg-blue-500 text-white dark:text-gray-100 font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 hover:shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        View Live Demo
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
