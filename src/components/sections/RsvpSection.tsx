import React, { useState } from 'react';
import { invitationContent } from '../../content/invitation';
import { GoldButton } from '../primitives/GoldButton';
import { Reveal } from '../primitives/Reveal';
import { CheckCircle2, MessageCircle } from 'lucide-react';

export const RsvpSection: React.FC = () => {
  const { rsvp, events, hero } = invitationContent;
  const ceremonyTitles = events.ceremonies.map((c) => c.title);

  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guests, setGuests] = useState('1');
  const [selectedEvents, setSelectedEvents] = useState<string[]>(ceremonyTitles);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string }>({});

  const handleEventToggle = (eventName: string) => {
    setSelectedEvents((prev) =>
      prev.includes(eventName) ? prev.filter((e) => e !== eventName) : [...prev, eventName]
    );
  };

  const validate = () => {
    const newErrors: { name?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const getCustomWhatsAppUrl = () => {
    const text = `Hi ${hero.groomFirstName} & ${hero.brideFirstName}! I'd like to RSVP for your wedding.\nName: ${name || '[Your Name]'}\nAttending: ${attending === 'yes' ? 'Joyfully Accept' : 'Regretfully Decline'}\nNumber of guests: ${guests}\nEvents I can attend: ${selectedEvents.join(', ')}\nNotes: ${notes || 'None'}`;
    return `https://wa.me/${rsvp.whatsAppNumber}?text=${encodeURIComponent(text)}`;
  };

  const defaultWhatsAppLink = `https://wa.me/${rsvp.whatsAppNumber}?text=${encodeURIComponent(rsvp.whatsAppMessageTemplate)}`;

  return (
    <section className="section rsvp" id="rsvp">
      <Reveal>
        <h2 className="script-title">{rsvp.title}</h2>
        <p>{rsvp.copy}</p>

        {/* Primary Action: Direct WhatsApp RSVP */}
        <div className="flex justify-center mb-8">
          <GoldButton
            href={defaultWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[10px] px-8 py-3.5"
          >
            <MessageCircle size={15} />
            {rsvp.whatsAppButtonText}
          </GoldButton>
        </div>
      </Reveal>

      {/* In-Page RSVP Form UI */}
      <Reveal delay={0.15}>
        <div className="max-w-md mx-auto mt-6 p-6 sm:p-8 rounded-2xl border border-gold/40 bg-card shadow-lg text-left">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle2 size={44} className="text-leaf mx-auto mb-3" />
              <h3 className="font-serif text-2xl text-ink font-semibold">Thank You!</h3>
              <p className="text-subtle text-sm mt-2 font-serif italic">
                Your RSVP response has been confirmed. We cannot wait to celebrate with you!
              </p>
              <div className="mt-5">
                <a
                  href={getCustomWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.2em] font-medium text-gold py-2 px-4 rounded-full border border-gold/50 hover:bg-gold/10 transition-colors"
                >
                  <MessageCircle size={12} /> Send copy via WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center pb-2 border-b border-gold/20">
                <h3 className="font-serif text-xl text-ink font-semibold">{rsvp.formTitle}</h3>
                <p className="text-subtle text-xs font-serif italic mt-0.5">{rsvp.formSubtitle}</p>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-[9px] uppercase tracking-[0.2em] font-medium text-gold mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({});
                  }}
                  placeholder="e.g. Priyanshu Sharma"
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-cream/50 border border-gold/40 text-ink placeholder:text-subtle/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
                {errors.name && <p className="text-rose text-[11px] mt-1">{errors.name}</p>}
              </div>

              {/* Attendance Choice */}
              <div>
                <label className="block text-[9px] uppercase tracking-[0.2em] font-medium text-gold mb-1.5">
                  Will You Attend?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setAttending('yes')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      attending === 'yes'
                        ? 'border-gold bg-gold/15 text-gold font-semibold'
                        : 'border-gold/30 bg-transparent text-subtle hover:border-gold/50'
                    }`}
                  >
                    Joyfully Accept
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending('no')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all ${
                      attending === 'no'
                        ? 'border-gold bg-gold/15 text-gold font-semibold'
                        : 'border-gold/30 bg-transparent text-subtle hover:border-gold/50'
                    }`}
                  >
                    Regretfully Decline
                  </button>
                </div>
              </div>

              {attending === 'yes' && (
                <>
                  {/* Number of Guests */}
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-medium text-gold mb-1">
                      Number of Guests Attending
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm rounded-lg bg-cream/50 border border-gold/40 text-ink focus:outline-none focus:border-gold"
                    >
                      <option value="1">1 (Just myself)</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests (Family)</option>
                    </select>
                  </div>

                  {/* Ceremonies Attending */}
                  <div>
                    <label className="block text-[9px] uppercase tracking-[0.2em] font-medium text-gold mb-1.5">
                      Events You Plan to Attend
                    </label>
                    <div className="space-y-1.5 text-xs text-ink">
                      {ceremonyTitles.map((evt) => (
                        <label key={evt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedEvents.includes(evt)}
                            onChange={() => handleEventToggle(evt)}
                            className="rounded border-gold/40 text-gold focus:ring-gold"
                          />
                          <span>{evt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="block text-[9px] uppercase tracking-[0.2em] font-medium text-gold mb-1">
                  Special Wishes or Arrival Notes
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Warm wishes for Rohan & Sakshi..."
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-cream/50 border border-gold/40 text-ink placeholder:text-subtle/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full gold-button mt-2 text-[9px] py-2.5 font-medium cursor-pointer"
              >
                Confirm Attendance
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
};
