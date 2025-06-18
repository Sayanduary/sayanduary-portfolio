import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "TrackiFy",
      description:
          "A robust and scalable backend API for managing subscriptions built with Node.js, Express.js, and MongoDB. This system provides comprehensive subscription management capabilities including user authentication, subscription CRUD operations, renewal tracking, and automated reminder workflows.",
      image:"https://res.cloudinary.com/dpoxhqkhx/image/upload/v1750269443/file_00000000517461f8be9d43fcd2c46338_ymw9x7.png",
      link: "https://github.com/Sayanduary/TrackiFy-SubscriptionTracker-BackendProject",
      github: "https://github.com/Sayanduary/TrackiFy-SubscriptionTracker-BackendProject",
      technologies: ["JAVASCRIPT", "EXPRESS", "MONGO DB","UPSTASH WORKFLOW","ARCJET"],
      category: "Backend API",
      status: "Completed"
    },
    {
      title: "Weather App",
      description:
          "A weather application that provides real-time weather updates using an external API, featuring a clean and user-friendly interface.",
      image:
          "https://i.ibb.co/Cp58Thw9/Screenshot-from-2025-02-26-23-11-52.png",
      link: "https://weather-app-gold-mu-99.vercel.app/",
      github: "https://github.com/Sayanduary/weatherApp",
      technologies: ["JavaScript", "HTML", "Tailwind CSS"],
      category: "Frontend App",
      status: "Live"
    },

  ];

  return (
      <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <RevealOnScroll>
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                  FEATURED PROJECTS
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
              </div>
              <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                Discover my latest work and creative solutions
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
              {projects.map((project, index) => (
                  <div
                      key={index}
                      className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    {/* Card Header with Status Badge */}
                    <div className="relative">
                      <div className="absolute top-4 left-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === 'Live'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                      </div>

                      <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400 border border-purple-500/30 backdrop-blur-sm">
                      {project.category}
                    </span>
                      </div>

                      {/* Enhanced Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                        <img
                            src={project.image}
                            alt={project.title}

                            loading="lazy"
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Enhanced Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="font-bold text-2xl mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>

                      {/* Enhanced Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, key) => (
                            <span
                                key={key}
                                className="group/tech bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 py-2 px-3 rounded-lg text-xs font-bold border border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                            >
                        {tech}
                      </span>
                        ))}
                      </div>

                      {/* Enhanced Action Buttons */}
                      <div className="flex gap-4 pt-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                        >
                          <FaExternalLinkAlt className="text-sm group-hover/btn:translate-x-0.5 transition-transform" />
                          LINK
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25"
                        >
                          <FaGithub className="text-sm group-hover/btn:rotate-12 transition-transform" />
                          CODE
                        </a>
                      </div>
                    </div>

                    {/* Animated Border Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-sm"></div>
                    </div>
                  </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">Want to see more?</h3>
                <p className="text-gray-400 mb-4">Check out my GitHub for more projects and contributions</p>
                <a
                    href="https://github.com/Sayanduary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <FaGithub className="text-lg" />
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
  );
};