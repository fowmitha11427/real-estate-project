import { motion } from 'framer-motion';
import { Shield, Users, Scale, Globe, Briefcase } from 'lucide-react';
import { useTheme } from '../lib/context';

const advantages = [
  {
    icon: Shield,
    title: 'Verified Premium Listings',
    description: 'Every property undergoes rigorous verification to ensure authenticity, legal compliance, and premium quality standards.'
  },
  {
    icon: Users,
    title: 'Dedicated Property Advisors',
    description: 'Your personal advisor guides you through every step, offering bespoke recommendations tailored to your lifestyle.'
  },
  {
    icon: Scale,
    title: 'Legal Assistance',
    description: 'Our in-house legal team handles contracts, due diligence, and regulatory compliance across multiple jurisdictions.'
  },
  {
    icon: Globe,
    title: 'International Client Services',
    description: 'Seamless cross-border transactions with multilingual support, currency management, and global market expertise.'
  },
  {
    icon: Briefcase,
    title: 'End-to-End Transaction',
    description: 'From initial discovery to final handover, we manage every detail so you can focus on what matters most.'
  }
];

export default function WhyAurevia() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`py-24 md:py-32 relative overflow-hidden ${isDark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Why Choose Us</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            The Aurevia Difference
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            We don't just sell properties — we craft extraordinary real estate experiences that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                isDark
                  ? 'bg-white/[0.02] border border-white/5 hover:border-gold/20 hover:bg-white/[0.04]'
                  : 'bg-gray-50 border border-gray-100 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5'
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <advantage.icon size={26} className="text-gold" />
              </div>
              <h3 className={`font-[Playfair_Display] text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                {advantage.title}
              </h3>
              <p className={`leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
