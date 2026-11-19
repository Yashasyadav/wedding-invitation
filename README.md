# Rohan & Sakshi — Wedding Invitation Website

A luxury, hand-crafted royal wedding invitation website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion. Faithfully reverse-engineered and rebuilt from the ground up to match the original design with responsive fidelity across all screen sizes (390px, 768px, 1024px, 1440px+).

---

## 🌟 Features & Highlights

- **Interactive Cover & Entrance:** Full-bleed royal invitation cover photo with smooth zoom on hover, wax seal aesthetic, door panels, and a discrete `"Skip to Invitation →"` accessibility option.
- **Floating Theme Switcher:** Seamless toggle between **Light Mode** (Royal Cream & Gold) and **Dark Mode** (Imperial Maroon & Gold) with `localStorage` persistence.
- **Hero & Royal Arch:** 
  - Ambient rotating 400×400 SVG Mandala (`60s linear infinite`).
  - Top marigold and rose floral garland with oscillating drops.
  - 12 continuously falling staggered rose petals.
  - Royal arched architectural window with glassmorphism backdrop blur and dual gold border.
  - Bouncing `"SCROLL ⌄"` hint.
- **Live Timezone-Safe Countdown:** Live timer ticking down to 10 December 2026 at 19:00 IST (`2026-12-10T19:00:00+05:30`) across 4 arched cards (`DAYS`, `HOURS`, `MINS`, `SECS`).
- **Sacred Blessings & Lineage:** Elegant quotation flanked by traditional `❦` floral glyphs and complete parental lineage for both families.
- **Love Story Timeline:** Interactive relationship journey timeline (symmetrical alternating layout on desktop/tablet, single left-aligned column on mobile) marked with heart nodes.
- **Ceremonies & Schedule:** Arched cards for all three events (**Haldi**, **Mehendi & Sangeet**, and **The Wedding**). Each event card includes:
  - `"View venue"` direct Google Maps button.
  - `"Add to calendar"` Google Calendar link.
  - Instant `.ics` calendar file download (RFC 5545 compatible with Apple Calendar, Outlook, and Google Calendar).
- **Photo Gallery & Lightbox:**
  - 3-card triptych with custom striped gold background and elevated center portrait card (`translateY(-14px)`).
  - High-fidelity arched Lightbox modal with keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`) and mobile touch-swipe support.
- **RSVP Experience:**
  - Primary Action: Direct WhatsApp RSVP with pre-filled message template.
  - In-Page Form: Client-side validated form (Full Name, Attendance, Number of Guests, Ceremonies, Wishes) with instant feedback and a confirmation state.
- **Background Music Player (Optional):**
  - Fully built audio player with volume/wave indicator and persistent state.
  - By default, hidden so no copyrighted music is embedded. To enable, simply drop an `.mp3` file into `public/assets/` and point to it in `src/content/invitation.ts`.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+)

### Installation
```bash
# 1. Clone or navigate to the project directory
cd invitation

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
The optimized production bundle will be output to the `dist/` directory.

---

## ✍️ How to Edit Content (`src/content/invitation.ts`)

ALL website content, wedding dates, family details, ceremony schedules, and assets are centralized in:
📂 **`src/content/invitation.ts`**

You do not need to touch any UI components to update the couple's information.

### 1. Couple & Event Details
```typescript
hero: {
  ornament: "✦",
  eyebrow: "Together with our families",
  groomFirstName: "Rohan",
  brideFirstName: "Sakshi",
  displayDate: "10 · 12 · 2026",
  copy: "One college. A little destiny. Eight years of choosing each other...",
  scrollHintText: "SCROLL",
}
```

### 2. Ceremonies & Calendar Dates
To adjust event dates, times, venues, or Google Maps queries, edit the `events.ceremonies` array:
```typescript
{
  id: "wedding",
  symbol: "❦",
  title: "The Wedding",
  date: "Thursday, 10 December 2026",
  time: "Baraat from 7:00 PM",
  venue: "Kripa Sindhu Banquet and Party Lawn, Haldwani",
  mapQuery: "Kripa+Sindhu+Banquet+And+Party+Lawn+Haldwani",
  calendarStartDate: "2026-12-10T19:00:00+05:30",
  calendarEndDate: "2026-12-11T00:00:00+05:30",
}
```

### 3. Adding Background Music
1. Place your royalty-free or purchased audio track (e.g. `wedding-flute.mp3`) in `public/assets/`.
2. In `src/content/invitation.ts`, update `audio`:
```typescript
audio: {
  src: "/assets/wedding-flute.mp3", // Setting a path here automatically enables the player UI
  title: "Auspicious Wedding Melody",
}
```
3. If `src` is left empty `""`, the music player UI remains completely hidden.

### 4. WhatsApp RSVP Number
Change `rsvp.whatsAppNumber` to the host's phone number with international country code (no `+` or spaces, e.g. `"919679545488"`):
```typescript
rsvp: {
  whatsAppNumber: "919679545488",
  whatsAppButtonText: "RSVP on WhatsApp",
  ...
}
```

---

## 🚢 Deployment

### Deploying to Vercel
1. Push your repository to GitHub / GitLab / Bitbucket.
2. In the Vercel dashboard, click **"Add New Project"** and select the repository.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository on Netlify.
2. Build Command: `npm run build`
3. Publish Directory: `dist`
4. Click **Deploy Site**.

Alternatively, run with Netlify CLI:
```bash
npx netlify deploy --prod --dir=dist
```

---

## 🎨 Design Tokens

- **Light Mode Canvas:** `#fff7e6` (Royal Cream)
- **Dark Mode Canvas:** `#650b0b` (Imperial Crimson / Maroon)
- **Primary Text / Heading:** `#650b0b` (Light Mode) / `#fff7e6` (Dark Mode)
- **Subtle Muted Text:** `#650b0b` (Light Mode) / `#ebd9b8` (Dark Mode)
- **Primary Gold:** `#c49a50`
- **Light Champagne Gold:** `#d6b56d`
- **Rose / Heart Accent:** `#8f1919`
- **Garland Foliage Green:** `#285b3b`
- **Typography:**
  - *Calligraphy / Script:* `Great Vibes`
  - *Editorial Titles / Numerals:* `Cormorant Garamond`
  - *Body / Caps Eyebrows:* `Poppins`
