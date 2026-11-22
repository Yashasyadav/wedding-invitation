export interface Milestone {
  date: string;
  title: string;
  note: string;
}

export interface Ceremony {
  id: string;
  symbol: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  mapQuery: string;
  calendarStartDate: string; // ISO 8601 string or UTC for .ics
  calendarEndDate: string;
}

export interface GalleryPhoto {
  image: string;
  label: string;
  alt: string;
}

export interface InvitationContent {
  meta: {
    title: string;
    description: string;
    favicon: string;
    ogImage: string;
  };
  audio: {
    // If set to an audio path (e.g. '/assets/music.mp3'), the player UI will automatically display.
    // If empty string (""), the player remains hidden.
    src: string;
    title: string;
  };
  cover: {
    image: string;
    openButtonText: string;
    skipButtonText: string;
    ariaLabel: string;
  };
  hero: {
    ornament: string;
    eyebrow: string;
    groomFirstName: string;
    brideFirstName: string;
    displayDate: string;
    copy: string;
    scrollHintText: string;
  };
  countdown: {
    targetDateISO: string; // 2026-12-13T06:35:00+05:30
    eyebrow: string;
    title: string;
    labels: {
      days: string;
      hours: string;
      mins: string;
      secs: string;
    };
    ceremonyPassedMessage: string;
  };
  blessing: {
    quote: string;
    header: string;
    groomFullName: string;
    groomParents: string;
    brideFullName: string;
    brideParents: string;
  };
  story: {
    eyebrow: string;
    title: string;
    milestones: Milestone[];
  };
  events: {
    eyebrow: string;
    title: string;
    ceremonies: Ceremony[];
    viewVenueButtonText: string;
    addToCalendarButtonText: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    photos: GalleryPhoto[];
  };
  rsvp: {
    title: string;
    copy: string;
    whatsAppNumber: string;
    whatsAppMessageTemplate: string;
    whatsAppButtonText: string;
    formTitle: string;
    formSubtitle: string;
    submitButtonText: string;
  };
  footer: {
    signOff: string;
    metaLine: string;
  };
}

