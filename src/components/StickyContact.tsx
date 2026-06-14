import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';

export default function StickyContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 left-0 glass-dark rounded-2xl p-4 space-y-3 min-w-[200px]"
          >
            <a href="tel:+12125550199" className="flex items-center gap-3 text-white/80 hover:text-gold text-sm transition-colors py-2 px-3 rounded-lg hover:bg-white/5">
              <Phone size={16} className="text-gold" />
              Call Us Now
            </a>
            <a href="mailto:concierge@aurevia.com" className="flex items-center gap-3 text-white/80 hover:text-gold text-sm transition-colors py-2 px-3 rounded-lg hover:bg-white/5">
              <Mail size={16} className="text-gold" />
              Email Us
            </a>
            <button
              onClick={() => { setOpen(false); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="flex items-center gap-3 text-white/80 hover:text-gold text-sm transition-colors py-2 px-3 rounded-lg hover:bg-white/5 w-full"
            >
              <MessageCircle size={16} className="text-gold" />
              Live Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open ? 'bg-white/10 text-white' : 'bg-gold text-black-luxury shadow-gold/20 animate-pulse-gold'
        }`}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>
    </div>
  );
}
