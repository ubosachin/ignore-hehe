import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
        >
          <Heart 
            className="text-pink-400/30" 
            size={Math.random() * 20 + 20}
            fill="currentColor"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;