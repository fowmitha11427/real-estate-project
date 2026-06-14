import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-black-luxury flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto">
            <motion.path
              d="M50 15 L85 75 L15 75 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="50"
              cy="52"
              r="6"
              fill="#D4AF37"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="font-[Playfair_Display] text-3xl font-bold text-white tracking-wider">AUREVIA</h1>
          <p className="text-gold text-xs tracking-[0.4em] mt-1 uppercase">Estates</p>
        </motion.div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '120px' }}
          transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}
          className="h-[1px] bg-gold mx-auto mt-6"
        />
      </div>
    </motion.div>
  );
}
