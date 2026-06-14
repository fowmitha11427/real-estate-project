import { motion } from 'framer-motion';
import { Play, Calendar, ChevronDown } from 'lucide-react';

const stats = [
  { value: '1,500+', label: 'Properties Sold' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '20+', label: 'Years Experience' },
  { value: '25+', label: 'Cities Served' },
];

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/private-estate.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black-luxury/70 via-black-luxury/50 to-black-luxury/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-luxury/60 via-transparent to-black-luxury/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">Premium Real Estate</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-[Playfair_Display] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
          >
            Extraordinary
            <br />
            Properties.
            <br />
            <span className="text-gradient-gold">Exceptional Living.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light"
          >
            Discover luxury residences, exclusive investment opportunities, and world-class real estate experiences curated for the discerning few.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo('#properties')}
              className="group flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-black-luxury px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30"
            >
              <Play size={16} className="group-hover:scale-110 transition-transform" />
              Explore Properties
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center justify-center gap-3 border border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300 backdrop-blur-sm"
            >
              <Calendar size={16} className="group-hover:scale-110 transition-transform" />
              Schedule Consultation
            </button>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-24 md:bottom-16 right-4 sm:right-8 lg:right-0"
        >
          <div className="glass-dark rounded-2xl p-6 md:p-8 grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gold font-[Playfair_Display]">{stat.value}</div>
                <div className="text-white/60 text-xs md:text-sm mt-1 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('#collections')}
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
