import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import { Music, Pause, Play } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Howl | null>(null);

  useEffect(() => {
    const backgroundMusic = new Howl({
      src: ['../../sajda.mp3'],
      loop: true,
      volume: 0.5,
    });
    setSound(backgroundMusic);

    return () => {
      backgroundMusic.unload();
    };
  }, []);

  const togglePlay = () => {
    if (!sound) return;
    
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed top-4 right-4 bg-white/30 p-3 rounded-full backdrop-blur-sm hover:bg-white/40 transition-all"
    >
      {isPlaying ? (
        <Pause className="w-6 h-6 text-pink-600" />
      ) : (
        <Play className="w-6 h-6 text-pink-600" />
      )}
    </button>
  );
};

export default MusicPlayer;