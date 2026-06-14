import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../lib/context';
import { locations } from '../lib/data';

export default function ContactSection() {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', budget: '', interest: '', location: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass = `w-full py-3.5 px-4 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold/30 ${
    isDark ? 'bg-white/5 text-white border border-white/10 placeholder-white/30' : 'bg-gray-50 text-gray-800 border border-gray-200 placeholder-gray-400'
  }`;

  return (
    <section id="contact" className={`py-24 md:py-32 ${isDark ? 'bg-[#0d0d0d]' : 'bg-white'}`}>
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
            <span className="text-gold text-sm tracking-[0.3em] uppercase">Get In Touch</span>
            <div className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className={`font-[Playfair_Display] text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
            Begin Your Journey
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
            Our team of luxury real estate experts is ready to guide you to your perfect property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className={`rounded-2xl p-8 ${isDark ? 'glass-dark' : 'glass-light shadow-xl'}`}>
              <h3 className={`font-[Playfair_Display] text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                Our Offices
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-black-luxury'}`}>Headquarters</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>500 Park Avenue, Suite 2800<br/>New York, NY 10022</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-black-luxury'}`}>Phone</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>+1 (212) 555-0199<br/>+1 (212) 555-0200</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-black-luxury'}`}>Email</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>concierge@aurevia.com<br/>investments@aurevia.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-black-luxury'}`}>Hours</h4>
                    <p className={`text-sm mt-1 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>Mon - Fri: 9:00 AM - 7:00 PM<br/>Sat: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`rounded-2xl p-6 ${isDark ? 'glass-dark' : 'glass-light shadow-xl'}`}>
              <h4 className={`font-semibold text-sm mb-4 ${isDark ? 'text-white' : 'text-black-luxury'}`}>Follow Us</h4>
              <div className="flex gap-3">
                {['Instagram', 'LinkedIn', 'Twitter', 'YouTube'].map(social => (
                  <button
                    key={social}
                    className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                      isDark
                        ? 'bg-white/5 text-white/60 hover:bg-gold/10 hover:text-gold border border-white/5'
                        : 'bg-gray-50 text-gray-600 hover:bg-gold/10 hover:text-gold border border-gray-100'
                    }`}
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className={`rounded-2xl p-8 md:p-10 ${isDark ? 'glass-dark' : 'glass-light shadow-xl'}`}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle size={60} className="text-gold mx-auto mb-4" />
                  <h3 className={`font-[Playfair_Display] text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                    Thank You!
                  </h3>
                  <p className={isDark ? 'text-white/60' : 'text-gray-600'}>
                    Our team will contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className={`font-[Playfair_Display] text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black-luxury'}`}>
                    Luxury Consultation Request
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Full Name *</label>
                      <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Email *</label>
                      <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Phone</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>
                    <div>
                      <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Budget Range</label>
                      <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} className={inputClass}>
                        <option value="">Select budget</option>
                        <option>$5M - $10M</option>
                        <option>$10M - $25M</option>
                        <option>$25M - $50M</option>
                        <option>$50M+</option>
                      </select>
                    </div>
                    <div>
                      <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Property Interest</label>
                      <select value={form.interest} onChange={e => setForm({...form, interest: e.target.value})} className={inputClass}>
                        <option value="">Select type</option>
                        <option>Oceanfront Villa</option>
                        <option>Sky Penthouse</option>
                        <option>Smart Home</option>
                        <option>Private Estate</option>
                        <option>Investment Property</option>
                        <option>Commercial Space</option>
                      </select>
                    </div>
                    <div>
                      <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Preferred Location</label>
                      <select value={form.location} onChange={e => setForm({...form, location: e.target.value})} className={inputClass}>
                        <option value="">Select location</option>
                        {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className={`text-xs font-medium mb-2 block ${isDark ? 'text-white/60' : 'text-gray-500'}`}>Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Tell us about your ideal property..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full bg-gold hover:bg-gold-light text-black-luxury py-4 font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Submit Inquiry
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
