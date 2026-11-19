import React, { useState, useEffect } from 'react';
import { invitationContent } from '../../content/invitation';
import { SectionHeading } from '../primitives/SectionHeading';
import { ArchCard } from '../primitives/ArchCard';

export const CountdownSection: React.FC = () => {
  const { countdown } = invitationContent;

  const calculateTimeLeft = () => {
    const target = new Date(countdown.targetDateISO).getTime();
    const difference = Math.max(0, target - Date.now());

    return {
      [countdown.labels.days]: Math.floor(difference / (1000 * 60 * 60 * 24)),
      [countdown.labels.hours]: Math.floor((difference / (1000 * 60 * 60)) % 24),
      [countdown.labels.mins]: Math.floor((difference / 1000 / 60) % 60),
      [countdown.labels.secs]: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [countdown.targetDateISO]);

  return (
    <section className="section countdown-section" id="countdown">
      <SectionHeading
        eyebrow={countdown.eyebrow}
        title={countdown.title}
        script={true}
      />

      <div className="countdown-grid">
        {Object.entries(timeLeft).map(([label, value]) => (
          <ArchCard key={label} className="countdown-card">
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
          </ArchCard>
        ))}
      </div>
    </section>
  );
};
