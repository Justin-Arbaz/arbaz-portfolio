import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 
      bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      
      <div className="max-w-4xl">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Frontend Developer
        </motion.h1>

        {/* Tech Stack */}
        <p className="mt-4 text-amber-400 font-medium">
          React.js • Laravel • MySQL
        </p>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          I build fast, responsive, and scalable web applications with clean UI
          and real-world functionality.
        </p>

        {/* Trust Line */}
        <p className="mt-2 text-sm text-gray-400">
          1.5+ Years Experience • Production Projects
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-3 border border-amber-500 text-amber-400 rounded-md hover:bg-amber-500 hover:text-white transition"
          >
            Contact Me
          </button>

        </div>

      </div>
    </section>
  );
};

export default Hero;
