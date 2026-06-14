import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { collections } from '../lib/data';
import { useTheme } from '../lib/context';

export default function SignatureCollections() {
  const { isDark } = useTheme();

  return (
    <section id="collections" className={`py-24 md:py-32 ${isDark ? 'bg-black-luxury' : 'bg-gray-light'}`}>
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
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Curated For You</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Signature Collections
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Explore our meticulously curated categories of premium properties, each representing the pinnacle of luxury living.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((collection, i) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer h-80"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-luxury via-black-luxury/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">{collection.count} Properties</span>
                  <h3 className="font-[Playfair_Display] text-2xl font-bold text-white mt-2 mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                    <span>Explore Collection</span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
