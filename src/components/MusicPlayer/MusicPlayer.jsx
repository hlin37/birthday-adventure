import React from "react";
import { useEffect, useState } from "react";
import "./MusicPlayer.css";

export default function MusicPlayer({ audioRef }) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const sync = () => setPlaying(!audio.paused);
    audio.addEventListener("play", sync);
    audio.addEventListener("pause", sync);
    return () => {
      audio.removeEventListener("play", sync);
      audio.removeEventListener("pause", sync);
    };
  }, [audioRef]);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try { await audio.play(); } catch {}
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/birthday-adventure/audio/background.mp3" loop preload="auto" />
      <button className="music-button" onClick={toggle} aria-label="Toggle music">
        <span>{playing ? "♫" : "♪"}</span>
        <small>{playing ? "music on" : "music off"}</small>
      </button>
    </>
  );
}