import { motion } from 'framer-motion';
import { Award, Phone, Mail, Star } from 'lucide-react';
import { agents } from '../lib/data';
import { useTheme } from '../lib/context';

export default function EliteAdvisors() {
  const { isDark } = useTheme();

  return (
    <section id="agents" className={`py-24 md:py-32 ${isDark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
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
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Our Team</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Elite Advisors
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Meet the distinguished professionals who make extraordinary real estate experiences possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                isDark
                  ? 'bg-white/[0.02] border border-white/5 hover:border-gold/20 hover:shadow-gold/10'
                  : 'bg-gray-50 border border-gray-100 hover:border-gold/30 hover:shadow-gold/10'
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-[Playfair_Display] text-xl font-bold text-white">{agent.name}</h3>
                  <p className="text-gold text-sm font-medium">{agent.title}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black-luxury'}`}>{agent.experience}</span>
                    <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Experience</p>
                  </div>
                  <div className={`w-px h-8 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
                  <div className="text-center">
                    <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black-luxury'}`}>{agent.propertiesSold}</span>
                    <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Sold</p>
                  </div>
                </div>

                {/* Expertise */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {agent.expertise.map((exp, j) => (
                    <span
                      key={j}
                      className={`text-[10px] px-2 py-1 rounded-full font-medium ${
                        isDark ? 'bg-gold/10 text-gold' : 'bg-gold/10 text-gold-dark'
                      }`}
                    >
                      {exp}
                    </span>
                  ))}
                </div>

                {/* Awards */}
                <div className="flex items-center gap-1 mb-4">
                  {agent.awards.map((_, j) => (
                    <Award key={j} size={14} className="text-gold" />
                  ))}
                  <span className={`text-xs ml-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                    {agent.awards.length} Awards
                  </span>
                </div>

                {/* Contact */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-gold hover:bg-gold-light text-black-luxury py-2.5 text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-1.5">
                    <Phone size={12} /> Contact
                  </button>
                  <button className={`px-3 py-2.5 border transition-all ${
                    isDark ? 'border-white/10 text-white/70 hover:border-gold hover:text-gold' : 'border-gray-200 text-gray-600 hover:border-gold hover:text-gold'
                  }`}>
                    <Mail size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
