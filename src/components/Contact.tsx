import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Send,
  Briefcase,
  CheckCircle,
  Instagram,
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [state, handleSubmit] = useForm('mykgqlao');

  const contactCards = [
    {
      icon: Mail,
      title: 'Email Me',
      value: 'justinarbaz442@email.com',
      href: 'mailto:justinarbaz442@email.com',
    },
    {
      icon: Phone,
      title: 'Call Me',
      value: '+91 98017 53451',
      href: 'tel:+919801753451',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New Delhi, India',
      href: '#',
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white">
            Let’s <span className="text-amber-400">Connect</span>
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Open to full-time roles, freelance work, and meaningful collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Availability */}
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-500/10">
              <div className="flex items-center gap-3 text-amber-400">
                <Briefcase />
                <span className="font-semibold">Available for Opportunities</span>
              </div>
              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                Actively looking for MERN Stack / Full Stack Developer roles.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Resume */}
              <a
                href="/Justin-Arbaz-MERN-Developer.pdf"
                download
                className="px-6 py-3 rounded-xl border border-amber-500 text-amber-400 hover:bg-amber-500/10 transition"
              >
                📄 Download Resume
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919801753451?text=Hi%20Justin,%20I%20found%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactCards.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-xl bg-gray-800 border border-gray-700 hover:border-amber-500 transition"
                >
                  <div className="p-3 rounded-lg bg-amber-500/15">
                    <item.icon className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">{item.title}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4 pt-4">
              {[Github, Linkedin, Instagram, ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-4 rounded-xl border border-gray-700 hover:border-amber-500 hover:bg-amber-500/10 transition"
                >
                  <Icon className="text-gray-400 hover:text-amber-400" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-gray-800/90 border border-gray-700 space-y-6"
          >
            {state.succeeded ? (
              <div className="flex items-center gap-3 text-green-400 text-lg">
                <CheckCircle />
                Message sent successfully!
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-white">
                  Send a Message
                </h3>

                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-amber-500 outline-none"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-amber-500 outline-none"
                />
                <ValidationError field="email" errors={state.errors} />

                <input
                  name="subject"
                  placeholder="What’s this about?"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-amber-500 outline-none"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-amber-500 outline-none resize-none"
                />
                <ValidationError field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:shadow-xl hover:shadow-amber-500/40 transition disabled:opacity-50"
                >
                  {state.submitting ? 'Sending…' : 'Send Message'}
                  <Send size={18} />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
