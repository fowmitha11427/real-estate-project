import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { lifestyleSections } from '../lib/data';
import { useTheme } from '../lib/context';

export default function LuxuryLifestyle() {
  const { isDark } = useTheme();

  return (
    <section className={`py-24 md:py-32 ${isDark ? 'bg-black-luxury' : 'bg-gray-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Experience</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            The Luxury Lifestyle
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            More than properties — we offer gateways to extraordinary ways of living.
          </p>
        </motion.div>

        {/* Lifestyle Grid */}
        <div className="space-y-8">
          {lifestyleSections.map((section, i) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/20 rounded-2xl transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">{String(i + 1).padStart(2, '0')}</span>
                <h3 className={`font-[Playfair_Display] text-2xl md:text-4xl font-bold mt-3 mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                  {section.title}
                </h3>
                <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  {section.description}
                </p>
                <button className="group/btn inline-flex items-center gap-3 text-gold hover:text-gold-light font-medium transition-colors">
                  <span>Explore {section.title}</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
