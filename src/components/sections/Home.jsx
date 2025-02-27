import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa"; // Import icons

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 ">
        {/* Profile Image with Smooth Bouncing Animation */}
        <div className="flex justify-center mb-1.5 sm:mb-0">
          <motion.img
            src="https://i.ibb.co/39PMdsGs/Photo-Sayan-Duary-2.jpg" // Replace with your actual image path
            alt="Sayan Duary"
            className="w-30 h-30 md:w-40 md:h-40 rounded-full object-cover mt-20 sm:mt-0"
            animate={{ y: [0, -10, 0] }} // Moves up & down
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Slow, smooth bounce
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 leading-tight bg-clip-text text-transparent">
          Hi, I am{" "}
          <span className="text-gray-300 block sm:inline">Sayan Duary</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Backend engineer with a passion for building robust and scalable APIs.
          Experienced in designing and implementing efficient data structures
          and algorithms.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:bg-blue-500/10 sm:py-2 sm:px-4"
          >
            Contact Me
          </a>

          <a
            href="/cv.pdf" // Update this path with the actual CV location
            download
            className="flex items-center space-x-2 border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:bg-green-500/10 sm:py-2 sm:px-4 "
          >
            <FaFileDownload />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://www.linkedin.com/in/sayan-duary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/sayanduary"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};
