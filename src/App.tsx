import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Gift, Sparkles, Music, Hand as Panda, Coffee } from 'lucide-react';
import useSound from 'use-sound';
import confetti from 'canvas-confetti';
import QuoteGenerator from './components/QuoteGenerator';
import NicknameGenerator from './components/NicknameGenerator';
import LoveGame from './components/LoveGame';
import FloatingHearts from './components/FloatingHearts';
import DancingPanda from './components/DancingPanda';
import VirtualChai from './components/VirtualChai';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  const [showHug, setShowHug] = useState(false);
  const [showChai, setShowChai] = useState(false);
  const [playPop] = useSound('../../sajda.mp3');
  const [playMusic, { stop: stopMusic }] = useSound('../../sajda.mp3', {
    volume: 0.5,
  });

  const handleSurpriseClick = () => {
    playPop();
    setShowSurprise(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setShowSurprise(false), 2000);
  };

  const handleHugClick = () => {
    playPop();
    setShowHug(true);
    setTimeout(() => setShowHug(false), 2000);
  };

  const handleChaiClick = () => {
    setShowChai(true);
    setTimeout(() => setShowChai(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 py-8 px-4 relative overflow-hidden">
      <FloatingHearts />
      
      <main className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-pacifico text-pink-600 text-center mb-8"
        >
          Oyeee! Biwi ji 💝
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/30 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center mb-8"
        >
          <DancingPanda />
          <p className="text-xl text-gray-700 mt-4">
            Oyeeee! Aapka mood kharab hai? Mujhse zyada cute kaun hai bolo? 🥺
          </p>
        </motion.div>

        <div className="grid gap-8 mb-8">
          <QuoteGenerator />
          <NicknameGenerator />
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            onClick={handleSurpriseClick}
          >
            <Gift className="w-5 h-5" />
            Mood Thik Karne Ka Magic Button
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            onClick={handleHugClick}
          >
            <Heart className="w-5 h-5" />
            Virtual Hug!
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            onClick={() => playMusic()}
          >
            <Music className="w-5 h-5" />
            Play Music
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2"
            onClick={handleChaiClick}
          >
            <Coffee className="w-5 h-5" />
            Virtual Chai Time
          </motion.button>
        </div>

        <LoveGame />

        <AnimatePresence>
          {showSurprise && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
              <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4">
                <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-2xl font-pacifico text-pink-600 mb-4">
                  Haww! Aap to hass rahe ho! Ab aise hi rehna, warna main sad ho jaunga! 🥺
                </h2>
              </div>
            </motion.div>
          )}

          {showHug && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
              <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4">
                <Panda className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h2 className="text-2xl font-pacifico text-pink-600 mb-4">
                  Sending 1000 tight hugs to Awantika ji! 🤗❤️
                </h2>
              </div>
            </motion.div>
          )}

          {showChai && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            >
              <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4">
                <VirtualChai />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;