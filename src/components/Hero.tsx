import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 text-center px-6"
    >
      <div className="max-w-3xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Frontend / Full Stack Developer
        </motion.h1>

        {/* Tech Stack */}
        <p className="mt-3 text-amber-400 text-sm md:text-base">
          React.js • Laravel • MySQL
        </p>

        {/* Short Description */}
        <p className="mt-5 text-gray-300 text-base md:text-lg">
          I build fast, responsive web applications with clean UI and scalable backend.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => scrollToSection("#projects")}
            className="px-6 py-3 bg-amber-500 text-white rounded-md font-medium hover:bg-amber-600 transition"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="px-6 py-3 border border-amber-500 text-amber-400 rounded-md font-medium hover:bg-amber-500 hover:text-white transition"
          >
            Contact
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
