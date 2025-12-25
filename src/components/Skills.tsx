import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: 'React.js', proficiency: 95, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', proficiency: 90, color: 'from-green-400 to-green-600' },
    { name: 'Express.js', proficiency: 88, color: 'from-gray-400 to-gray-600' },
    { name: 'MongoDB', proficiency: 85, color: 'from-emerald-400 to-emerald-600' },
    { name: 'JavaScript (ES6+)', proficiency: 93, color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5 & CSS3', proficiency: 92, color: 'from-orange-400 to-orange-600' },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies with a focus on the MERN stack ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative p-6 bg-gray-800/80 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    {skill.proficiency}%
                  </span>
                </div>

                <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </motion.div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20">
                    Professional
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-700/50">
            <p className="text-gray-300 text-lg">
              Also experienced with:{' '}
              <span className="text-amber-400 font-semibold">
                Git, RESTful APIs, JWT, Redux, Tailwind CSS, TypeScript, Webpack, Docker
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
