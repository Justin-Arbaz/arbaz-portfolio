import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-950 px-6 text-center overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-purple-500/10 blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-3xl">

        {/* 1️⃣ Name + Role */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Hi, I'm <span className="text-amber-400">Arbaz</span> 👋 <br />
          <span className="text-gray-300 text-2xl md:text-3xl font-medium">
            Frontend Developer
          </span>
        </motion.h1>

        {/* 2️⃣ Value Proposition (MOST IMPORTANT) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-300 leading-relaxed"
        >
          I build fast, scalable web applications with clean UI and real-world
          functionality using React and Laravel.
        </motion.p>

        {/* 3️⃣ Tech Stack (Proof) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-amber-400 text-sm font-medium tracking-wide"
        >
          React.js • Laravel • MySQL • REST APIs
        </motion.p>

        {/* 4️⃣ Trust Signal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-2 text-sm text-gray-500"
        >
          1.5+ Years Experience • Production Projects
        </motion.p>

        {/* 5️⃣ CTA (Action) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
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
