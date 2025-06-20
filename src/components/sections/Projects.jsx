import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "RealEstate Website",
      description:
        "A Real Estate website with advanced search, virtual tours, and AI-powered property matching.",
      images: [
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      live: "https://property-rental-lemon.vercel.app/",
      category: "Full Stack",
      year: "2024",
    },
    {
      id: 2,
      title: "Quantum Portfolio",
      description:
        "3D portfolio experience with interactive WebGL environments and immersive storytelling.",
      images: [
        "https://images.pexels.com/photos/159591/science-fiction-paranormal-lightning-ball-159591.jpeg",
        "https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg",
      ],
      technologies: ["Three.js", "React", "WebGL"],
      live: "#",
      category: "3D/WebGL",
      year: "2024",
    },
    {
      id: 3,
      title: "EcoTrade Platform",
      description:
        "Sustainable e-commerce platform with supply chain transparency and carbon tracking.",
      images: [
        "https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg",
        "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg",
      ],
      technologies: ["Next.js", "GraphQL", "Node.js"],
      live: "#",
      category: "E-commerce",
      year: "2024",
    },
    {
      id: 4,
      title: "Neural Art Generator",
      description:
        "AI-powered creative platform using neural networks to generate unique digital art.",
      images: [
        "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg",
        "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
      ],
      technologies: ["Python", "TensorFlow", "React"],
      live: "#",
      category: "AI/ML",
      year: "2024",
    },
  ];

  const toggleShowMore = () => {
    setVisibleProjects((prev) => (prev === 3 ? projects.length : 3));
  };

  const ImageCarousel = ({ images, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
      if (images.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
      }
      return () => clearInterval(intervalRef.current);
    }, [images.length]);

    const nextImage = () => {
      clearInterval(intervalRef.current);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
      clearInterval(intervalRef.current);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div className="relative group overflow-hidden h-full">
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={image}
                alt={`${projectTitle} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition"
              >
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => {
    const isLeftAligned = index % 2 === 0;

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-full ${isLeftAligned ? "pr-0 lg:pr-8" : "pl-0 lg:pl-8"}`}
      >
        <div
          className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-row ${
            isLeftAligned ? "" : "lg:flex-row-reverse"
          }`}
        >
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <ImageCarousel
              images={project.images}
              projectTitle={project.title}
            />
          </div>

          <div className="lg:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>

              <div className="mb-4">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 + idx * 0.05 }}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={project.live}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition w-fit"
            >
              <ExternalLink size={16} />
              View Live
            </a>
          </div>
        </div>
      </motion.div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected work showcasing my expertise across different domains
          </p>
        </div>

        <div className="space-y-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={toggleShowMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              {visibleProjects === 3 ? (
                <>
                  <ChevronDown size={18} />
                  Show More Projects
                </>
              ) : (
                <>
                  <ChevronUp size={18} />
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
