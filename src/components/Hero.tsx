import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-center px-6 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 blur-3xl opacity-50"></div>

      <div className="relative z-10 max-w-4xl">

        {/* 🔥 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1 text-sm border border-amber-500/30 text-amber-400 rounded-full"
        >
          Available for Work 🚀
        </motion.div>

        {/* 🔥 Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Building Modern <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
            Web Experiences
          </span>
        </motion.h1>

        {/* 🔥 Tech Stack */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-amber-400 font-medium tracking-wide"
        >
          React.js • Laravel • MySQL
        </motion.p>

        {/* 🔥 Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          I craft fast, scalable, and visually polished web apps with real-world
          functionality and clean architecture.
        </motion.p>

        {/* 🔥 Trust Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-2 text-sm text-gray-500"
        >
          1.5+ Years Experience • Production-Level Projects
        </motion.p>

        {/* 🔥 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/20"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-3 border border-amber-500 text-amber-400 rounded-lg hover:bg-amber-500 hover:text-white transition"
          >
            Contact Me
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
