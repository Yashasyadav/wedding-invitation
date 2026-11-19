import React, { useState, useEffect } from 'react';
import { CoverSplash } from './components/sections/CoverSplash';
import { ThemeToggle } from './components/sections/ThemeToggle';
import { AudioPlayer } from './components/sections/AudioPlayer';
import { HeroSection } from './components/sections/HeroSection';
import { CountdownSection } from './components/sections/CountdownSection';
import { BlessingsSection } from './components/sections/BlessingsSection';
import { StorySection } from './components/sections/StorySection';
import { EventsSection } from './components/sections/EventsSection';
import { GallerySection } from './components/sections/GallerySection';
import { RsvpSection } from './components/sections/RsvpSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('wedding_theme') as 'light' | 'dark') || 'light';
  });

  const [isCoverOpen, setIsCoverOpen] = useState(() => {
    return typeof window !== 'undefined' && window.location.search.includes('opened=true');
  });

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

      {/* Optional Audio Player (Hidden if no audio src configured) */}
      <AudioPlayer />

      {/* Main Invitation Sections */}
      <main>
        {/* 1. Hero & Royal Arch */}
        <HeroSection />

        {/* 2. Live Countdown */}
        <CountdownSection />

        {/* 3. Sacred Blessings & Lineage */}
        <BlessingsSection />

        {/* 4. Our Story / Journey Timeline */}
        <StorySection />

        {/* 5. Events & Celebrations (with Map & .ics for all 3 ceremonies) */}
        <EventsSection />

        {/* 6. Photo Gallery (with accessible modal lightbox) */}
        <GallerySection />

        {/* 7. RSVP (WhatsApp Primary CTA + In-Page Form) */}
        <RsvpSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default App;
