import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState('#home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(scrollY > 50);
      setProgress((scrollY / docHeight) * 100);

      document.querySelectorAll('section[id]').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-gray-800">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all"
        />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-900/80 backdrop-blur-xl border-b border-gray-800'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* LOGO */}
            <div className="text-2xl font-bold text-amber-400">
              Portfolio
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-sm font-medium transition ${
                    active === link.href
                      ? 'text-amber-400'
                      : 'text-gray-300 hover:text-amber-400'
                  }`}
                >
                  {link.name}
                  {active === link.href && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-400 rounded-full"></span>
                  )}
                </button>
              ))}

              {/* RESUME CTA */}
              <a
                href="/Justin-Arbaz-MERN-Developer.pdf"
                download
                className="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-amber-500/40 transition"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-300 hover:text-amber-400"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 md:hidden bg-gray-900/95 backdrop-blur-xl"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-2xl font-semibold ${
                    active === link.href
                      ? 'text-amber-400'
                      : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <a
                href="/Justin-Arbaz-MERN-Developer.pdf"
                download
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
