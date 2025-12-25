import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      icon: GraduationCap,
      degree: 'Bachelor of Computer Applications (BCA)',
      institute: 'Maulana Mazharul Haque Arabic and Persian University',
      period: '2022 – 2025',
      description:
        'Built a strong foundation in computer science and software development with a focus on modern web technologies.',
      highlights: [
        'Core Subjects: Data Structures, Algorithms, Database Management',
        'Web Development: HTML, CSS, JavaScript, React',
        'Project: Developed a campus event management system as a final year project',
      ],
    },
    {
      icon: BookOpen,
      degree: 'Web Development',
      institute: 'Arena Animation',
      period: '2023 – 2024',
      description:
        'Hands-on learning through real-world projects, certifications, and continuous practice.',
      highlights: [
        'React, Node.js, Express, MongoDB',
        'REST APIs & Authentication',
        'Git, Deployment & Performance Optimization',
      ],
    },
  ];

  return (
    <section
      id="education"
      ref={ref}
      className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Education{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="relative"
              >
                <div className="md:ml-20">
                  <div className="absolute left-8 w-4 h-4 bg-amber-500 rounded-full border-4 border-gray-900 -translate-x-2 hidden md:block"></div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

                    <div className="relative p-6 sm:p-8 bg-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl w-fit">
                          <edu.icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-amber-400 font-semibold">
                            {edu.institute}
                          </p>
                          <p className="text-gray-400 text-sm">{edu.period}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {edu.description}
                      </p>

                      <ul className="space-y-2">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400">
                            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
