export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      description:
        "A scalable cloud platform utilizing modern technologies for efficient deployment and management of applications.",
      image: "https://source.unsplash.com/400x250/?technology,cloud", // Replace with your project image
      link: "https://your-project-link.com", // Replace with your project URL
      technologies: ["React", "Node.js", "AWS", "Docker"],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 flex justify-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-white bg-clip-text text-center text-transparent">
          FEATURED PROJECTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.2)] transition-all group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-80 transition-all"
              />
              <h3 className="font-bold text-xl mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
