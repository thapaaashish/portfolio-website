import React, { useState, useEffect } from "react";
import { ExternalLink, ChevronDown, ChevronUp, Tag, Eye } from "lucide-react";
import { motion } from "framer-motion";

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

const Projects = ({ setSelectedProject }) => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "RealEstate Website - Full Stack Development",
      description:
        "A complete full-stack real estate platform with property listings, search functionality, and user accounts. Built with modern web technologies for optimal performance.",
      images: [
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1750527026/f03c5072-aaca-47e3-8383-b255ae82b7bb.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751013985/Screenshot_2025-06-27_143035_wqlpxi.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751014042/Screenshot_2025-06-27_143153_qa3luf.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751014227/Screenshot_2025-06-27_143307_wtifrb.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751014228/Screenshot_2025-06-27_143437_zzelbc.png",
      ],
      link: "https://property-rental-lemon.vercel.app/",
      category: "Full Stack",
      status: "Live",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Vercel"],
      features: [
        "React frontend with responsive design",
        "Node.js backend with MongoDB",
        "User authentication",
        "Advanced search filters",
      ],
    },
    {
      id: 2,
      title: "Mobile Restaurant app (YumYard)",
      description:
        "YumYard is a user-friendly restaurant app designed to simplify the dining experience while fostering convenience, community, and culinary exploration. Users can easily browse menus, make table reservations, track orders, and choose from flexible payment options. Personalized recommendations allowing users to discover new favorites. Beyond dining out, YumYard offers a unique Learn to Cook feature, empowering users to expand their culinary skills with recipes, step by step process, and tutorials. Whether exploring new restaurants or cooking at home, YumYard is dedicated to making every culinary adventure enjoyable, enriching, and memorable.",
      images: [
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751012809/Home_Page_u15jxm.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751012744/Menu_page_hyh7ns.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751013649/Burger_Page_dfsfpz.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751013649/Cart_page_yp4suc.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751013649/Reservation_page_2_kvnwa2.png",
        "https://res.cloudinary.com/dwhsjkzrn/image/upload/v1751013649/Account_aqssdq.png",
      ],
      link: "https://www.figma.com/design/eDBRKDzy3ZlNZOe4b3TCdm/%F0%9F%9A%80-YumYard?node-id=2-3&p=f&t=4c646twM1ULWKXGZ-0",
      category: "Design",
      status: "Completed",
      technologies: ["Figma"],
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Usability testing",
        "Iterative design process",
      ],
    },
  ];

  const toggleShowMore = () => {
    setVisibleProjects((prev) => (prev === 4 ? projects.length : 4));
  };

  const techIconMap = {
    Figma: figmaIcon,
    React: reactIcon,
    "Node.js": nodejsIcon,
    MongoDB: mongodbIcon,
    Vercel: null,
    "Express.js": expressjsIcon,
  };

  const ProjectCard = ({ project }) => {
    const isMobileDesign = project.category === "Design";

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
        <div className="absolute inset-0 rounded-3xl transition-colors duration-300 bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-50 group-hover:dark:bg-blue-900/30 group-hover:shadow-md group-hover:dark:shadow-gray-800 will-change-[background,box-shadow]" />

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
          <div
            className={`mb-4 overflow-hidden rounded-2xl ${
              isMobileDesign ? "" : ""
            }`}
          >
            <div className="relative">
              <div
                className="transition-transform duration-300 group-hover:scale-102 will-change-transform"
                style={{
                  transform: "translate3d(0, 0, 0)",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className={`w-full ${
                    isMobileDesign ? "max-w-[200px] mx-auto h-64" : "h-64"
                  } object-contain`}
                />
              </div>

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 will-change-opacity"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="bg-black/50 dark:bg-black/60 rounded-2xl pl-3 pr-3 pb-3 pt-2 text-white dark:text-gray-100 text-center">
                  <Eye className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">Click to view details</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 duration-300">
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

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => {
                const iconSrc = techIconMap[tech];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1 px-2.5 py-1 bg-gray-100 dark:bg-gray-700 rounded-full transition-colors duration-300"
                  >
                    {iconSrc ? (
                      <img
                        src={iconSrc}
                        alt={tech}
                        className="w-6 h-6 object-contain"
                        title={tech}
                      />
                    ) : null}
                    <span className="text-xs text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </div>
                );
              })}
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
      </div>
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
    <div id="projects" className="min-h-screen py-16 quicksand">
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
