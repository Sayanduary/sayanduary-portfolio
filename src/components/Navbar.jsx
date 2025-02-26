import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand Name */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            sayan<span className="text-blue-500">.duary</span>
          </a>

          {/* Mobile Menu Icon */}
          <button
  className={`w-7 h-5 relative cursor-pointer z-40 md:hidden transition-opacity duration-300
              ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
  aria-label="Toggle menu"
  onClick={() => setMenuOpen((prev) => !prev)}
>
  &#9776;
</button>


          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
