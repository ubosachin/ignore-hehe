import React from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const VirtualChai: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-gradient-to-br from-amber-100 to-amber-200 p-4 rounded-xl shadow-lg cursor-pointer"
    >
      <Coffee className="w-8 h-8 text-amber-600 mx-auto mb-2" />
      <p className="text-amber-700 font-medium text-center">
        Ek garam chai ki pyaali ho jaye! ☕️
      </p>
    </motion.div>
  );
};

export default VirtualChai;