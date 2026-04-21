import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight"
        >
          Frontend / Full Stack Developer
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            React.js • Laravel • MySQL
          </span>
        </motion.h1>

        {/* 🔥 VALUE PROPOSITION (IMPORTANT) */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          I build responsive, high-performance web applications focused on clean UI,
          scalability, and real-world problem solving.
        </motion.p>

        {/* 🔥 TRUST LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-amber-400 text-sm"
        >
          1.5+ Years Experience • 2 Companies • Production Projects
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-4 bg-amber-500 text-white rounded-lg font-semibold hover:scale-105 transition"
          >
            View Projects →
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-4 border border-amber-500 text-amber-400 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition"
          >
            Contact Me
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
