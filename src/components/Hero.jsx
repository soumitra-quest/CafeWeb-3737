import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')] 
        bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl px-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Welcome to Café Aroma
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Experience the perfect blend of artisanal coffee and delightful pastries
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brown-600 text-white px-8 py-3 rounded-full 
            hover:bg-brown-700 transition-colors duration-200"
          >
            View Menu
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}