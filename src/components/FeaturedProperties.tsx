import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Maximize, Bed, Bath, Eye, ArrowRight, Heart } from 'lucide-react';
import { properties } from '../lib/data';
import { useTheme } from '../lib/context';

export default function FeaturedProperties() {
  const { isDark } = useTheme();
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const toggleWishlist = (id: number) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <section id="properties" className={`py-24 md:py-32 ${isDark ? 'bg-gradient-to-b from-black-luxury via-[#0d0d0d] to-black-luxury' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Handpicked</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Featured Properties
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Our most exclusive listings, personally selected to represent the finest luxury properties available.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                isDark
                  ? 'bg-[#111] hover:shadow-gold/10 border border-white/5 hover:border-gold/20'
                  : 'bg-white hover:shadow-black/10 border border-gray-100 hover:border-gold/30'
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === property.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-gold text-black-luxury text-xs font-bold px-3 py-1 tracking-wide">
                    {property.type}
                  </span>
                  {property.virtualTour && (
                    <span className="glass text-white text-xs font-medium px-3 py-1 flex items-center gap-1">
                      <Eye size={12} /> 360° Tour
                    </span>
                  )}
                </div>

                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(property.id)}
                  className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-white/20 transition-all"
                >
                  <Heart
                    size={18}
                    className={wishlist.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-white'}
                  />
                </button>

                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-2xl font-bold text-white font-[Playfair_Display]">{property.price}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className={`font-[Playfair_Display] text-xl font-bold mb-2 group-hover:text-gold transition-colors ${
                  isDark ? 'text-white' : 'text-black-luxury'
                }`}>
                  {property.title}
                </h3>
                <div className="flex items-center gap-1 mb-4">
                  <MapPin size={14} className="text-gold" />
                  <span className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-500'}`}>{property.location}</span>
                </div>

                <p className={`text-sm mb-5 line-clamp-2 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                  {property.description}
                </p>

                {/* Features */}
                <div className={`flex items-center gap-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                  {property.bedrooms > 0 && (
                    <div className="flex items-center gap-1.5">
                      <Bed size={15} className="text-gold" />
                      <span className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>{property.bedrooms} Beds</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Bath size={15} className="text-gold" />
                    <span className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize size={15} className="text-gold" />
                    <span className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-600'}`}>{property.area}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-5">
                  <button className="flex-1 bg-gold hover:bg-gold-light text-black-luxury py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-2">
                    View Details <ArrowRight size={14} />
                  </button>
                  {property.virtualTour && (
                    <button className={`px-4 py-2.5 border text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      isDark
                        ? 'border-white/20 text-white/70 hover:border-gold hover:text-gold'
                        : 'border-gray-200 text-gray-600 hover:border-gold hover:text-gold'
                    }`}>
                      <Eye size={14} /> Tour
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="group inline-flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-black-luxury px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300">
            View All Properties
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
