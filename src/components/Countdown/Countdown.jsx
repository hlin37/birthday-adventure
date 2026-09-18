import React from "react";
import { useEffect, useState } from "react";
import "./Countdown.css";

function getTimeLeft(targetDate) {
  const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: diff <= 0
  };
}

export default function Countdown({ targetDate, onOpen }) {
  const [time, setTime] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (time.done) {
    return (
      <section className="countdown-page countdown-page--ready">
        <div className="countdown-overlay" />
        <div className="countdown-content">
          <p className="eyebrow">September 28</p>
          <h1>It&apos;s time.</h1>
          <p className="sweet-message">Come with me on one little adventure.</p>
          <button className="adventure-button" onClick={onOpen}>
            Open your birthday card <span>♡</span>
          </button>
        </div>
      </section>
    );
  }

  const units = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds]
  ];

  return (
    <section className="countdown-page">
      <div className="countdown-overlay" />
      <div className="countdown-content">
        <p className="eyebrow">For my favorite person</p>
        <h1>One little adventure<br />is almost here.</h1>

        <div className="countdown-grid">
          {units.map(([label, value]) => (
            <div className="time-unit" key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        <p className="sweet-message">
          Some things are worth waiting for.<br />
          You are one of them.
        </p>

        <p className="date-label">September 28 · AEST</p>

        {/* TEMPORARY: remove this button before the final version */}
        <button className="skip-button" onClick={onOpen}>
          Skip countdown → 
        </button>
      </div>
    </section>
  );
}