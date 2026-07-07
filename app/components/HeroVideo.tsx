"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="hero-video-trigger"
        onClick={() => setOpen(true)}
        aria-label="Prehrať video"
      >
        <img src="/hero-poster.jpg" alt="" className="hero-poster" />
        <span className="hero-play">▶</span>
      </button>

      {open && (
        <div
          className="video-modal"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="video-modal-close"
            onClick={() => setOpen(false)}
            aria-label="Zavrieť video"
          >
            ✕
          </button>
          <video
            className="video-modal-player"
            src="/hero.mp4"
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
