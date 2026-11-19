import React, { useState, useEffect } from 'react';
import { CoverSplash } from './components/sections/CoverSplash';
import { ThemeToggle } from './components/sections/ThemeToggle';
import { AudioPlayer } from './components/sections/AudioPlayer';
import { HeroSection } from './components/sections/HeroSection';
import { CountdownSection } from './components/sections/CountdownSection';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('wedding_theme') as 'light' | 'dark') || 'light';
  });

  const [isCoverOpen, setIsCoverOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('wedding_theme', theme);
  }, [theme]);

  return (
    <div className="app">
      {/* 0. Opening Cover & Doorway */}
      <CoverSplash isOpen={isCoverOpen} onOpen={() => setIsCoverOpen(true)} />

      {/* Floating Theme Toggle (Light / Dark) */}
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {/* Optional Audio Player (Hidden if no audio src) */}
      <AudioPlayer />

      {/* Main Content */}
      <main>
        {/* 1. Hero & Royal Arch */}
        <HeroSection />

        {/* 2. Live Countdown */}
        <CountdownSection />
      </main>
    </div>
  );
};

export default App;
