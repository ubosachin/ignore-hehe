import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const nicknames = [
  "Golu Molu Panda 🐼",
  "Cutie Patootie 💝",
  "cutie Pie Princess 👑",
  "Pyari Bachi 💓",
  "Betu 😇",
  "SweetHeart 💞",
  "Dimple Dumpling 😊",
  "Sunshine Sparkles ✨",
  "Precious Pumpkin 🎃",
  "Lovely Ladoo 🍯"
];

const NicknameGenerator: React.FC = () => {
  const [nickname, setNickname] = useState(nicknames[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const generateNewNickname = () => {
    setIsAnimating(true);
    const newNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    setNickname(newNickname);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <motion.div
      className="bg-purple-100 p-4 rounded-xl shadow-md text-center max-w-xs mx-auto"
      animate={{ scale: isAnimating ? 0.95 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <h3 className="text-lg font-bold text-purple-600 mb-2">Your Cute Nickname</h3>
      <motion.p
        key={nickname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl font-bold text-pink-500 mb-4"
      >
        {nickname}
      </motion.p>
      <button
        onClick={generateNewNickname}
        className="bg-purple-500 text-white px-4 py-2 rounded-full flex items-center gap-2 mx-auto hover:bg-purple-600 transition-colors"
      >
        <Sparkles className="w-4 h-4" />
        New Nickname
      </button>
    </motion.div>
  );
};

export default NicknameGenerator;