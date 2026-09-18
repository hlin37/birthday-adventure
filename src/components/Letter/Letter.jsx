import React from "react";
import { useState } from "react";
import "./Letter.css";

export default function Letter() {
  const [open, setOpen] = useState(false);

  return (
    <section className="letter-section">
      <div className="letter-intro">
        <p className="eyebrow">The final chapter</p>
        <h2>One more thing...</h2>
        <p>Some words are better written down.</p>
        <button className="envelope-button" onClick={() => setOpen(true)}>
          Open the letter
        </button>
      </div>

      {open && (
        <div className="letter-overlay" onClick={() => setOpen(false)}>
          <article className="letter-paper" onClick={(e) => e.stopPropagation()}>
            <button className="close-letter" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <p className="letter-greeting">My love,</p>
            <p>
              I wanted this little adventure to be a collection of all the
              things I love about you — the things you have done, the moments
              we have shared, and all the little memories I never want to forget.
            </p>
            <p>
              But after putting all of those memories together, I realized
              something rather simple:
            </p>
            <p className="handwritten">
              My favorite part of every chapter has always been you.
            </p>
            <p>
              So here&apos;s to another year, another adventure, and all the
              pages we haven&apos;t written yet.
            </p>
            <p className="letter-signoff">Happy Birthday.<br />I love you. ♡</p>
            <p className="proposal-placeholder">
              {/* Replace this section with your proposal if/when you are ready. */}
            </p>
          </article>
        </div>
      )}
    </section>
  );
}