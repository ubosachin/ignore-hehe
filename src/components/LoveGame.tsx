import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FallingHeart {
  id: number;
  x: number;
  y: number;
}

const LoveGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [gameActive, setGameActive] = useState(false);
  const [message, setMessage] = useState('');

  const funnyMessages = [
    "Aap ne 10 pyaar chura liye! Police bulaun? 👮‍♂️",
    "Itna pyaar? Sourav jealous ho jayega! 😂",
    "Love collector pro ban gaye aap toh! 🏆",
    "Pyaar ki factory chal rahi hai yahan! 🏭",
    "Dil churane ki ninja nikli aap! 🥷"
  ];

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setMessage('');
  };

  useEffect(() => {
    if (!gameActive) return;

    const createHeart = () => {
      const newHeart: FallingHeart = {
        id: Date.now(),
        x: Math.random() * (window.innerWidth - 40),
        y: -50,
      };
      setHearts(prev => [...prev, newHeart]);
    };

    const interval = setInterval(createHeart, 1000);
    const moveHearts = setInterval(() => {
      setHearts(prev => 
        prev
          .map(heart => ({ ...heart, y: heart.y + 5 }))
          .filter(heart => heart.y < window.innerHeight)
      );
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(moveHearts);
    };
  }, [gameActive]);

  const catchHeart = (heartId: number) => {
    setHearts(prev => prev.filter(heart => heart.id !== heartId));
    setScore(prev => {
      const newScore = prev + 1;
      if (newScore % 10 === 0) {
        const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
        setMessage(randomMessage);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
      return newScore;
    });
  };

  return (
    <div className="relative h-[400px] w-full max-w-2xl mx-auto bg-pink-50 rounded-xl overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-white/80 rounded-full px-4 py-2">
        Score: {score}
      </div>
      
      {!gameActive ? (
        <div className="h-full flex items-center justify-center">
          <button
            onClick={startGame}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-bold hover:bg-pink-600 transition-colors"
          >
            Sourav Ka Pyar Jama Karlo jo ki aapka hi hai!
          </button>
        </div>
      ) : (
        hearts.map(heart => (
          <motion.div
            key={heart.id}
            className="absolute cursor-pointer"
            style={{ left: heart.x, top: heart.y }}
            onClick={() => catchHeart(heart.id)}
            whileHover={{ scale: 1.2 }}
          >
            <Heart className="w-8 h-8 text-red-500 fill-current" />
          </motion.div>
        ))
      )}
      
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg text-center"
        >
          <p className="text-xl font-bold text-pink-600">{message}</p>
        </motion.div>
      )}
    </div>
  );
};

export default LoveGame;