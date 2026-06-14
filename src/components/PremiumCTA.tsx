import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useTheme } from '../lib/context';

export default function PremiumCTA() {
  const { isDark } = useTheme();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/private-estate.jpg"
          alt="Luxury estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black-luxury/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-luxury/90 via-black-luxury/70 to-black-luxury/90" />
      </div>

      {/* Gold accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Your Future Awaits</span>
            <div className="w-12 h-[1px] bg-gold" />
          </div>

          <h2 className="font-[Playfair_Display] text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            The Perfect Property
            <br />
            <span className="text-gradient-gold">Is Waiting For You.</span>
          </h2>

          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Let our experts guide you to the residence that matches your vision, lifestyle, and aspirations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo('#contact')}
              className="group flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-black-luxury px-10 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30"
            >
              <Calendar size={16} />
              Book Private Viewing
            </button>
            <button
              onClick={() => scrollTo('#collections')}
              className="group flex items-center justify-center gap-3 border border-white/30 hover:border-gold text-white hover:text-gold px-10 py-4 text-sm font-medium tracking-wider uppercase transition-all duration-300"
            >
              Explore Collection
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
