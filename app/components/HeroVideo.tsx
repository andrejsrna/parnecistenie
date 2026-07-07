"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    setOpen(true);
    videoRef.current?.play();
  };

  const close = () => {
    setOpen(false);
    videoRef.current?.pause();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="hero-video-trigger"
        onClick={play}
        aria-label="Prehrať video"
      >
        <img src="/hero-poster.jpg" alt="" className="hero-poster" />
        <span className="hero-play">▶</span>
      </button>

      <div
        className={`video-modal${open ? " is-open" : ""}`}
        onClick={close}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="video-modal-close"
          onClick={close}
          aria-label="Zavrieť video"
        >
          ✕
        </button>
        <video
          ref={videoRef}
          className="video-modal-player"
          src="/hero.mp4"
          controls
          playsInline
          preload="none"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </>
  );
}
