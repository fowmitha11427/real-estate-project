import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, MapPin, Home, DollarSign, Bed, Bath, Maximize, Sparkles } from 'lucide-react';
import { locations, propertyTypes } from '../lib/data';
import { useTheme } from '../lib/context';

export default function PropertySearch() {
  const { isDark } = useTheme();
  const [showFilters, setShowFilters] = useState(false);
  const [location, setLocation] = useState('');
  const [type, setType] = useState('All Types');
  const [priceRange, setPriceRange] = useState('Any');
  const [bedrooms, setBedrooms] = useState('Any');

  return (
    <section className={`py-20 ${isDark ? 'bg-[#0d0d0d]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Smart Discovery</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-4xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Find Your Dream Property
          </h2>
          <p className={`max-w-xl mx-auto ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Our intelligent search understands your preferences to present the perfect matches.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-2xl p-4 md:p-6 ${isDark ? 'glass-dark' : 'glass-light shadow-xl'}`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location */}
            <div className="flex-1 relative">
              <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl appearance-none text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 ${
                  isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 text-gray-800 border border-gray-200'
                }`}
              >
                <option value="">All Locations</option>
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            {/* Type */}
            <div className="flex-1 relative">
              <Home size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl appearance-none text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 ${
                  isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 text-gray-800 border border-gray-200'
                }`}
              >
                {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Price */}
            <div className="flex-1 relative">
              <DollarSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold" />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl appearance-none text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 ${
                  isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 text-gray-800 border border-gray-200'
                }`}
              >
                <option value="Any">Any Price</option>
                <option value="5-10">$5M - $10M</option>
                <option value="10-20">$10M - $20M</option>
                <option value="20-50">$20M - $50M</option>
                <option value="50+">$50M+</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-gold hover:bg-gold-light text-black-luxury px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/20">
              <Search size={18} />
              Search
            </button>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark ? 'text-white/60 hover:text-gold' : 'text-gray-500 hover:text-gold'
              }`}
            >
              <SlidersHorizontal size={16} />
              Advanced Filters
            </button>
            <button className={`flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors`}>
              <Sparkles size={16} />
              AI Recommendations
            </button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-4 pt-4 border-t grid grid-cols-2 md:grid-cols-4 gap-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}
            >
              <div>
                <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Bedrooms</label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className={`w-full py-2.5 px-3 rounded-lg text-sm ${isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 border border-gray-200'}`}
                >
                  <option>Any</option>
                  <option>2+</option>
                  <option>4+</option>
                  <option>6+</option>
                  <option>8+</option>
                </select>
              </div>
              <div>
                <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Bathrooms</label>
                <select className={`w-full py-2.5 px-3 rounded-lg text-sm ${isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
                  <option>Any</option>
                  <option>2+</option>
                  <option>4+</option>
                  <option>6+</option>
                </select>
              </div>
              <div>
                <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Min Size (sq ft)</label>
                <select className={`w-full py-2.5 px-3 rounded-lg text-sm ${isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
                  <option>Any</option>
                  <option>3,000+</option>
                  <option>5,000+</option>
                  <option>10,000+</option>
                  <option>20,000+</option>
                </select>
              </div>
              <div>
                <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Premium Features</label>
                <select className={`w-full py-2.5 px-3 rounded-lg text-sm ${isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
                  <option>All</option>
                  <option>Pool</option>
                  <option>Smart Home</option>
                  <option>Wine Cellar</option>
                  <option>Home Theater</option>
                  <option>Helipad</option>
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
