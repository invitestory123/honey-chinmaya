# Customer Editing Guide — seashell-vows

This template is a coastal Goa beach wedding invitation featuring a tap-to-open video opener gate, background wedding music, watercolour couple portrait, Lord Ganesha invocation, celebration event cards, interactive lantern-wish animation, and venue map.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///c:/invitestory/week7/honey-chinmaya/editable/wedding-data.js)

### Couple Names & Tagline
Edit `couple` in `editable/wedding-data.js`:
- `groom` & `bride`: First names (e.g. `"Chinmaya"`, `"Honey"`)
- `groomFull` & `brideFull`: Full formal names
- `tagline`: Subtitle phrase (e.g. `"A Sunset Celebration of Forever"`)

### Invocation & Family Invitation
Edit `invitation` in `editable/wedding-data.js`:
- `shloka`: Sacred invocation (e.g. `"॥ ॐ श्री गणेशाय नमः ॥"`)
- `brideParents`: Bride's parents line (e.g. `"Mrs. Lalita & Mr. Purnendu Kumar Gupta"`)
- `cordialInvite`: Invitation phrase (e.g. `"CORDIALLY INVITE YOU"`)
- `brideLine`: Daughter phrasing (e.g. `"To grace the wedding celebrations of their beloved daughter"`)
- `groomLine`: Son phrasing (e.g. `"Beloved son of"`)
- `groomParents`: Groom's parents line (e.g. `"Mrs. Anusaya & Mr. Basanta Kumar Kar"`)
- `togethernessLine`: Journey phrasing (e.g. `"As they begin their beautiful journey of togetherness."`)

### Background Music
Audio is stored in `editable/assets/bgm.mp3`.
Configured in `music` in `editable/wedding-data.js`:
- `src`: Path to music audio file (e.g. `"./editable/assets/bgm.mp3"`)
- `autoplay`: `true` to auto-play upon user tap / opener interaction

### Wedding Date & Timeline Events
Edit `wedding`, `events`, and `eventDates` in `editable/wedding-data.js`:
- `dateLabel`: Display date for hero/footer (e.g. `"6th & 7th December 2026"`)
- `weddingISO`: ISO 8601 timestamp for primary ceremony
- `events[]`: Array of celebrations with:
  - `name`: Event name displayed as block header (e.g. `"Haldi Carnival"`, `"A Night of Glitz & Glam"`, `"A Sunset Celebration of Forever"`)
  - `glyph`: Icon/emoji glyph (🌼, ✨, 🌅)
  - `date`: Ceremony date (e.g. `"6 Dec 2026"`)
  - `time`: Ceremony time (e.g. `"10:00 AM"`)
  - `venue`: Event venue / lawn
  - `note`: Description with multi-line dress codes and itinerary details
- `eventDates`: Key-value map of ISO timestamps for generating multi-event calendar entries (`.ics`)

### Venue & Maps
Edit `venue` in `editable/wedding-data.js`:
- `name`: Venue name (e.g. `"Royal Orchid Beach Resort, Goa"`)
- `address`: Full postal address
- `mapsUrl`: Google Maps link for directions button

### Images & Media
Replace files directly in `editable/assets/` or update paths in `editable/wedding-data.js`:
- Couple walking illustration: `editable/assets/couple-walking.png`
- Hero floral arch backdrop: `editable/assets/hero-arch.jpg`
- Rings & seashell vignette: `editable/assets/rings-seashell-vignette.png`
- Venue map graphic: `editable/assets/venue-map-Wf_iSDI1.jpg`
- Footer wash backdrop: `editable/assets/footer-wash-DG1rtX_C.jpg`
- Opener video: `editable/assets/wedding-opener.mp4`
- Background music: `editable/assets/bgm.mp3`

---

## Special Sections & Features

- **Tap-to-Open Video Gate**: Plays opening video sequence before revealing the full wedding invitation and unlocks background music.
- **Background Music Player**: Floating audio disc button in the top-right corner to play/pause soothing wedding instrumental music.
- **Send a Wish**: Interactive lantern release animation upon clicking "Release lanterns".
- **Multi-Event Calendar Export**: Downloadable `.ics` file containing all itinerary events.
- **Scroll Reveal**: Sections fade and slide into view on scroll.

---

## Rules for Future Agents

1. Make edits in `editable/wedding-data.js` and swap files in `editable/assets/`.
2. Do not modify bundled code in `assets/` unless structural changes are explicitly requested.
3. Verify syntax with `node --check editable/wedding-data.js` after making edits.
