import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      icon: Briefcase,
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description:
        'Developed and maintained multiple web applications using MERN stack. Implemented RESTful APIs, optimized database queries, and improved application performance by 40%.',
      achievements: [
        'Led development of 3 major client projects',
        'Reduced server response time by 45%',
        'Mentored junior developers',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Web Development Intern',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description:
        'Collaborated with design and development teams to build responsive web applications. Gained hands-on experience with React, Node.js, and modern development workflows.',
      achievements: [
        'Built 5+ client websites from scratch',
        'Implemented responsive designs',
        'Learned Agile methodologies',
      ],
    },
    {
      icon: Award,
      title: 'Freelance Developer',
      company: 'Self-Employed',
      period: '2021 - 2022',
      description:
        'Delivered custom web solutions for small businesses and startups. Managed full project lifecycle from requirements gathering to deployment and maintenance.',
      achievements: [
        'Completed 15+ freelance projects',
        'Achieved 100% client satisfaction',
        'Built long-term client relationships',
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 sm:py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Professional <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My career progression and key milestones in web development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-600 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
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
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl w-fit">
                          <exp.icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <p className="text-amber-400 font-semibold">{exp.company}</p>
                            <span className="hidden sm:inline text-gray-600">•</span>
                            <p className="text-gray-400 text-sm">{exp.period}</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="space-y-2">
                        <p className="text-amber-400 font-semibold text-sm mb-3">Key Achievements:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-400">
                              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default Experience;
