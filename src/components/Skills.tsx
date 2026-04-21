import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // ✅ REALISTIC SKILLS (based on your CV)
  const skills = [
    { name: 'React.js', proficiency: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript (ES6+)', proficiency: 85, color: 'from-yellow-400 to-yellow-600' },
    { name: 'HTML5 & CSS3', proficiency: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'Bootstrap', proficiency: 90, color: 'from-purple-400 to-purple-600' },
    { name: 'Laravel (PHP)', proficiency: 75, color: 'from-red-400 to-red-600' },
    { name: 'MySQL', proficiency: 75, color: 'from-green-400 to-green-600' },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" ref={ref}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Technical <span className="text-amber-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>

          {/* ✅ FIXED TEXT */}
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Skilled in frontend development with React.js and experienced in backend development using Laravel and MySQL.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 bg-gray-800/80 rounded-2xl border border-gray-700 hover:border-amber-500 transition"
            >
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-amber-400 font-bold">
                  {skill.proficiency}%
                </span>
              </div>

              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.2 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300">
            Also familiar with:{' '}
            <span className="text-amber-400 font-medium">
              Git, GitHub, REST APIs, Postman, jQuery
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
