import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { useTheme } from '../lib/context';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Properties', href: '#properties' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Agents', href: '#agents' },
  { name: 'Investments', href: '#investments' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const categories = [
  'Oceanfront Villas',
  'Sky Penthouses',
  'Smart Luxury Homes',
  'Private Estates',
  'Investment Properties',
  'Commercial Spaces',
];

export default function Footer() {
  const { isDark } = useTheme();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`${isDark ? 'bg-black-luxury border-t border-white/5' : 'bg-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 15 L85 75 L15 75 Z" fill="none" stroke="#D4AF37" strokeWidth="4" />
                  <circle cx="50" cy="52" r="6" fill="#D4AF37" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-wider font-[Playfair_Display] text-white">AUREVIA</span>
                <span className="block text-[9px] tracking-[0.3em] text-gold uppercase">Estates</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Redefining luxury real estate with extraordinary properties and unparalleled service across the globe.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                <span className="text-white/50 text-sm">500 Park Avenue, New York</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span className="text-white/50 text-sm">+1 (212) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <span className="text-white/50 text-sm">concierge@aurevia.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Property Types</h4>
            <ul className="space-y-3">
              {categories.map(cat => (
                <li key={cat}>
                  <button className="text-white/50 hover:text-gold text-sm transition-colors duration-300">
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wider uppercase">Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Subscribe for exclusive listings and luxury market insights.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 py-3 px-4 rounded-lg text-sm bg-white/5 text-white border border-white/10 placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-gold/30"
              />
              <button className="bg-gold hover:bg-gold-light text-black-luxury px-4 py-3 rounded-lg font-bold text-sm transition-all">
                <ArrowUp size={16} className="rotate-90" />
              </button>
            </div>
            <div className="mt-6">
              <h5 className="text-white/70 text-xs font-medium mb-3 tracking-wider uppercase">Follow Us</h5>
              <div className="flex gap-3">
                {['IG', 'LI', 'TW', 'YT'].map(social => (
                  <button
                    key={social}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all text-xs font-bold"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Aurevia Estates. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button className="text-white/30 hover:text-gold text-sm transition-colors">Privacy Policy</button>
            <button className="text-white/30 hover:text-gold text-sm transition-colors">Terms of Service</button>
            <button className="text-white/30 hover:text-gold text-sm transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
