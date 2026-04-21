import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Code2, Rocket, Briefcase } from 'lucide-react';

const Counter = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = null;

    const step = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // ✅ REAL STATS (no fake data)
  const stats = [
    { icon: Code2, value: 1.5, suffix: '+', label: 'Years Experience' },
    { icon: Rocket, value: 2, suffix: '+', label: 'Major Projects' },
    { icon: Briefcase, value: 2, suffix: '', label: 'Companies Worked' },
  ];

  return (
    <section id="about" ref={ref} className="relative py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white">
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* ✅ FIXED TITLE */}
            <h3 className="text-3xl font-semibold text-white">
              Frontend / Full Stack Developer
            </h3>

            {/* ✅ PREMIUM CONTENT */}
            <p className="text-gray-300 text-lg leading-relaxed">
              Frontend Developer with 1.5+ years of experience building responsive and scalable web applications using React.js, JavaScript, and Bootstrap.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Experienced in REST API integration and backend development using Laravel and MySQL. Focused on performance optimization, clean UI/UX, and solving real-world problems through efficient code.
            </p>

            {/* ✅ UPDATED TAGS */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Laravel', 'Full Stack', 'Problem Solver', 'Clean Code'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm rounded-full border border-amber-500/30 text-amber-400 bg-amber-500/10"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-gray-800/80 border border-gray-700 hover:border-amber-500 transition"
              >
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-amber-500/15">
                    <stat.icon className="w-8 h-8 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white">
                      <Counter
                        end={stat.value}
                        duration={2000}
                        suffix={stat.suffix}
                      />
                    </div>
                    <p className="text-gray-400 text-sm mt-1">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
