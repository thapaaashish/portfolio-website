import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
} from "lucide-react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Mobile Restaurant app (YumYard)",
      description:
        "YumYard is a user-friendly restaurant app designed to simplify the dining experience while fostering convenience, community, and culinary exploration. Users can easily browse menus, make table reservations, track orders, and choose from flexible payment options. Personalized recommendations allowing users to discover new favorites. Beyond dining out, YumYard offers a unique Learn to Cook feature, empowering users to expand their culinary skills with recipes, step by step process, and tutorials. Whether exploring new restaurants or cooking at home, YumYard is dedicated to making every culinary adventure enjoyable, enriching, and memorable.",
      images: [
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1750527589/4a0196a5-b811-4e38-8add-ca05a3c89baa.png",
      ],
      link: "https://www.figma.com/design/eDBRKDzy3ZlNZOe4b3TCdm/%F0%9F%9A%80-YumYard?node-id=2-3&p=f&t=4c646twM1ULWKXGZ-0",
      category: "UI/UX Design",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Usability testing",
        "Iterative design process",
      ],
    },
    {
      id: 2,
      title: "RealEstate Website - Full Stack Development",
      description:
        "A complete full-stack real estate platform with property listings, search functionality, and user accounts. Built with modern web technologies for optimal performance.",
      images: [
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1750527026/f03c5072-aaca-47e3-8383-b255ae82b7bb.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1750527226/3a5af6f3-98dc-4663-8b7c-92ca521491d9.png",
      ],
      link: "https://property-rental-lemon.vercel.app/",
      category: "Full Stack",
      features: [
        "React frontend with responsive design",
        "Node.js backend with MongoDB",
        "User authentication",
        "Advanced search filters",
      ],
    },
  ];

  const toggleShowMore = () => {
    setVisibleProjects((prev) => (prev === 4 ? projects.length : 4));
  };

  const ProjectCard = ({ project }) => {
    return (
      <div
        className="bg-gray-100 rounded-3xl p-8 hover:bg-gray-200 transition-colors duration-300 group cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        {/* Project Image */}
        <div className="mb-8 overflow-hidden rounded-2xl bg-white">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-tight">
          {project.title}
        </h3>

        {/* Live Demo Link */}
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900 transition-colors duration-200 border-b border-gray-400 hover:border-gray-600 pb-1"
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
          <ExternalLink size={16} />
        </a>
      </div>
    );
  };

  const ProjectDetails = ({ project, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Prevent background scrolling when modal is open
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
      <div className="fixed inset-0 backdrop-blur-2xl bg-opacity-90 z-50 overflow-y-auto p-6 mt-12">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Project Content */}
          <div className="p-8">
            {/* Images Gallery */}
            <div className="relative mb-12">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
              />

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              <div className="flex justify-center mt-4 gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentImageIndex === index
                        ? "bg-gray-900"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-lg mb-8">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-100 p-6 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Project Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600">Category</p>
                      <p className="text-gray-900 font-medium">
                        {project.category}
                      </p>
                    </div>

                    <div>
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-16">
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Selected work showcasing my expertise across different domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {projects.length > 4 && (
          <div className="text-center">
            <button
              onClick={toggleShowMore}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-colors duration-200"
            >
              {visibleProjects === 4 ? (
                <>
                  <ChevronDown size={20} />
                  Show More Projects
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
