
// eslint-disable-next-line react/prop-types
export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-50 flex flex-col items-center justify-center
                  transition-all duration-300 ease-in-out
                  ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-full pointer-events-none"}
                `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer z-50"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 text-white text-2xl font-semibold transition-all duration-300">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`my-2 transition-transform duration-300 
                        hover:text-blue-400 
                        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
            style={{ transitionDelay: `${index * 100}ms` }} // Staggered animation
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};
