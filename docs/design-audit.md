# Comprehensive Design Audit: Rohan & Sakshi Wedding Invitation

**Source of Truth:**
1. **Figma File:** [Wedding Invitation (Community) – Figma Make](https://www.figma.com/make/yVinXKbAizzyEnJamRxCkD/Wedding-Invitation--Community-?p=f&t=TyGseDPLml5SSW88-0) (Key: `yVinXKbAizzyEnJamRxCkD`). *Audit Note:* Confirmed as a Figma Make file; the standard Figma REST API `/files/` endpoint returns HTTP 400 Bad Request (`File type not supported by this endpoint`), as Figma Make projects do not use standard canvas node trees.
2. **Live Published Site:** [https://draw-width-62186041.figma.site/](https://draw-width-62186041.figma.site/) — Full source code, CSS stylesheet, responsive breakpoints, assets, and computed styles directly extracted, analyzed, and verified.

---

## 1. Top-to-Bottom Section Breakdown

Only sections and components that exist in the verified reference design are listed below.

```
┌─────────────────────────────────────────────────────────────┐
│ 0. Cover / Splash Screen (Interactive Cover & Doorway)      │
├─────────────────────────────────────────────────────────────┤
│    [Floating Theme Toggle Button: Top-Right (Dark / Light)] │
├─────────────────────────────────────────────────────────────┤
│ 1. Hero & Royal Arch (Garland, Rotating Mandala, Petals)    │
├─────────────────────────────────────────────────────────────┤
│ 2. Live Countdown Section (Days, Hours, Mins, Secs)        │
├─────────────────────────────────────────────────────────────┤
│ 3. Blessings & Family Lineage (Quote & Parents' Names)      │
├─────────────────────────────────────────────────────────────┤
│ 4. Our Story / Journey Timeline (3 Milestones with Hearts)  │
├─────────────────────────────────────────────────────────────┤
│ 5. Events & Celebrations (Haldi, Mehendi/Sangeet, Wedding)  │
├─────────────────────────────────────────────────────────────┤
│ 6. Photo Gallery (3 Arched Portrait Cards with Hover)       │
├─────────────────────────────────────────────────────────────┤
│ 7. RSVP Section (WhatsApp RSVP CTA)                         │
├─────────────────────────────────────────────────────────────┤
│ 8. Footer (With Love · Couple Details)                      │
└─────────────────────────────────────────────────────────────┘
```

---

### Section 0: Splash / Opening Cover (`.splash`)
* **Purpose:** An evocative full-screen entryway presenting the invitation cover before revealing the website.
* **Layout:** Full-screen overlay (`position: fixed; inset: 0; z-index: 100`).
* **Background Treatment:** Radial gradient on the dark base (`#2f0808` to `#140505c7`).
* **Visual Elements:**
  * Background image: `/invitation-cover.jpg` with a gentle dark gradient vignette (`linear-gradient(#14050514 38%, #140505c7 100%)`).
  * Center / bottom CTA: Text "OPEN INVITATION" with an elegant gold accent line (`2.5rem × 1px`, color `#e3c788`) above it.
  * Door mechanism in CSS: `.door.door-left` and `.door.door-right` with arched inner border panel (`inset: 18px` / `28px` on desktop, `border-radius: 170px 0 0` and `0 170px 0 0`, dual gold/maroon box-shadow).
* **Exact Copy:**
  * Accessibility label: `"Open Rohan and Sakshi's invitation"`
  * Button label: `"OPEN INVITATION"`
* **Interactions:**
  * Hovering over the seal/cover scales the image smoothly (`scale(1.04)` over `1.2s cubic-bezier(.22,1,.36,1)`).
  * Clicking triggers `.is-open`, animating doors out (`transform: translate(±101%)`) or fading out opacity over `0.8s` with `visibility: hidden`.

---

### Section 1: Floating Utility / Theme Toggle (`.theme-toggle`)
* **Purpose:** Allows guests to switch between Light Mode (Royal Cream & Gold) and Dark Mode (Imperial Maroon & Gold).
* **Layout:** Fixed floating circular button at `top: 16px; right: 16px; z-index: 80; width: 42px; height: 42px; border-radius: 50%`.
* **Styling:**
  * Background: `var(--deep-maroon)` with 78% opacity + `backdrop-filter: blur(10px)`.
  * Border: `1px solid var(--gold)` with 70% opacity.
  * Icon: Stroke width `1.7px`, color `var(--light-gold)`. Sun icon in light mode, Moon crescent icon in dark mode.
  * Transitions: `color 0.35s, background-color 0.35s`.

---

### Section 2: Hero & Royal Arch (`.hero`)
* **Purpose:** Central welcoming hero featuring couple's names, wedding date, blessing context, and ambient animations.
* **Layout:** Centered column within a royal architectural arch (`.hero-arch`), `min-height: 100svh`, flex column, relative isolation.
* **Background Treatment:**
  * Outer: Radial gradient `radial-gradient(circle at 50% 42%, #8f1919 0%, #650b0b 78%), var(--deep-maroon)`.
  * Ambient rotating background: 400×400 SVG Mandala (`.mandala`) scaled to `min(138vw, 750px)`, opacity `0.18`, rotating infinitely.
  * Floating petals: 12 animated rose petals (`.petals i`) falling continuously across the hero.
  * Top Garland: Strung garland (`.garland`) across the top with 20 oscillating floral marigold/rose droplets.
* **The Royal Arch (`.hero-arch` & `.hero-arch-inner`):**
  * Width: `min(100%, 480px)` (mobile/tablet) to `500px` (desktop `≥1100px`).
  * Outer border: `2px solid var(--gold)`, backdrop blur `4px`, background `#650b0b85`, border radius `240px 240px 12px 12px`.
  * Inner border: `1px solid var(--light-gold)` at 70% opacity, border radius `230px 230px 7px 7px`, padding `92px 25px 56px` (`min-height: 575px` mobile, `650px` desktop).
* **Exact Copy:**
  * Hero ornament: `✦`
  * Eyebrow: `"Together with our families"`
  * Heading (`h1`): `Rohan` `&` `Sakshi`
  * Date badge: `"10 · 12 · 2026"`
  * Floral Divider: `<span></span><b>❦</b><span></span>`
  * Subtitle / Story snippet: `"One college. A little destiny. Eight years of choosing each other. Now, a lifetime to look forward to."`
  * Scroll hint: `"SCROLL ⌄"` linking to `#countdown` (with animated bouncing arrow).

---

### Section 3: Live Countdown (`.countdown-section`, `#countdown`)
* **Purpose:** Real-time countdown tracking days, hours, minutes, and seconds until the wedding ceremony.
* **Target Timestamp:** `2026-12-10T19:00:00+05:30` (10 December 2026, 7:00 PM IST).
* **Layout:**
  * Container: `width: min(100%, 820px); margin: 0 auto; padding: 82px 22px 90px`.
  * Grid: 4 columns (`repeat(4, 1fr)`), `gap: 9px` (mobile), `gap: 22px; max-width: 540px` (desktop `≥700px`).
* **Card Treatment (`.countdown-card`):**
  * Arch styling: `border-radius: 60px 60px 7px 7px`, aspect ratio `0.72` (mobile) / `0.82` (desktop).
  * Colors: Light mode background `#fff7e6`, dark mode card `#8f1919`.
  * Border: `1px solid var(--light-gold)`, box shadow `0 16px 40px var(--deep-maroon)` (at 8% opacity).
* **Exact Copy:**
  * Eyebrow: `"Counting every moment"`
  * Heading (`h2` in script font): `"The Big Day Is Near"`
  * Units: `"DAYS"`, `"HOURS"`, `"MINS"`, `"SECS"` (two-digit zero-padded numbers).

---

### Section 4: Blessings & Family Lineage (`.blessing`)
* **Purpose:** Sacred quotation and formal statement of parental blessings.
* **Layout:** Full-width accent band, `min-height: 330px`, centered flex column, `padding: 70px 24px`, `gap: 22px`.
* **Background Treatment:** `radial-gradient(circle at center, #8f1919, #650b0b 72%), var(--deep-maroon)`.
* **Exact Copy:**
  * Top decorative glyph: `❦` (font-size: `22px`, color `var(--light-gold)`)
  * Quote: `“Destiny brought us together. Every day since, we’ve chosen each other.”`
  * Family Line Header: `"With our families’ blessings"`
  * Groom's lineage: `"Rohan Singh Poona, son of Smt Rekha Poona and Shri Bahadur Singh Poona"`
  * Ampersand: `"&"`
  * Bride's lineage: `"Sakshi Kumari, daughter of Smt Sushama Kumari and Shri Shiv Raja"`
  * Bottom decorative glyph: `❦`

---

### Section 5: Our Journey / Love Story Timeline (`.journey`, `#story`)
* **Purpose:** Chronicles the couple's relationship milestones from college to marriage.
* **Layout:** Vertical central timeline.
  * Mobile: Single column with left spine (`left: 20px`).
  * Desktop (`≥700px`): Symmetrical alternating timeline with center spine (`left: 50%; transform: translate(-50%)`).
  * Spine: `width: 2px; background: linear-gradient(var(--gold), var(--rose), var(--gold))`.
  * Milestone nodes: Heart node `.heart-node` (`26px × 26px`, circular, border `1px solid var(--gold)`, background `var(--card)`, color `var(--rose)`, symbol `♥`).
* **Exact Copy:**
  * Eyebrow: `"Our story, so far"`
  * Heading: `"A Path of Moments"`
  * **Milestone 1:**
    * Tag: `"2018 · WHERE IT ALL BEGAN"`
    * Title: `"A beautiful coincidence"`
    * Note: `"From different corners of the country to the same college. Life brought us to NIT Puducherry, and to each other."`
  * **Milestone 2:**
    * Tag: `"THE YEARS IN BETWEEN"`
    * Title: `"Our kind of together"`
    * Note: `"Coffees, adventures, workouts, food hunts and a little healthy competition. Through every season, we kept choosing the same team — us."`
  * **Milestone 3:**
    * Tag: `"2026 · THE NEXT CHAPTER"`
    * Title: `"A lifetime? Yes."`
    * Note: `"Eight years later, we're getting married. With full hearts and our favourite people around us, we're ready for everything that comes next."`

---

### Section 6: Events & Celebrations (`.events`, `#celebrations`)
* **Purpose:** Itinerary for the 3 distinct ceremonies (Haldi, Mehendi & Sangeet, Wedding) with venue and calendar links.
* **Layout:**
  * Container: `width: min(100%, 980px); padding: 40px 22px 72px`.
  * Grid: 1 column on mobile, 2 columns on tablet (`≥700px`), 3 columns on desktop (`≥900px`).
* **Card Treatment (`.event-card`):**
  * Arched card: `border-radius: 160px 160px 10px 10px`, inner inset gold border (`inset: 6px`).
  * Padding: `54px 26px 35px` (mobile), `75px 40px 46px` (tablet), `inline: 28px` (desktop).
  * Divider rule: `width: 42px; height: 1px; background: var(--gold); margin: 15px auto 20px`.
* **Exact Ceremony Details:**
  1. **Haldi Ceremony**
     * Symbol: `✿`
     * Title: `"Haldi"`
     * Date: `"Wednesday, 09 December 2026"`
     * Time: `"10:00 AM onwards"`
     * Venue: `"Hotel Lemon Park, Haldwani, Uttarakhand"`
  2. **Mehendi & Sangeet**
     * Symbol: `◇`
     * Title: `"Mehendi & Sangeet"`
     * Date: `"Wednesday, 09 December 2026"`
     * Time: `"6:00 PM onwards"`
     * Venue: `"Madhuban Banquet Hall, Haldwani, Uttarakhand"`
  3. **The Wedding (Main Event)**
     * Symbol: `❦`
     * Title: `"The Wedding"`
     * Date: `"Thursday, 10 December 2026"`
     * Time: `"Baraat from 7:00 PM"`
     * Venue: `"Kripa Sindhu Banquet and Party Lawn, Haldwani"`
* **Action Buttons (`.event-actions`):**
  * Primary Button: `"View wedding venue"` -> `https://www.google.com/maps/search/?api=1&query=Kripa+Sindhu+Banquet+And+Party+Lawn+Haldwani`
  * Outline Button: `"Add to calendar"` -> Google Calendar Template Link (`text=Rohan%20%26%20Sakshi%27s%20Wedding`, `dates=20261210T133000Z/20261210T183000Z`, `location=Kripa%20Sindhu%20Banquet%20and%20Party%20Lawn%2C%20Haldwani`).

---

### Section 7: Photo Gallery (`.gallery`)
* **Purpose:** Displays portrait photography of the couple in traditional arched frames.
* **Layout:**
  * Container: `width: min(100%, 1000px)`.
  * Grid: 3 columns (`repeat(3, 1fr)`), `gap: 10px` (mobile), `gap: 28px` (desktop).
  * Stagger offset: The center card has `transform: translateY(-14px)` creating a classic elevated triptych effect.
* **Card Treatment (`.gallery-card`):**
  * Aspect ratio: `3 / 4`.
  * Border radius: `90px 90px 8px 8px` (mobile), `150px 150px 10px 10px` (desktop).
  * Background: Elegant striped pattern with gold tint: `repeating-linear-gradient(135deg, transparent 0 11px, var(--gold) 11px 12px), var(--card)`.
  * Caption pill: Bottom overlay with dark gradient `linear-gradient(#0000, #650b0be0)`, padding `34px 8px 16px`, font `Cormorant Garamond italic`.
* **Exact Gallery Items:**
  1. Image: `/wedding-couple.jpg`
     * Label: `"A love worth celebrating"`
     * Alt: `"A bride and groom during a traditional Indian wedding ceremony"`
  2. Image: `/flower-ceremony.jpg`
     * Label: `"Our favourite moments"`
     * Alt: `"Newlyweds surrounded by flower petals"`
  3. Image: `/bridal-henna.jpg`
     * Label: `"Together, always"`
     * Alt: `"Bridal henna and traditional wedding details"`

---

### Section 8: RSVP Section (`.rsvp`, `#rsvp`)
* **Purpose:** Invitation confirmation channel for guests.
* **Layout:** Centered column, `padding: 35px 22px 100px`.
* **Exact Copy:**
  * Title (`h2.script-title`): `"Will you join us?"`
  * Subtext: `"Our favourite people. Our happiest days. It would mean the world to have you with us."`
  * CTA Button: `"RSVP on WhatsApp"`
  * Destination URL: `https://wa.me/919679545488?text=Hi%20Rohan!%20I'd%20like%20to%20RSVP%20for%20your%20wedding.%0AName:%20%0ANumber%20of%20guests:%20%0AEvents%20I%20can%20attend:%20%0AArrival%20plans:%20`

---

### Section 9: Footer (`footer`)
* **Purpose:** Closing benediction and copyright attribution.
* **Layout:** Centered block, background `var(--deep-maroon)`, `padding: 58px 24px 60px`.
* **Exact Copy:**
  * Calligraphic sign-off: `"With Love"` (`Great Vibes`, `48px`, gold gradient clip)
  * Meta line: `"ROHAN & SAKSHI · HALDWANI · 10 DECEMBER 2026"` (`8px`, letter-spacing `0.25em`, color `var(--light-gold)`).

---

## 2. Design Tokens Master Sheet

### Color Palette

| Token Name | Light Mode Value | Dark Mode Value | Semantic Role |
| :--- | :--- | :--- | :--- |
| `--cream` | `#fff7e6` | `#650b0b` | Page canvas background (Warm cream in light, rich maroon in dark) |
| `--card` | `#fff7e6` | `#8f1919` | Surface color for arched cards & interactive modules |
| `--ink` | `#650b0b` | `#fff7e6` | Primary body and heading text color |
| `--subtle` | `#650b0b` (opacity) | `#ebd9b8` | Muted descriptions, dates, and captions |
| `--maroon` | `#650b0b` | `#650b0b` | Deep royal crimson accent |
| `--deep-maroon`| `#650b0b` | `#650b0b` | Hero background, door panels, and footer |
| `--rose` | `#8f1919` | `#8f1919` | Warm crimson accent, heart milestone nodes |
| `--gold` | `#c49a50` | `#c49a50` | Primary royal gold for borders, icons, buttons |
| `--light-gold`| `#d6b56d` | `#d6b56d` | Soft champagne gold for thin lines & ornaments |
| `--leaf` | `#285b3b` | `#285b3b` | Garland string & green floral accents |
| `--gold-gradient` | `linear-gradient(135deg, #c49a50, #d6b56d, #c49a50)` | Same | Gold buttons, headings text-fill, wax seal |

---

### Typography Matrix

| Role | Font Family | Fallback | Weights | Sizes Used | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Calligraphy / Script** | `Great Vibes` | cursive | 400 (Regular) | `clamp(54px, 16vw, 82px)` (Hero names)<br>`clamp(50px, 11vw, 70px)` (RSVP)<br>`48px` (Footer) | `0.92` – `1.0` | Normal |
| **Editorial Serif** | `Cormorant Garamond`| serif | 500, 600, Italic | `clamp(34px, 6vw, 48px)` (Section titles)<br>`clamp(27px, 8vw, 40px)` (Countdown numbers)<br>`clamp(25px, 6vw, 37px)` (Blessing quote)<br>`27px` – `35px` (Events & Story titles)<br>`16px` – `18px` (Body & descriptions) | `1.0` – `1.5` | `0` – `0.28em` (Dates) |
| **Clean Modern Sans**| `Poppins` | sans-serif | 300, 400, 500 | `10px` (Eyebrows)<br>`9px` (Button labels & seals)<br>`8px` (DT labels & footer tags) | `1.6` | `0.14em` – `0.35em` (Caps tracking) |

---

### Border Radii & Architectural Shapes

* **Hero Arch Outer:** `240px 240px 12px 12px`
* **Hero Arch Inner:** `230px 230px 7px 7px`
* **Event Cards:** `160px 160px 10px 10px`
* **Gallery Cards (Mobile):** `90px 90px 8px 8px`
* **Gallery Cards (Desktop):** `150px 150px 10px 10px`
* **Countdown Cards:** `60px 60px 7px 7px`
* **Door Panels (Left):** `border-radius: 170px 0 0`
* **Door Panels (Right):** `border-radius: 0 170px 0 0`
* **Pill Buttons:** `999px` (Full rounded)
* **Circles / Icons:** `50%`

---

### Shadows & Depth Treatments

* **Hero Arch:** `0 30px 80px #650b0b70, 0 0 40px #c49a5014`
* **Gold Seal:** `0 10px 50px #650b0bd9, 0 0 0 4px #8f1919, 0 0 0 5px #c49a50`
* **Gold Button Default:** `0 10px 22px #650b0b2e`
* **Gold Button Hover:** `0 13px 28px #650b0b47` (`transform: translateY(-2px)`)
* **Arch Cards:** `0 16px 40px var(--deep-maroon)` (at 8% opacity)
* **Door Inset Shadow:** `inset 0 0 90px #650b0bd9`

---

## 3. Motion & Animation Catalogue

| Animation Name | Selector / Trigger | Duration | Easing / Timing | Keyframe Spec |
| :--- | :--- | :--- | :--- | :--- |
| **Mandala Rotation** | `.mandala` (Infinite background) | `60s` | `linear infinite` | `0%` to `360deg` rotation around center `(-50%, -50%)`. |
| **Falling Rose Petals**| `.petals i` (12 staggered particles) | `8s` to `16.4s` | `linear infinite` | `transform: translate(80px, 110vh) rotate(520deg)`. Negative delays `-1.2s * p` for natural distribution. |
| **Garland Bobbing** | `.scroll-hint span` | `1.7s` | `ease-in-out infinite` | `50% { transform: translateY(5px); }` |
| **Doorway Opening** | `.door-left` & `.door-right` on open | `1.35s` | `cubic-bezier(.76, 0, .24, 1)` | `door-left: translate(-101%)`, `door-right: translate(101%)`. |
| **Seal Fade & Scale** | `.seal-wrap` on open | `0.4s` opacity, `0.6s` transform | `ease-out` | `opacity: 0; transform: translate(-50%, -50%) scale(0.82)`. |
| **Full Cover Fade** | `.splash` on open | `0.8s` | `ease` | `opacity: 0; visibility: hidden; transition-delay: 0.8s`. |
| **Seal Image Hover** | `.seal-ring img` | `1.2s` | `cubic-bezier(.22, 1, .36, 1)` | `transform: scale(1.04)`. |
| **Button Hover** | `.gold-button` | `0.2s` | `ease` | `transform: translateY(-2px); box-shadow: 0 13px 28px #650b0b47`. |
| **Reduced Motion** | `@media (prefers-reduced-motion: reduce)` | `0.01ms` | N/A | Animations disabled or instant per accessibility standards. |

---

## 4. Asset Inventory & Local Export Status

All verified image assets have been extracted from the published site and safely stored in `/public/assets/`:

| Filename | Local Path | Verified Size | Description / Usage |
| :--- | :--- | :--- | :--- |
| `invitation-cover.jpg` | `/public/assets/invitation-cover.jpg` | 206 KB | Front cover / splash screen photo of bride & groom |
| `wedding-couple.jpg` | `/public/assets/wedding-couple.jpg` | 276 KB | Gallery photo 1: Bride & groom in traditional wedding attire |
| `flower-ceremony.jpg`| `/public/assets/flower-ceremony.jpg` | 220 KB | Gallery photo 2: Newlyweds showered with flower petals |
| `bridal-henna.jpg` | `/public/assets/bridal-henna.jpg` | 226 KB | Gallery photo 3: Intricate bridal mehndi and traditional gold jewelry |
| `favicon.png` | `/public/assets/favicon.png` | 2.4 KB | Site favicon (wax seal emblem) |

### Procedural SVGs & Decorative Glyphs
* **Mandala Background:** Full SVG with 3 concentric rings (`r: 54, 104, 151`), 24 radial petals (`rotate(i * 15deg)`), and 16 star points (`rotate(i * 22.5deg)`). Procedurally rendered for infinite resolution.
* **Theme Icons:** Lightweight inline SVGs for Sun (`path` + `circle`) and Moon (`path`).
* **Decorative Glyphs:**
  * Royal Floral Fleur: `❦` (Unicode U+2766) used in dividers, section accents, and wedding cards.
  * Gold Diamond: `◇` (Unicode U+25C7) used for Mehendi card.
  * Flower Floret: `✿` (Unicode U+273F) used for Haldi card.
  * Starburst: `✦` (Unicode U+2726) used in the Hero arch header.
  * Heart Node: `♥` (Unicode U+2665) used along the Story timeline.

### Audio Asset Assessment
* **Original Published Site:** No audio element was present in the production bundle.
* **Requirement for Phase 2:** A soothing, royalty-free Indian classical / instrumental flute or shehnai track will be integrated with a floating music player toggle (`user-initiated only`, never autoplay, persistent state).

---

## 5. Event Data Master Record

```typescript
export const weddingEventData = {
  couple: {
    groom: "Rohan Singh Poona",
    groomParents: "Smt Rekha Poona and Shri Bahadur Singh Poona",
    bride: "Sakshi Kumari",
    brideParents: "Smt Sushama Kumari and Shri Shiv Raja",
    weddingDateISO: "2026-12-10T19:00:00+05:30",
    displayDate: "10 · 12 · 2026",
    longDate: "Thursday, 10 December 2026",
    location: "Haldwani, Uttarakhand"
  },
  ceremonies: [
    {
      id: "haldi",
      symbol: "✿",
      title: "Haldi",
      date: "Wednesday, 09 December 2026",
      time: "10:00 AM onwards",
      venue: "Hotel Lemon Park, Haldwani, Uttarakhand",
      mapQuery: "Hotel+Lemon+Park+Haldwani"
    },
    {
      id: "mehendi",
      symbol: "◇",
      title: "Mehendi & Sangeet",
      date: "Wednesday, 09 December 2026",
      time: "6:00 PM onwards",
      venue: "Madhuban Banquet Hall, Haldwani, Uttarakhand",
      mapQuery: "Madhuban+Banquet+Hall+Haldwani"
    },
    {
      id: "wedding",
      symbol: "❦",
      title: "The Wedding",
      date: "Thursday, 10 December 2026",
      time: "Baraat from 7:00 PM",
      venue: "Kripa Sindhu Banquet and Party Lawn, Haldwani",
      mapQuery: "Kripa+Sindhu+Banquet+And+Party+Lawn+Haldwani"
    }
  ],
  contacts: {
    rsvpWhatsAppNumber: "919679545488"
  }
};
```

---

## 6. Gap Analysis & Production Enhancements Plan

To elevate the site to senior-craftsperson quality while honoring the original design strictly:

1. **Cover / Splash Screen:**
   * Provide a discrete `"Skip to Invitation"` link on the splash screen for returning guests and accessibility.
2. **Add to Calendar:**
   * The original only has a Google Calendar URL. We will provide a dual action: instant `.ics` file download (works natively on Apple Calendar, Outlook, and Android) + direct Google Calendar web link.
3. **Photo Gallery Lightbox:**
   * In the original, the 3 cards were static images. We will implement an accessible, keyboard-navigable (Arrow keys, Escape) and swipe-friendly modal lightbox with smooth backdrop blur.
4. **RSVP Form:**
   * Provide a dual RSVP experience: an elegant in-page modal / embedded form (Name, Attendance, Guest Count, Dietary/Message) + the direct "RSVP on WhatsApp" button with prefilled template text.
5. **Background Music:**
   * Integrate an unobtrusive floating audio player in the bottom-left corner with gentle sound waves animation, play/pause controls, and volume persistence in `localStorage`.

---

## 7. Phase 2 Build Architecture

### Stack & Tools:
* **Framework:** React 19 / 18 + Vite + TypeScript
* **Styling:** Tailwind CSS with configured tokens matching the CSS variables exactly
* **Motion:** Framer Motion for scroll reveals, door opening sequence, and lightbox modals
* **Icons:** Lucide React (Sun, Moon, Volume2, VolumeX, MapPin, Calendar, Heart, Share2, Check, X)
* **Single Content Source:** `/src/content/invitation.ts` containing all text, dates, venues, links, and imagery.

---

### Phase 2 Implementation Steps:
1. **Scaffold Vite React TS Project** in `d:\invitation` with Tailwind CSS, Framer Motion, and lucide-react.
2. **Configure Tailwind Tokens:** Set up `--cream`, `--card`, `--ink`, `--maroon`, `--gold`, `--light-gold`, `--rose`, `--leaf`, and custom font families (`Great Vibes`, `Cormorant Garamond`, `Poppins`).
3. **Establish Content Layer:** Author `/src/content/invitation.ts` with complete data from Section 5.
4. **Implement Reusable Primitives:**
   * `Container`, `SectionHeading`, `Divider`, `ArchCard`, `GoldButton`, `Reveal` (Framer Motion scroll reveal).
5. **Implement Sections in Order:**
   * `CoverSplash` (Door opening animation + Skip button)
   * `ThemeToggle` & `AudioToggle`
   * `HeroSection` (Mandala SVG, garland, falling petals, arch card)
   * `CountdownSection` (Timezone-safe live timer with expiry handling)
   * `BlessingsSection`
   * `StorySection` (Responsive dual/single alternating timeline)
   * `EventsSection` (Ceremony cards, Google Maps links, `.ics` download)
   * `GallerySection` (Triptych offset + Lightbox viewer)
   * `RsvpSection` (Interactive form + WhatsApp direct link)
   * `Footer`
6. **Responsive & Motion Tuning:** Match 390px, 768px, 1024px, and 1440px widths pixel for pixel.

---
*Audit completed. Awaiting user approval to commence Phase 2.*