export const invitationContent: InvitationContent = {
  meta: {
    title: "Agan & Shakthi · 12 & 13 December 2026",
    description: "Celebrate Agan and Shakthi's wedding on 12 & 13 December 2026 at ABS Raj Hi Tech Mahal, Kalayarkovil, Sivaganga district.",
    favicon: "/assets/favicon.png",
    ogImage: "/assets/invitation-cover.jpg",
  },
  audio: {
    // Leave empty by default; set to e.g. '/assets/nadaswaram-wedding.mp3' to enable floating player
    src: "",
    title: "Auspicious Wedding Melody",
  },
  cover: {
    image: "/assets/invitation-cover.jpg",
    openButtonText: "OPEN INVITATION",
    skipButtonText: "Skip to Invitation",
    ariaLabel: "Open Agan and Shakthi's invitation",
  },
  hero: {
    ornament: "✦",
    eyebrow: "Together with our families",
    groomFirstName: "Agan",
    brideFirstName: "Shakthi",
    displayDate: "12 & 13 · 12 · 2026",
    copy: "Two souls, one beautiful journey. With love in our hearts and the blessings of our elders, we begin our forever.",
    scrollHintText: "SCROLL",
  },
  countdown: {
    targetDateISO: "2026-12-13T06:35:00+05:30", // Muhurtham: 13 Dec 2026, 6:35 AM IST
    eyebrow: "Counting every moment",
    title: "The Big Day Is Near",
    labels: {
      days: "DAYS",
      hours: "HOURS",
      mins: "MINS",
      secs: "SECS",
    },
    ceremonyPassedMessage: "The celebration has begun! Thank you for blessing us.",
  },
  blessing: {
    quote: "“Destiny brought us together. Every day since, we’ve chosen each other.”",
    header: "With our families’ blessings",
    groomFullName: "Agan",
    groomParents: "Son of our beloved parents", // Pending parent names
    brideFullName: "Shakthi",
    brideParents: "Daughter of our beloved parents", // Pending parent names
  },
  story: {
    eyebrow: "Our story, so far",
    title: "A Path of Moments",
    milestones: [
      {
        date: "WHERE IT ALL BEGAN",
        title: "A beautiful beginning",
        note: "From the very first conversation to countless shared memories, fate brought us together on this wonderful path.",
      },
      {
        date: "THE JOURNEY OF LOVE",
        title: "Growing together",
        note: "Through every step, laughter, and milestone, understanding turned to love, and love grew into an unbreakable bond.",
      },
      {
        date: "DECEMBER 2026 · THE NEXT CHAPTER",
        title: "A lifetime together",
        note: "Surrounded by our dearest family and friends, we step into the sacred bond of marriage with gratitude and joy.",
      },
    ],
  },
  events: {
    eyebrow: "Mark your calendars",
    title: "Join Us in Celebration",
    viewVenueButtonText: "View venue",
    addToCalendarButtonText: "Add to calendar",
    ceremonies: [
      {
        id: "engagement",
        symbol: "◇",
        title: "Engagement",
        date: "Saturday, 12 December 2026",
        time: "6:00 PM onwards",
        venue: "ABS Raj Hi Tech Mahal, Kalayarkovil, Sivaganga District",
        mapQuery: "ABS+Raj+Hi+Tech+Mahal+Kalayarkovil",
        calendarStartDate: "2026-12-12T18:00:00+05:30",
        calendarEndDate: "2026-12-12T21:00:00+05:30",
      },
      {
        id: "muhurtham",
        symbol: "❦",
        title: "Muhurtham",
        date: "Sunday, 13 December 2026",
        time: "6:35 AM – 7:30 AM",
        venue: "ABS Raj Hi Tech Mahal, Kalayarkovil, Sivaganga District",
        mapQuery: "ABS+Raj+Hi+Tech+Mahal+Kalayarkovil",
        calendarStartDate: "2026-12-13T06:35:00+05:30",
        calendarEndDate: "2026-12-13T08:00:00+05:30",
      },
      {
        id: "reception",
        symbol: "✿",
        title: "Reception",
        date: "Sunday, 13 December 2026",
        time: "11:00 AM onwards",
        venue: "ABS Raj Hi Tech Mahal, Kalayarkovil, Sivaganga District",
        mapQuery: "ABS+Raj+Hi+Tech+Mahal+Kalayarkovil",
        calendarStartDate: "2026-12-13T11:00:00+05:30",
        calendarEndDate: "2026-12-13T15:00:00+05:30",
      },
    ],
  },
  gallery: {
    eyebrow: "The little things that make us, us",
    title: "Our Kind of Together",
    photos: [
      {
        image: "/assets/wedding-couple.jpg",
        label: "A love worth celebrating",
        alt: "A bride and groom during a traditional wedding ceremony",
      },
      {
        image: "/assets/flower-ceremony.jpg",
        label: "Our favourite moments",
        alt: "Newlyweds surrounded by flower petals",
      },
      {
        image: "/assets/bridal-henna.jpg",
        label: "Together, always",
        alt: "Bridal henna and traditional wedding details",
      },
    ],
  },
  rsvp: {
    title: "Will you join us?",
    copy: "Our favourite people. Our happiest days. It would mean the world to have you with us.",
    whatsAppNumber: "919679545488", // Update with Agan / Shakthi's WhatsApp number when ready
    whatsAppMessageTemplate: "Hi Agan & Shakthi! I'd like to RSVP for your wedding.\nName: \nNumber of guests: \nEvents I can attend: \nArrival plans: ",
    whatsAppButtonText: "RSVP on WhatsApp",
    formTitle: "Grace Our Celebration",
    formSubtitle: "Kindly favor us with your response by 25 November 2026",
    submitButtonText: "Bless The Couple & RSVP",
  },
  footer: {
    signOff: "With Love",
    metaLine: "AGAN & SHAKTHI · KALAYARKOVIL · 12 & 13 DECEMBER 2026",
  },
};
