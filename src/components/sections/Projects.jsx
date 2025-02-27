import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Stop Watch",
      description:
        "A lightweight and efficient JavaScript stopwatch with start, stop, and reset functionality, designed for precise time tracking.",
      image: "https://i.ibb.co/d48pXc03/stopwatch.png",
      link: "https://stopwatchsayanduary.vercel.app/",
      github: "https://github.com/Sayanduary/StopWatch-Using-Javascipt",
      technologies: ["JavaScript", "HTML", "Tailwind CSS"],
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides real-time weather updates using an external API, featuring a clean and user-friendly interface.",
      image: "https://i.ibb.co/Cp58Thw9/Screenshot-from-2025-02-26-23-11-52.png",
      link: "https://weather-app-gold-mu-99.vercel.app/",
      github: "https://github.com/Sayanduary/weatherApp",
      technologies: ["JavaScript", "HTML", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 flex justify-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-center text-transparent">
          FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="block p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.2)] transition-all group"
            >
              <div className="flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-64 h-50 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-all"
                />
              </div>
              <h3 className="font-bold text-xl mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-all"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
