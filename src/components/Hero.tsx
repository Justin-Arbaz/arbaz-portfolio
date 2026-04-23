import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center px-6">
      
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Frontend Developer
          </motion.h1>

          <p className="mt-4 text-amber-400 font-medium">
            React.js • Laravel • MySQL
          </p>

          <p className="mt-6 text-gray-300 text-lg">
            I build fast, scalable, and production-ready web apps with clean UI
            and real-world features.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            1.5+ Years Experience • Production Projects
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-6 py-3 bg-amber-500 rounded-md hover:bg-amber-600 transition"
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

        {/* RIGHT CONTENT (VISUAL / IMAGE / CARD) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-80 h-80 bg-gradient-to-br from-amber-500/20 to-amber-700/10 rounded-2xl flex items-center justify-center shadow-xl">
            
            {/* Replace with your image */}
            <img
              src="/arbaz.jpeg"
              alt="profile"
              className="w-64 h-64 object-cover rounded-xl border border-gray-700"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
