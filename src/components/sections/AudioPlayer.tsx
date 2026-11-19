import React, { useState, useRef } from 'react';
import { invitationContent } from '../../content/invitation';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const { audio } = invitationContent;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Requirement: Hide UI until an audio file path is configured in invitation.ts
  if (!audio.src || audio.src.trim() === '') {
    return null;
  }

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Audio playback error:', err);
      });
    }
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2">
      <audio
        ref={audioRef}
        src={audio.src}
        loop
        preload="none"
        onEnded={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={togglePlay}
        className="w-10 h-10 rounded-full flex items-center justify-center border border-gold/70 bg-deep-maroon/80 text-light-gold backdrop-blur-md shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </button>
      {isPlaying && (
        <span className="text-[10px] tracking-widest uppercase text-light-gold bg-deep-maroon/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
          {audio.title}
        </span>
      )}
    </div>
  );
};
