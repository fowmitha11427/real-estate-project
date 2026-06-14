import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Phone } from 'lucide-react';
import { useTheme } from '../lib/context';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Properties', href: '#properties' },
  { name: 'About', href: '#about' },
  { name: 'Agents', href: '#agents' },
  { name: 'Investments', href: '#investments' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isDark
              ? 'bg-black-luxury/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-gold/10'
              : 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/5 border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" onClick={() => scrollTo('#home')} className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 15 L85 75 L15 75 Z" fill="none" stroke="#D4AF37" strokeWidth="4" />
                  <circle cx="50" cy="52" r="6" fill="#D4AF37" />
                </svg>
              </div>
              <div>
                <span className={`text-xl font-bold tracking-wider font-[Playfair_Display] ${
                  scrolled && !isDark ? 'text-black-luxury' : 'text-white'
                }`}>
                  AUREVIA
                </span>
                <span className="block text-[9px] tracking-[0.3em] text-gold uppercase">Estates</span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative group ${
                    scrolled && !isDark ? 'text-gray-700' : 'text-white/80'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 hover:bg-gold/10 ${
                  scrolled && !isDark ? 'text-gray-700' : 'text-white/80'
                }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="hidden md:flex items-center gap-2 bg-gold hover:bg-gold-light text-black-luxury px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <Phone size={14} />
                Book Private Viewing
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 ${
                  scrolled && !isDark ? 'text-gray-700' : 'text-white'
                }`}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black-luxury lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-[Playfair_Display] text-white/80 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onClick={() => scrollTo('#contact')}
                className="mt-4 bg-gold text-black-luxury px-8 py-3 font-semibold tracking-wide"
              >
                Book Private Viewing
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
