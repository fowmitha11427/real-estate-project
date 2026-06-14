import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../lib/data';
import { useTheme } from '../lib/context';

export default function Testimonials() {
  const { isDark } = useTheme();
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className={`py-24 md:py-32 relative overflow-hidden ${isDark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Success Stories</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Client Experiences
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-8 md:p-12 text-center ${isDark ? 'glass-dark' : 'glass-light shadow-xl'}`}
            >
              <Quote size={40} className="text-gold/30 mx-auto mb-6" />
              
              <p className={`text-lg md:text-xl leading-relaxed mb-8 font-light italic ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
                "{testimonials[current].story}"
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>

              <h4 className={`font-[Playfair_Display] text-xl font-bold ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                {testimonials[current].name}
              </h4>
              <p className="text-gold text-sm font-medium mt-1">{testimonials[current].property}</p>
              <p className={`text-xs mt-1 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{testimonials[current].location}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className={`p-3 rounded-full transition-all duration-300 ${isDark ? 'bg-white/5 hover:bg-gold/20 text-white/60 hover:text-gold' : 'bg-gray-100 hover:bg-gold/20 text-gray-500 hover:text-gold'}`}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-8' : isDark ? 'bg-white/20' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className={`p-3 rounded-full transition-all duration-300 ${isDark ? 'bg-white/5 hover:bg-gold/20 text-white/60 hover:text-gold' : 'bg-gray-100 hover:bg-gold/20 text-gray-500 hover:text-gold'}`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
