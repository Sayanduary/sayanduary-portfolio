/* eslint-disable react/prop-types */
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

export const About = () => {
  const frontendSkills = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  ];

  const programmingLanguages = [
    { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "Python", icon: <FaPython className="text-blue-300" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-center text-transparent">
          ABOUT ME
        </h2>

        <div className="rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all">
          <p className="text-gray-300 mb-8 text-center leading-relaxed">
            Passionate Developer with expertise in building scalable
            applications and solving complex problems. I have a strong
            understanding of
            <span className="text-blue-400 font-semibold">
              {" "}
              Data Structures & Algorithms (DSA){" "}
            </span>
            , which helps me write efficient and optimized code.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillSection
              title="Programming Languages"
              skills={programmingLanguages}
            />
            <SkillSection title="Backend" skills={backendSkills} />
            <SkillSection title="Frontend" skills={frontendSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Reusable Component for Skill Sections */
const SkillSection = ({ title, skills }) => {
  return (
    <div className="rounded-xl p-6 border border-white/10 hover:shadow-lg hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900 justify-center border border-blue-500/50 text-white py-2 px-6 rounded font-medium transition-all duration-200 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
          >
            <span className="text-3xl">{skill.icon}</span>
            <span className="mt-2 text-white font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
