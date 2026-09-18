// import React from "react";
// import { useEffect, useRef, useState } from "react";
// import Countdown from "./components/Countdown/Countdown";
// import BirthdayHero from "./components/BirthdayHero/BirthdayHero";
// import GiftSection from "./components/GiftSection/GiftSection";
// import Timeline from "./components/Timeline/Timeline";
// import Letter from "./components/Letter/Letter";
// import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
// import useScrollTriggerRefresh from "./components/useScrollTriggerRefresh/useScrollTriggerRefresh";
// import { gifts } from "./data/gifts";
// import { achievements } from "./data/achievements";

// const BIRTHDAY = "2026-09-28T00:00:00+10:00";

// export default function App() {
//   const [birthdayStarted, setBirthdayStarted] = useState(false);
//   const audioRef = useRef(null);

//   useScrollTriggerRefresh([birthdayStarted]);

//   useEffect(() => {
//     // If the page is opened after midnight AEST, allow the birthday page.
//     if (Date.now() >= new Date(BIRTHDAY).getTime()) {
//       setBirthdayStarted(true);
//     }
//   }, []);

//   const beginAdventure = async () => {
//     setBirthdayStarted(true);
//     try {
//       await audioRef.current?.play();
//     } catch {
//       // The music button remains available if the browser blocks playback.
//     }
//     requestAnimationFrame(() => {
//       document.getElementById("birthday-page")?.scrollIntoView({ behavior: "smooth" });
//     });
//   };

//   return (
//     <main>
//       {!birthdayStarted ? (
//         <Countdown targetDate={BIRTHDAY} onOpen={beginAdventure} />
//       ) : (
//         <div id="birthday-page">
//           <BirthdayHero />
//           <GiftSection gifts={gifts} />
//           <Timeline achievements={achievements} />
//           <Letter />
//         </div>
//       )}

//       <MusicPlayer audioRef={audioRef} />
//     </main>
//   );
// }

import React from "react";
import { useEffect, useRef, useState } from "react";
import Countdown from "./components/Countdown/Countdown";
import BirthdayHero from "./components/BirthdayHero/BirthdayHero";
import GiftSection from "./components/GiftSection/GiftSection";
import Timeline from "./components/Timeline/Timeline";
import Letter from "./components/Letter/Letter";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import useScrollTriggerRefresh from "./components/useScrollTriggerRefresh/useScrollTriggerRefresh";
import { gifts } from "./data/gifts";
import { achievements } from "./data/achievements";

const BIRTHDAY = "2026-09-28T00:00:00+10:00";

export default function App() {
  const [birthdayStarted, setBirthdayStarted] = useState(false);
  const audioRef = useRef(null);

  useScrollTriggerRefresh([birthdayStarted]);

  useEffect(() => {
    if (Date.now() >= new Date(BIRTHDAY).getTime()) {
      setBirthdayStarted(true);
    }
  }, []);

  const beginAdventure = async () => {
    setBirthdayStarted(true);
    try {
      await audioRef.current?.play();
    } catch {
      // The music button remains available if the browser blocks playback.
    }
    requestAnimationFrame(() => {
      document
        .getElementById("birthday-page")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <main>
      {!birthdayStarted ? (
        <Countdown targetDate={BIRTHDAY} onOpen={beginAdventure} />
      ) : (
        <div id="birthday-page">
          <BirthdayHero />
          <GiftSection gifts={gifts} />
          <Timeline achievements={achievements} />
          <Letter />
        </div>
      )}

      <MusicPlayer audioRef={audioRef} />
    </main>
  );
}