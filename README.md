# Birthday Adventure

A personal React/Vite birthday-card website designed as a scrolling fantasy story.

## Included

- September 26 countdown using AEST (+10:00)
- Countdown automatically changes to an "Open your birthday card" screen
- Attached fantasy artwork is already installed as the countdown background
- Birthday hero section
- Gift story sections
- GSAP-powered horizontal achievement timeline
- Handwritten-style final letter
- Local background MP3 player
- Responsive/mobile layout
- Gift and achievement data separated from JSX

## Run it

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Then open the local Vite address shown in the terminal.

## Add your photos

Put gift images here:

public/images/gifts/

Then update `src/data/gifts.js`.

Put achievement images here:

public/images/timeline/

Then update `src/data/achievements.js`.

The image filenames can be anything, as long as the paths in the data files match.

## Add music

Put your MP3 here:

public/audio/background.mp3

The website does NOT autoplay music before interaction. Once she clicks to enter the birthday experience, the app attempts to start the music. There is also a music button in the bottom-right corner.

## Change the birthday text

Most text is in:

- `src/components/Countdown/Countdown.jsx`
- `src/components/BirthdayHero/BirthdayHero.jsx`
- `src/data/gifts.js`
- `src/data/achievements.js`
- `src/components/Letter/Letter.jsx`

## Change the birthday date/time

The current date is:

2026-09-26T00:00:00+10:00

It is defined in `src/App.jsx`.

## Important

This starter intentionally uses placeholders for the future photos. Replace them with your own images when ready.

The horizontal timeline is powered by GSAP + ScrollTrigger. As the visitor scrolls vertically, the timeline moves horizontally while the section stays pinned.

## React import compatibility

The JSX components explicitly import React so the project also works in environments configured for the classic JSX transform. `vite.config.js` also enables the official React Vite plugin.
