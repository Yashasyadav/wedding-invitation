import React from 'react';
import { invitationContent, Ceremony } from '../../content/invitation';
import { SectionHeading } from '../primitives/SectionHeading';
import { ArchCard } from '../primitives/ArchCard';
import { GoldButton } from '../primitives/GoldButton';
import { Reveal } from '../primitives/Reveal';
import { generateICS, getGoogleCalendarUrl } from '../../utils/calendar';
import { MapPin, Calendar, Download } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { events, hero } = invitationContent;
  const coupleName = `${hero.groomFirstName} & ${hero.brideFirstName}`;

  const mainWeddingCeremony = events.ceremonies.find((c) => c.id === 'wedding') || events.ceremonies[2];

  const handleDownloadICS = (e: React.MouseEvent, ceremony: Ceremony) => {
    e.preventDefault();
    generateICS(ceremony, coupleName);
  };

  return (
    <section className="section events" id="celebrations">
      <SectionHeading
        eyebrow={events.eyebrow}
        title={events.title}
      />

      <div className="event-grid">
        {events.ceremonies.map((ceremony, idx) => (
          <Reveal key={ceremony.id} delay={idx * 0.1}>
            <ArchCard className="event-card text-center h-full flex flex-col justify-between">
              <div>
                <span className="event-icon" aria-hidden="true">
                  {ceremony.symbol}
                </span>
                <h3>{ceremony.title}</h3>
                <div className="event-rule" />

                <dl>
                  <div>
                    <dt>Date</dt>
                    <dd>{ceremony.date}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{ceremony.time}</dd>
                  </div>
                  <div>
                    <dt>Venue</dt>
                    <dd>{ceremony.venue}</dd>
                  </div>
                </dl>
              </div>

              {/* Per-Ceremony Actions: View Venue & Add to Calendar (.ics + Google) */}
              <div className="mt-6 pt-5 border-t border-gold/20 flex flex-col gap-2.5">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ceremony.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-medium text-gold hover:text-light-gold py-1.5 px-3 rounded-full border border-gold/40 hover:border-gold transition-colors"
                >
                  <MapPin size={11} /> {events.viewVenueButtonText}
                </a>

                <div className="flex items-center justify-center gap-2">
                  <a
                    href={getGoogleCalendarUrl(ceremony, coupleName)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1 text-[8px] uppercase tracking-[0.16em] font-medium text-subtle hover:text-gold py-1 px-2.5 rounded-full border border-gold/20 hover:border-gold/40 transition-colors"
                    title="Add to Google Calendar"
                  >
                    <Calendar size={10} /> Google
                  </a>

                  <button
                    type="button"
                    onClick={(e) => handleDownloadICS(e, ceremony)}
                    className="inline-flex items-center justify-center gap-1 text-[8px] uppercase tracking-[0.16em] font-medium text-subtle hover:text-gold py-1 px-2.5 rounded-full border border-gold/20 hover:border-gold/40 transition-colors"
                    title="Download iCal (.ics) file"
                  >
                    <Download size={10} /> .ICS File
                  </button>
                </div>
              </div>
            </ArchCard>
          </Reveal>
        ))}
      </div>

      {/* Main Wedding Overall Quick Actions */}
      <Reveal delay={0.3} className="event-actions">
        <GoldButton
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mainWeddingCeremony.mapQuery)}`}
          target="_blank"
          rel="noreferrer"
        >
          View wedding venue
        </GoldButton>

        <GoldButton
          outline
          href={getGoogleCalendarUrl(mainWeddingCeremony, coupleName)}
          target="_blank"
          rel="noreferrer"
        >
          Add to calendar
        </GoldButton>
      </Reveal>
    </section>
  );
};
