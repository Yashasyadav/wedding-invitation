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
    targetDateISO: string; // 2026-12-10T19:00:00+05:30
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
    whatsAppNumber: string; // e.g. 919679545488
    whatsAppMessageTemplate: string;
    whatsAppButtonText: string;
    formTitle: string;
    formSubtitle: string;
  };
  footer: {
    signOff: string;
    metaLine: string;
  };
}

export const invitationContent: InvitationContent = {
  meta: {
    title: "Rohan & Sakshi · 10 December 2026",
    description: "Celebrate Rohan and Sakshi's wedding on 10 December 2026 in Haldwani, Uttarakhand.",
    favicon: "/assets/favicon.png",
    ogImage: "/assets/invitation-cover.jpg",
  },
  audio: {
    // Leave empty by default; set to e.g. '/assets/shehnai-classical.mp3' to enable floating player
    src: "",
    title: "Auspicious Wedding Melody",
  },
  cover: {
    image: "/assets/invitation-cover.jpg",
    openButtonText: "OPEN INVITATION",
    skipButtonText: "Skip to Invitation",
    ariaLabel: "Open Rohan and Sakshi's invitation",
  },
  hero: {
    ornament: "✦",
    eyebrow: "Together with our families",
    groomFirstName: "Rohan",
    brideFirstName: "Sakshi",
    displayDate: "10 · 12 · 2026",
    copy: "One college. A little destiny. Eight years of choosing each other. Now, a lifetime to look forward to.",
    scrollHintText: "SCROLL",
  },
  countdown: {
    targetDateISO: "2026-12-10T19:00:00+05:30",
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
    groomFullName: "Rohan Singh Poona",
    groomParents: "Smt Rekha Poona and Shri Bahadur Singh Poona",
    brideFullName: "Sakshi Kumari",
    brideParents: "Smt Sushama Kumari and Shri Shiv Raja",
  },
  story: {
    eyebrow: "Our story, so far",
    title: "A Path of Moments",
    milestones: [
      {
        date: "2018 · WHERE IT ALL BEGAN",
        title: "A beautiful coincidence",
        note: "From different corners of the country to the same college. Life brought us to NIT Puducherry, and to each other.",
      },
      {
        date: "THE YEARS IN BETWEEN",
        title: "Our kind of together",
        note: "Coffees, adventures, workouts, food hunts and a little healthy competition. Through every season, we kept choosing the same team — us.",
      },
      {
        date: "2026 · THE NEXT CHAPTER",
        title: "A lifetime? Yes.",
        note: "Eight years later, we're getting married. With full hearts and our favourite people around us, we're ready for everything that comes next.",
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
        id: "haldi",
        symbol: "✿",
        title: "Haldi",
        date: "Wednesday, 09 December 2026",
        time: "10:00 AM onwards",
        venue: "Hotel Lemon Park, Haldwani, Uttarakhand",
        mapQuery: "Hotel+Lemon+Park+Haldwani",
        calendarStartDate: "2026-12-09T10:00:00+05:30",
        calendarEndDate: "2026-12-09T14:00:00+05:30",
      },
      {
        id: "mehendi",
        symbol: "◇",
        title: "Mehendi & Sangeet",
        date: "Wednesday, 09 December 2026",
        time: "6:00 PM onwards",
        venue: "Madhuban Banquet Hall, Haldwani, Uttarakhand",
        mapQuery: "Madhuban+Banquet+Hall+Haldwani",
        calendarStartDate: "2026-12-09T18:00:00+05:30",
        calendarEndDate: "2026-12-09T23:00:00+05:30",
      },
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
        alt: "A bride and groom during a traditional Indian wedding ceremony",
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
    whatsAppNumber: "919679545488",
    whatsAppMessageTemplate: "Hi Rohan! I'd like to RSVP for your wedding.\nName: \nNumber of guests: \nEvents I can attend: \nArrival plans: ",
    whatsAppButtonText: "RSVP on WhatsApp",
    formTitle: "Confirm Your Attendance",
    formSubtitle: "Please let us know if you can make it by 20 November 2026",
  },
  footer: {
    signOff: "With Love",
    metaLine: "ROHAN & SAKSHI · HALDWANI · 10 DECEMBER 2026",
  },
};
