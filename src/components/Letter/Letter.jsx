// import React from "react";
// import { useState } from "react";
// import "./Letter.css";

// export default function Letter() {
//   const [open, setOpen] = useState(false);

//   return (
//     <section className="letter-section">
//       <div className="letter-intro">
//         <p className="eyebrow">The final chapter</p>
//         <h2>One more thing...</h2>
//         <p>Some words are better written down.</p>
//         <button className="envelope-button" onClick={() => setOpen(true)}>
//           Open the letter
//         </button>
//       </div>

//       {open && (
//         <div className="letter-overlay" onClick={() => setOpen(false)}>
//           <article className="letter-paper" onClick={(e) => e.stopPropagation()}>
//             <button className="close-letter" onClick={() => setOpen(false)} aria-label="Close">×</button>
//             <p className="letter-greeting">My love,</p>
//             <p>
//               I wanted this little adventure to be a collection of all the
//               things I love about you — the things you have done, the moments
//               we have shared, and all the little memories I never want to forget.
//             </p>
//             <p>
//               But after putting all of those memories together, I realized
//               something rather simple:
//             </p>
//             <p className="handwritten">
//               My favorite part of every chapter has always been you.
//             </p>
//             <p>
//               So here&apos;s to another year, another adventure, and all the
//               pages we haven&apos;t written yet.
//             </p>
//             <p className="letter-signoff">Happy Birthday.<br />I love you. ♡</p>
//             <p className="proposal-placeholder">
//               {/* Replace this section with your proposal if/when you are ready. */}
//             </p>
//           </article>
//         </div>
//       )}
//     </section>
//   );
// }

import React, { useState } from "react";
import "./Letter.css";

export default function Letter() {
const [open, setOpen] = useState(false);

return ( <section className="letter-section">
  {/* INTRO */}
  <div className="letter-intro">
    <p className="eyebrow">The final chapter</p>

    <h2>One more thing...</h2>

    <p>Some words are better written down.</p>

    <button
      className="envelope-button"
      onClick={() => setOpen(true)}
    >
      <span className="button-sparkle">✦</span>
      Open the letter
      <span className="button-sparkle">✦</span>
    </button>
  </div>


  {/* LETTER OVERLAY */}
  {open && (
    <div
      className="letter-overlay"
      onClick={() => setOpen(false)}
    >

      <article
        className="letter-paper"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close button */}
        <button
          className="close-letter"
          onClick={() => setOpen(false)}
          aria-label="Close letter"
        >
          ×
        </button>


        {/* Magical background glow */}
        <div className="paper-purple-glow"></div>
        <div className="paper-green-glow"></div>


        {/* Header */}
        <header className="letter-header">

          <h2>To Dainty, 💜</h2>

          <p className="letter-subtitle">
            A little letter, just for you
          </p>

          <div className="letter-divider">
            <span>✦</span>
          </div>

        </header>


        {/* Letter */}
        <div className="letter-content">

          <p className="letter-opening dropcap">
            Happy 25th Birthday!!!
          </p>

          <p>
            I hope you enjoyed the little birthday card I made for you,
            filled with all of our memories and your achievements during
            the year!
          </p>

          <p>
            For me, it was a joy to remember all these memories as I was
            making the card! All the little gifts I got you over the year,
            all the things we discovered about each other 💜
          </p>

          <p>
            But today is your special little day, and it should be all
            about you. I’m so glad to have gotten to spend another year
            with you and I wish I could do this whole year over again
            if I could!
          </p>

          <p>
            I hope you get to spend the bestest day with all your friends,
            eat lots of cake and get a little naughty and fun with them too!
          </p>

          <p>
            I can’t wait to spend next year with you and so excited to
            support and celebrate all the big and little moments with you,
            my Sophie, my Dainty, my wifey 💜
          </p>

          <p className="birthday-ending">
            Happy 25th!!! I love you sooooo much!
          </p>

        </div>


        {/* Memory / Photo */}
        <div className="memory-stage">

          <div className="memory-halo"></div>

          <div className="memory-ring"></div>


          {/* Floating hearts */}
          <span className="heart h1">♥</span>
          <span className="heart h2">♥</span>
          <span className="heart h3">♥</span>
          <span className="heart h4">♥</span>
          <span className="heart h5">♥</span>
          <span className="heart h6">♥</span>
          <span className="heart h7">♥</span>


          {/* Magical stars */}
          <span className="memory-star st1">✦</span>
          <span className="memory-star st2">✧</span>
          <span className="memory-star st3">✦</span>
          <span className="memory-star st4">✧</span>


          {/* Replace with your actual picture */}
          <img
            className="memory-photo"
            src="/birthday-adventure/images/heart.png"
            alt="A special memory"
          />

        </div>


        {/* Signature */}
        <div className="letter-signature">

          <p>Always and forever yours,</p>

          <p className="signature-name">
            Your Howl, Hubby
            <br />
            Henry
          </p>

        </div>


        {/* Mysterious P.S. */}
        <div className="letter-ps">

          <span className="ps-title">
            ✨ P.S. ✨
          </span>

          <p>
            You might want to revisit this page
            for something special 💍
          </p>

        </div>

      </article>

    </div>
  )}

</section>
);
}
