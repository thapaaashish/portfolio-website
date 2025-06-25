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

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;

    return (
      <div
        className={`relative group cursor-pointer transition-all duration-500 transform hover:-translate-y-2 ${
          index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
        }`}
        onClick={() => setSelectedProject(project)}
        onMouseEnter={() => setHoveredProject(project.id)}
        onMouseLeave={() => setHoveredProject(null)}
      >
        {/* Background gradient that shifts on hover */}
        <div
          className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-2xl"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        />

        {/* Floating elements */}
        <div
          className={`absolute -top-2 -right-2 w-6 h-6 rounded-full transition-all duration-500 ${
            isHovered
              ? "bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
              : "bg-gray-200"
          }`}
        />

        <div className="relative p-8 rounded-3xl backdrop-blur-sm">
          {/* Status Badge */}
          <div className="absolute top-6 right-6 z-10">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === "Live"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Project Image */}
          <div className="mb-8 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative">
              <img
                src={project.images[0]}
                alt={project.title}
                className={`w-full h-64 object-cover transition-all duration-700 ${
                  isHovered ? "scale-110 blur-sm" : "scale-100"
                }`}
              />

              {/* Overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-center justify-center transition-all duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-white text-center">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Click to view details</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tag */}
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 font-medium">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-gray-600 mb-6 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <span
                key={idx}
                className="text-xs bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isHovered
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <div className="w-4 h-4 bg-current rounded-full opacity-70"></div>
              View Details
            </button>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:scale-105 transform"
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

    useEffect(() => {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }, []);

    const nextImage = () => {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          {/* Modal */}
          <div className=" rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === "Live"
                        ? "bg-green-400/20 text-green-100"
                        : "bg-blue-400/20 text-blue-100"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-white/90 max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>
            </div>

            <div className="p-8">
              {/* Images Gallery */}
              <div className="relative mb-12">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[500px] object-contain bg-gray-50"
                  />
                </div>

                {/* Navigation */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Indicators */}
                {project.images.length > 1 && (
                  <div className="flex justify-center mt-6 gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      About This Project
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Project Highlights
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Project Details
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 text-sm mb-1">Category</p>
                        <p className="text-gray-900 font-medium">
                          {project.category}
                        </p>
                      </div>

                      <div>
                        <p className="text-gray-600 text-sm mb-1">Status</p>
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === "Live"
                              ? "bg-green-100 text-green-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <div>
                        <p className="text-gray-600 text-sm mb-2">
                          Technologies
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white text-gray-700 rounded-lg text-xs font-medium border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <a
                          href={project.link}
                          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:scale-105 transform"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          View Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse delay-150"></div>
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse delay-300"></div>
          </div>
          <p className="text-gray-600 font-medium">
            Loading amazing projects...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="min-h-screen py-16 "
    >
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 4 && (
          <div className="text-center">
            <button
              onClick={toggleShowMore}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 rounded-full font-medium transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
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
