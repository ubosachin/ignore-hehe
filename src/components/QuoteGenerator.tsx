import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const funnyLoveQuotes = [
  "Tumhare bina life aise hai jaise Maggi bina masale ke... matlab chalegi toh sahi, par maza nahi aayega!",
  "Ek baar hans do na, dil garden-garden ho jayega... warna yeh duniya aaj bhi kaali aur safed lagegi!",
  "Dekho madam, aapke bina life aise hai jaise chai bina shakkar, pizza bina cheese aur Instagram bina reels… matlab chalegi toh sahi, par dil se nahi!",
  "Pizza ki tarah ho tum, thodi cheesy par perfect! ",
  "Tumhare bina main coffee without sugar, boring aur kadvi! ",
  "Aur aap apna mood off karke soch rahi ho ki main manane nahi aunga? Arre main toh woh banda hoon jo free ka WiFi milne pe bhi ‘thank you’ bol deta hoon, toh aapke bina kaise chain se baith sakta hoon?"
];

const QuoteGenerator: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(funnyLoveQuotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewQuote = () => {
    setIsAnimating(true);
    const newQuote = funnyLoveQuotes[Math.floor(Math.random() * funnyLoveQuotes.length)];
    setCurrentQuote(newQuote);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
        animate={{ scale: isAnimating ? 0.95 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <h3 className="text-xl font-bold text-pink-600 mb-4">Mood Uplift Ka Try 1</h3>
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg text-gray-700 mb-6"
        >
          {currentQuote}
        </motion.p>
        <button
          onClick={generateNewQuote}
          className="bg-pink-500 text-white px-6 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-pink-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Generate More!
        </button>
      </motion.div>
    </div>
  );
};

export default QuoteGenerator;