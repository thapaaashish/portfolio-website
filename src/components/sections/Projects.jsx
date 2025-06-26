import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
  Tag,
  Eye,
  Code,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mobile Restaurant app (YumYard)",
      description:
        "YumYard is a user-friendly restaurant app designed to simplify the dining experience while fostering convenience, community, and culinary exploration. Users can easily browse menus, make table reservations, track orders, and choose from flexible payment options. Personalized recommendations allowing users to discover new favorites. Beyond dining out, YumYard offers a unique Learn to Cook feature, empowering users to expand their culinary skills with recipes, step by step process, and tutorials. Whether exploring new restaurants or cooking at home, YumYard is dedicated to making every culinary adventure enjoyable, enriching, and memorable.",
      shortDescription:
        "A comprehensive restaurant app with dining and cooking features",
      images: [
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1750527589/4a0196a5-b811-4e38-8add-ca05a3c89baa.png",
      ],
      link: "https://www.figma.com/design/eDBRKDzy3ZlNZOe4b3TCdm/%F0%9F%9A%80-YumYard?node-id=2-3&p=f&t=4c646twM1ULWKXGZ-0",
      category: "UI/UX Design",
      status: "Completed",
      technologies: ["Figma", "User Research", "Prototyping"],
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Usability testing",
        "Iterative design process",
      ],
      highlights: [
        "🎨 Modern UI Design",
        "📱 Mobile-First Approach",
        "🔄 Interactive Prototypes",
      ],
    },
    {
      id: 2,
      title: "RealEstate Website - Full Stack Development",
      description:
        "A complete full-stack real estate platform with property listings, search functionality, and user accounts. Built with modern web technologies for optimal performance.",
      shortDescription: "Full-stack real estate platform with advanced search",
      images: [
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1750527026/f03c5072-aaca-47e3-8383-b255ae82b7bb.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1750527226/3a5af6f3-98dc-4663-8b7c-92ca521491d9.png",
      ],
      link: "https://property-rental-lemon.vercel.app/",
      category: "Full Stack",
      status: "Live",
      technologies: ["React", "Node.js", "MongoDB", "Vercel"],
      features: [
        "React frontend with responsive design",
        "Node.js backend with MongoDB",
        "User authentication",
        "Advanced search filters",
      ],
      highlights: [
        "⚡ Fast Performance",
        "🔐 Secure Authentication",
        "📊 Advanced Filtering",
      ],
    },
  ];

  const toggleShowMore = () => {
    setVisibleProjects((prev) => (prev === 4 ? projects.length : 4));
  };

  const ProjectCard = ({ project }) => {
    return (
      <div
        className="quicksand relative group cursor-pointer transition-transform duration-300 hover:-translate-y-2 will-change-transform"
        style={{
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
        }}
        onClick={() => setSelectedProject(project)}
      >
        {/* Background */}
        <div className="absolute inset-0 rounded-3xl transition-colors duration-300 bg-gray-50 dark:bg-gray-800 group-hover:bg-blue-50 group-hover:dark:bg-blue-900/30 group-hover:shadow-md group-hover:dark:shadow-gray-800 will-change-[background,box-shadow]" />

        {/* Floating element */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-600 group-hover:bg-blue-400 group-hover:dark:bg-blue-300 group-hover:animate-pulse will-change-[background]" />

        <div className="relative p-8 rounded-3xl">
          {/* Status Badge */}
          <div className="absolute top-6 right-6 z-10">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                project.status === "Live"
                  ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
                  : "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Project Image */}
          <div className="mb-8 overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="relative">
              <div
                className="transition-transform duration-300 group-hover:scale-105 will-change-transform"
                style={{
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 bg-black/50 dark:bg-black/60 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 will-change-opacity"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="text-white dark:text-gray-100 text-center">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Click to view details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tag */}
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight transition-colors duration-300 group-hover:text-blue-600 group-hover:dark:text-blue-400 will-change-[color]">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <span
                key={idx}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full transition-colors duration-300"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 group-hover:bg-blue-500 group-hover:dark:bg-blue-400 group-hover:text-white group-hover:dark:text-gray-100 group-hover:shadow-md will-change-[background,color,box-shadow]">
              <div className="w-4 h-4 bg-current rounded-full opacity-70"></div>
              View Details
            </button>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  const ProjectDetails = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e) => {
        if (e.key === "Escape") handleClose();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalStyle;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);

    const handleClose = () => {
      setIsClosing(true);
      setTimeout(onClose, 300);
    };

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
        animate={{ opacity: isClosing ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 backdrop-blur-sm z-50 overflow-y-auto p-4 md:p-8 bg-black/50 dark:bg-black/60"
      >
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isClosing ? 20 : 0, opacity: isClosing ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="relative bg-gradient-to-r from-blue-600 dark:from-blue-500 to-purple-600 dark:to-purple-500 p-6 md:p-8 text-white dark:text-gray-100">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 dark:bg-gray-200/10 hover:bg-white/20 dark:hover:bg-gray-200/20 transition-colors duration-300"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/20 dark:bg-gray-200/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Live"
                        ? "bg-green-100/20 dark:bg-green-900/20 text-green-100 dark:text-green-300 backdrop-blur-sm"
                        : "bg-blue-100/20 dark:bg-blue-900/20 text-blue-100 dark:text-blue-300 backdrop-blur-sm"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  {project.title}
                </h1>
                <p className="text-lg text-white/90 dark:text-gray-200/90 max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="relative mb-8 md:mb-12">
                <div className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-800 min-h-[300px] flex items-center justify-center">
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
                      className="w-full h-auto max-h-[500px] object-contain"
                    />
                  </AnimatePresence>
                </div>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 p-2 md:p-3 rounded-full shadow-lg transition-colors duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      aria-label="Previous image"
                    >
                      <ChevronLeft
                        size={20}
                        className="text-gray-900 dark:text-gray-100"
                      />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 p-2 md:p-3 rounded-full shadow-lg transition-colors duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                      aria-label="Next image"
                    >
                      <ChevronRight
                        size={20}
                        className="text-gray-900 dark:text-gray-100"
                      />
                    </button>
                  </>
                )}

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
              </div>

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

                  {project.highlights && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                        Project Highlights
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
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
                              ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300"
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
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2.5 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                            >
                              {tech}
                            </span>
                          ))}
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
          </motion.div>
        </div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="quicksand min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-8 h-8 bg-pink-500 dark:bg-pink-400 rounded-full animate-pulse delay-300"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            Loading amazing projects...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="min-h-screen py-16 quicksand"
    >
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > 4 && (
          <div className="text-center">
            <button
              onClick={toggleShowMore}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 transform shadow-lg hover:shadow-xl will-change-[background,transform,box-shadow]"
            >
              {visibleProjects === 4 ? (
                <>
                  <ChevronDown size={20} />
                  Discover More Projects
                </>
              ) : (
                <>
                  <ChevronUp size={20} />
                  Show Less
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
