import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-amber-500 fill-amber-500" /> by MERN Stack Developer
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
