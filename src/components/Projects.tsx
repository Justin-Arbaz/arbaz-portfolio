import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ExternalLink,
  Building2,
  Leaf,
  HeartPulse,
  Landmark,
} from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'Delhi Bhartiya Chikitsa Parishad (DBCP)',
      tag: 'Government Portal',
      description:
        "Official portal for Delhi's Ayurvedic medicine regulatory body. Precisely replicated layouts, navigation, and carousels to match design specs, and delivered the practitioner registration and renewal interfaces used by licensed professionals statewide. Built in screen-reader support and adjustable font controls for wider accessibility.",
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WCAG Accessibility'],
      live: 'https://www.dbcpdelhi.org/',
      gradient: 'from-blue-500 to-indigo-600',
      icon: Landmark,
    },
    {
      title: 'Cane Advisory Services (CAS)',
      tag: 'Agriculture Platform · Govt. of Bihar',
      description:
        'State-backed agriculture advisory platform under the Chief Minister Cane Development Program, serving sugarcane farmers across Bihar. Delivered UI modules for variety selection, pest & disease identification, nutrient management, and plant protection guidance, plus the admin panel for managing crop data and farmer queries.',
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      live: 'https://caneadvisory.ac.in/',
      gradient: 'from-green-500 to-emerald-600',
      icon: Leaf,
    },
    {
      title: 'Unani Temperament Assessment',
      tag: 'Health Portal · Ministry of AYUSH',
      description:
        'Health assessment portal under the Ministry of AYUSH, Government of India. Delivered an interactive Mizaj quiz interface generating personalized diet and lifestyle recommendations, along with the user authentication flows, admin panel, and media gallery management.',
      tech: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery'],
      live: 'https://unanitemperament.ccrumapps.in/',
      gradient: 'from-orange-500 to-red-600',
      icon: HeartPulse,
    },
    {
      title: 'APMC Azadpur Delhi',
      tag: 'Government Portal · Est. 1977',
      description:
        "Official portal for the Agricultural Produce Marketing Committee (APMC) Azadpur, giving the regulatory committee a public digital presence connecting traders and farmers across the region. Designed a bilingual (Hindi & English) UI serving regulatory notices and market updates to the public.",
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Bilingual UI'],
      live: 'https://www.apmcazadpurdelhi.com/',
      gradient: 'from-amber-500 to-orange-600',
      icon: Building2,
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
            Live, public-facing platforms shipped for government, healthcare, and agriculture bodies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
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

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-amber-400 text-sm font-medium mb-3">
                    {project.tag}
                  </p>

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
                    Visit Live Site
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
