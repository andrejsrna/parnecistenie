"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const play = () => {
    // ponytail: modal must be visible (not display:none) before .play() is
    // called in the same tick, or Safari silently refuses to play — the
    // React state update alone doesn't repaint fast enough for that.
    modalRef.current?.classList.add("is-open");
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
        ref={modalRef}
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
