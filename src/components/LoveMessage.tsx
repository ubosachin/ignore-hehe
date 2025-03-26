import React from 'react';
import { motion } from 'framer-motion';

interface LoveMessageProps {
  message: string;
}

const LoveMessage: React.FC<LoveMessageProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="message-card p-6 rounded-xl shadow-lg max-w-md mx-auto text-center"
    >
      <p className="text-xl font-pacifico text-pink-700">{message}</p>
    </motion.div>
  );
};

export default LoveMessage;