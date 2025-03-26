import React from 'react';
import { motion } from 'framer-motion';
import { Hand as Panda } from 'lucide-react';

const DancingPanda: React.FC = () => {
  const danceAnimation = {
    dance: {
      y: [0, -10, 0],
      rotate: [-5, 5, -5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={danceAnimation}
      animate="dance"
      className="inline-block"
    >
      <Panda className="w-16 h-16 text-pink-600" />
    </motion.div>
  );
};

export default DancingPanda;