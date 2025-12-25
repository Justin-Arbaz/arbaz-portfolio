import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ExternalLink,
  Briefcase,
  ShoppingCart,
  Leaf,
  Globe,
} from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Job Portal',
      description:
        'Full-featured job portal with authentication, job listings, application tracking, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      live: 'https://talentxcel.in/',
      gradient: 'from-blue-500 to-purple-600',
      icon: Briefcase,
    },
    {
      title: 'Perfume E-commerce Store',
      description:
        'E-commerce platform with product search, reviews, ratings, and secure payment integration.',
      tech: ['React', 'Node.js', 'Stripe API', 'MongoDB'],
      live: 'http://dimas.sa/',
      gradient: 'from-green-500 to-teal-600',
      icon: ShoppingCart,
    },
    {
      title: 'Unani Temperament Website',
      description:
        'Informational healthcare platform with structured content, admin management, and responsive UI.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
      live: 'https://unanitemperament.ccrumapps.in/',
      gradient: 'from-orange-500 to-red-600',
      icon: Globe,
    },
    {
      title: 'Sugarcane Advisory Platform',
      description:
        'Agriculture-focused platform for crop advisory, farmer resources, and data-driven insights.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS'],
      live: 'https://caneadvisory.ac.in/',
      gradient: 'from-pink-500 to-rose-600',
      icon: Leaf,
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 sm:py-32 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-world applications built with modern full-stack technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative"
              >
                {/* Glow */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                ></div>

                {/* Card */}
                <div className="relative h-full p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-amber-500/50 transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full border border-amber-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-amber-400 border border-amber-500/30 hover:bg-amber-500/10 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
