import React, { useState, useMemo, useCallback } from "react";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import {
  useScrollAnimation,
  useStaggeredAnimation,
} from "../hooks/useScrollAnimation";

const Projects = React.memo(() => {
  const { isDark } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  const [titleRef, titleVisible] = useScrollAnimation();
  const [buttonRef, buttonVisible] = useScrollAnimation();

  const categories = useMemo(
    () => ["All", "React", "MERN", "AI & Data Science"],
    []
  );

  // Project list
  const projects = useMemo(
    () => [
      {
        title: "Wheel-O-Rent",
        description:
          "Full-stack MERN app for vehicle rentals with real-time availability, easy booking, and role-based access.",
        image: "/images/projects/wheel-o-rent.webp",

        technologies: [
          "React.js",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JWT",
        ],
        liveUrl: "https://wheel-o-rent.vercel.app/",
        githubUrl: "https://github.com/Dhruv-201004/Wheel-O-Rent",
        date: "April 2025",
        category: "MERN",
      },

      {
        title: "Atmos",
        description:
          "A React-based weather dashboard providing real-time data and accurate forecasts with an intuitive user interface.",
        image: "/images/projects/weather-dashboard.webp",
        technologies: ["React", "TypeScript", "OpenWeatherAPI", "Tailwind CSS"],
        liveUrl: "https://weather-dashboard-atmos.vercel.app/",
        githubUrl: "https://github.com/Dhruv-201004/Weather-Dashboard",
        date: "May 2025",
        category: "React",
      },
      {
        title: "Splitr",
        description:
          "Full-stack MERN app for managing shared expenses with automatic settlements, flexible splits, and seamless group or 1-to-1 tracking.",
        image: "/images/projects/splitr.webp",

        technologies: [
          "Next.js",
          "React.js",
          "Tailwind CSS",
          "Convex",
          "Clerk",
          "Vercel",
        ],
        liveUrl: "https://splitr-gamma-five.vercel.app/",
        githubUrl: "https://github.com/Dhruv-201004/Splitr",
        date: "August 2025",
        category: "MERN",
      },
      {
        title: "Resume Insight",
        description:
          "A smart Resume Analyzer powered by Gemini AI that efficiently and fairly matches candidate resumes with job descriptions, helping recruiters and applicants save time while ensuring accurate, data-driven evaluations.",
        image: "/images/projects/resume-insight.webp",

        technologies: [
          "Python",
          "Flask",
          "Gemini AI",
          "HTML5",
          "CSS3",
          "JavaScript",
        ],
        liveUrl: "https://resume-insight.onrender.com/",
        githubUrl: "https://github.com/Dhruv-201004/AI-Powered-Resume-Analyzer",
        date: "June 2025",
        category: "AI & Data Science",
      },
      {
        title: "React Projects",
        description:
          "A collection of simple React apps to practice frontend skills, including a Password Generator, To-Do Manager, Movie Finder, Weather Checker, and Admin Dashboard. Focused on React hooks, state, and Tailwind CSS.",
        image: "/images/projects/react-projects.webp",
        technologies: ["React.js", "Tailwind CSS", "JavaScript","HTML5", "CSS3"],
        githubUrl: "https://github.com/Dhruv-201004/React-Projects",
        date: "August 2025",
        category: "React",
      },
    ],
    []
  );

  // Filter logic based on selected category
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter, projects]
  );

  const [projectsRef, visibleProjects] = useStaggeredAnimation(
    filteredProjects.length
  );

  const handleFilterChange = useCallback((category: string) => {
    setActiveFilter(category);
  }, []);

  return (
    <section id="projects" className="py-20 mt-10 relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-500 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
              isDark
                ? "from-sky-400 via-blue-500 to-cyan-300"
                : "from-blue-700 via-blue-600 to-cyan-600"
            }`}
          >
            Featured Projects
          </h2>
          <div
            className={`h-1.5 w-28 mx-auto rounded-full mb-3 bg-gradient-to-r ${
              isDark
                ? "from-sky-400 via-blue-500 to-cyan-300"
                : "from-blue-700 via-blue-600 to-cyan-600"
            }`}
          />
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-500 ${
            titleVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                activeFilter === category
                  ? isDark
                    ? "bg-white text-black focus-visible:ring-white/60 focus-visible:ring-offset-black"
                    : "bg-gray-900 text-white focus-visible:ring-gray-700 focus-visible:ring-offset-white"
                  : isDark
                  ? "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20 focus-visible:ring-white/40 focus-visible:ring-offset-black"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 focus-visible:ring-gray-300 focus-visible:ring-offset-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          ref={projectsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <div
              key={`${project.title}-${activeFilter}`}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                visibleProjects[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${
                isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />

                {/* Category Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDark
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "bg-black/20 text-white backdrop-blur-sm"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3
                    className={`text-xl font-semibold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <div
                    className={`flex items-center text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>

                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark
                          ? "bg-white/10 text-gray-300 border border-white/20"
                          : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-100 flex items-center justify-center space-x-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        isDark
                          ? "bg-white text-black hover:bg-gray-100 focus-visible:ring-white/70 focus-visible:ring-offset-black"
                          : "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-700 focus-visible:ring-offset-white"
                      }`}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-2 px-4 rounded-lg text-center text-sm font-medium transition-all duration-100 flex items-center justify-center space-x-2 border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                        isDark
                          ? "border-white/20 text-white hover:bg-white/10 focus-visible:ring-white/50 focus-visible:ring-offset-black"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-300 focus-visible:ring-offset-white"
                      }`}
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          ref={buttonRef}
          className={`text-center mt-10 transition-all duration-500 ${
            buttonVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://github.com/Dhruv-201004"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full transition-all duration-100 border ${
              isDark
                ? "border-white/20 text-white hover:bg-white/10"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            <Github size={20} />
            <span className="font-medium">View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
