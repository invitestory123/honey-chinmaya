/**
 * wedding-data.js — Customer-facing editable data layer for seashell-vows
 * Edit this file to update couple names, tagline, dates, events, venue, and images.
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Chinmaya",
    bride: "Honey",
    groomFull: "Chinmaya Kar",
    brideFull: "Honey Gupta",
    order: "bride-first",
    tagline: "A Sunset Celebration of Forever",
  },

  wedding: {
    dateLabel: "6 – 7 December 2026",
    weddingISO: "2026-12-07T14:00:00+05:30",
    footerDate: "7 December 2026",
  },

  venue: {
    name: "Royal Orchid Beach Resort, Goa",
    address: "Utorda Beach, Salcete, Goa 403713",
    heroLocation: "Royal Orchid Beach Resort · Goa",
    footerPlace: "Goa",
    mapsUrl: "https://maps.app.goo.gl/6DoMhDa9v3TRBNeBA",
  },

  celebrationsOverline: "Two days of joy",

  story: {
    title: "A love written in tides",
    text: "Barefoot on the sand, with love in the air and the sunset as our witness. We invite you to join us as we celebrate our new beginning where the sea meets the sky.",
  },

  events: [
    {
      name: "Haldi",
      glyph: "🌼",
      date: "6 Dec 2026",
      time: "10:00 AM",
      venue: "Poolside Lawn, Royal Orchid Beach Resort",
      note: "Haldi Carnival 💛🌼 — A splash of sunshine, colours, laughter, and playful celebrations! Dress Code: Shades of Yellow 💛 (P.S. Things might get splashy!)",
    },
    {
      name: "Sangeet",
      glyph: "✨",
      date: "6 Dec 2026",
      time: "6:00 PM",
      venue: "Chess-board Lawn, Royal Orchid Beach Resort",
      note: "A Night of Glitz & Glam ✨ — An evening of music, dance, and dazzling celebrations! Dress Code: Bring on the Bling! ✨",
    },
    {
      name: "Wedding",
      glyph: "🌅",
      date: "7 Dec 2026",
      time: "2:00 PM onwards",
      venue: "Sunset Beach Mandap, Royal Orchid Beach Resort",
      note: "A Sunset Celebration of Forever 🌅🤍 — Barefoot on the sand, with love in the air and the sunset as our witness. Baraat: 2:00 PM · Varmala: 5:00 PM · Bidai: 10:00 PM · Dress Code: Dreamy Pastels 🌸",
    },
  ],

  eventDates: {
    Haldi: "2026-12-06T10:00:00+05:30",
    "Haldi Carnival": "2026-12-06T10:00:00+05:30",
    Sangeet: "2026-12-06T18:00:00+05:30",
    "A Night of Glitz & Glam": "2026-12-06T18:00:00+05:30",
    Wedding: "2026-12-07T14:00:00+05:30",
    "A Sunset Celebration of Forever": "2026-12-07T14:00:00+05:30",
  },

  images: {
    couple: "./editable/assets/couple-walking.png",
    hero: "./editable/assets/hero-arch.jpg",
    ringsVignette: "./editable/assets/rings-seashell-vignette.png",
    venueMap: "./editable/assets/venue-map-Wf_iSDI1.jpg",
    footerWash: "./editable/assets/footer-wash-DG1rtX_C.jpg",
    openerVideo: "./editable/assets/wedding-opener.mp4",
  },
};
