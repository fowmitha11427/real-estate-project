import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, UtensilsCrossed, ShoppingBag, Building2, Music } from 'lucide-react';
import { useTheme } from '../lib/context';

const categories = [
  { id: 'schools', icon: GraduationCap, label: 'Schools', count: 12, color: '#4A9EFF' },
  { id: 'hospitals', icon: Heart, label: 'Hospitals', count: 5, color: '#FF6B6B' },
  { id: 'restaurants', icon: UtensilsCrossed, label: 'Restaurants', count: 28, color: '#FFA94D' },
  { id: 'shopping', icon: ShoppingBag, label: 'Shopping', count: 15, color: '#CC5DE8' },
  { id: 'business', icon: Building2, label: 'Business', count: 8, color: '#20C997' },
  { id: 'entertainment', icon: Music, label: 'Entertainment', count: 20, color: '#FFD43B' },
];

const nearbyPlaces = [
  { name: 'Westfield Academy', type: 'School', distance: '0.8 mi', rating: '9.2/10' },
  { name: 'St. Claire Medical Center', type: 'Hospital', distance: '1.2 mi', rating: '9.5/10' },
  { name: 'Le Maison Dorée', type: 'Restaurant', distance: '0.3 mi', rating: '9.8/10' },
  { name: 'The Galleria', type: 'Shopping', distance: '0.5 mi', rating: '9.0/10' },
  { name: 'Meridian Business Park', type: 'Business', distance: '1.5 mi', rating: '9.3/10' },
  { name: 'Grand Opera House', type: 'Entertainment', distance: '0.7 mi', rating: '9.6/10' },
];

export default function NeighborhoodExplorer() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('schools');

  return (
    <section className={`py-24 md:py-32 ${isDark ? 'bg-black-luxury' : 'bg-gray-light'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Explore</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Neighborhood Explorer
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Discover what surrounds your future home — from elite schools to fine dining.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative rounded-2xl overflow-hidden h-96 lg:h-[500px] ${isDark ? 'bg-[#111]' : 'bg-gray-200'}`}
          >
            {/* Simulated map */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] to-[#0d1520]">
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-10">
                {Array.from({ length: 20 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={`${i * 5}%`} x2="100%" y2={`${i * 5}%`} stroke="#D4AF37" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 20 }).map((_, i) => (
                  <line key={`v${i}`} x1={`${i * 5}%`} y1="0" x2={`${i * 5}%`} y2="100%" stroke="#D4AF37" strokeWidth="0.5" />
                ))}
              </svg>

              {/* Center property marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 bg-gold/20 rounded-full animate-ping absolute" />
                  <div className="w-16 h-16 bg-gold/30 rounded-full flex items-center justify-center relative">
                    <div className="w-8 h-8 bg-gold rounded-full" />
                  </div>
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-medium whitespace-nowrap">Your Property</span>
              </div>

              {/* Category markers */}
              {categories.map((cat, i) => {
                const angle = (i / categories.length) * Math.PI * 2;
                const radius = 35;
                const x = 50 + Math.cos(angle) * radius;
                const y = 50 + Math.sin(angle) * radius;
                const isActive = activeCategory === cat.id;
                return (
                  <motion.div
                    key={cat.id}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                    animate={{ scale: isActive ? 1.3 : 1 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        isActive ? 'shadow-lg' : 'opacity-60'
                      }`}
                      style={{ backgroundColor: isActive ? cat.color : `${cat.color}40`, boxShadow: isActive ? `0 0 20px ${cat.color}40` : 'none' }}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      <cat.icon size={18} className="text-white" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Categories & Places */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Category Tabs */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-3 rounded-xl flex flex-col items-center gap-2 transition-all duration-300 ${
                    activeCategory === cat.id
                      ? isDark
                        ? 'bg-gold/10 border border-gold/30'
                        : 'bg-gold/10 border border-gold/30'
                      : isDark
                        ? 'bg-white/[0.03] border border-white/5 hover:border-white/10'
                        : 'bg-white border border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <cat.icon size={20} style={{ color: activeCategory === cat.id ? cat.color : isDark ? '#888' : '#999' }} />
                  <span className={`text-xs font-medium ${activeCategory === cat.id ? (isDark ? 'text-white' : 'text-black-luxury') : isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {cat.label}
                  </span>
                  <span className="text-[10px] text-gold">{cat.count} nearby</span>
                </button>
              ))}
            </div>

            {/* Nearby Places */}
            <div className="space-y-3">
              {nearbyPlaces.map((place, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl flex items-center justify-between transition-all duration-300 hover:translate-x-1 ${
                    isDark
                      ? 'bg-white/[0.03] border border-white/5 hover:border-gold/20'
                      : 'bg-white border border-gray-100 hover:border-gold/20 hover:shadow-md'
                  }`}
                >
                  <div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-black-luxury'}`}>{place.name}</h4>
                    <span className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{place.type} · {place.distance}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gold font-bold text-sm">{place.rating}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
