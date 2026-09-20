"use client";

import { useEffect, useState } from "react";

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let frame;
    let start;

    const tick = (time) => {
      if (!start) start = time;
      const next = Math.min(100, Math.floor(((time - start) / 1400) * 100));
      setProgress(next);
      if (next < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setHidden(true);
          onDone?.();
        }, 280);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onDone]);

  if (hidden) return null;

  return (
    <div
      id="loader"
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-palm px-8 py-8 text-palm-gold md:px-12"
      aria-live="polite"
      aria-busy={progress < 100}
    >
      <p className="font-hand text-2xl tracking-wide opacity-80">palmo coconut co.</p>
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <svg
          className="h-24 w-24 animate-float md:h-32 md:w-32"
          viewBox="0 0 128 128"
          fill="none"
          aria-hidden="true"
        >
          <rect width="128" height="128" rx="28" fill="#684900" />
          <path
            d="M64 28c18 10 28 28 28 48-12-6-22-8-28-8s-16 2-28 8c0-20 10-38 28-48Z"
            fill="#FFE386"
          />
        </svg>
        <p className="font-display text-5xl font-semibold tracking-tight md:text-7xl">
          {progress}
          <span className="text-3xl md:text-4xl">%</span>
        </p>
        <p className="font-hand text-xl text-palm-gold/80">Pouring · Pressing · Chilling</p>
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-palm-gold/20">
        <div
          className="h-full rounded-full bg-palm-gold transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
