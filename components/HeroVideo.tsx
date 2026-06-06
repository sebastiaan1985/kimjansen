"use client";

import { useEffect, useRef } from "react";

type Props = {
  src?: string;
  poster?: string;
  className?: string;
  aspect?: "portrait" | "square" | "wide" | "fill";
};

const aspectMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
  fill: "absolute inset-0 h-full w-full",
};

export default function HeroVideo({
  src = "/hero.mp4",
  poster,
  className = "",
  aspect = "portrait",
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    document.addEventListener("visibilitychange", tryPlay);
    return () => document.removeEventListener("visibilitychange", tryPlay);
  }, []);

  const isFill = aspect === "fill";
  const containerClass = isFill
    ? `${aspectMap.fill} overflow-hidden ${className}`
    : `relative ${aspectMap[aspect]} overflow-hidden rounded-[var(--radius-xl)] shadow-[var(--shadow-soft-lg)] ${className}`;
  const videoClass = isFill
    ? "absolute inset-0 w-full h-full object-cover scale-[1.12] object-[46%_44%]"
    : "absolute inset-0 w-full h-full object-cover";

  return (
    <div className={containerClass} aria-hidden>
      {/* base cream tint as graceful fallback while video loads */}
      <div
        className="absolute inset-0"
        style={{
          background: isFill
            ? "linear-gradient(135deg, #f6f1e8 0%, #ddd2bf 50%, #c8cfbb 100%)"
            : "linear-gradient(135deg, #f4e6e1 0%, #ddd2bf 60%, #c8cfbb 100%)",
        }}
      />

      <video
        ref={ref}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={videoClass}
      />

      {/* warm cream wash to harmonize the footage with the site palette */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply"
        style={{
          background: isFill
            ? "linear-gradient(180deg, rgba(246,241,232,0.16) 0%, rgba(246,241,232,0) 30%, rgba(232,219,200,0.18) 100%)"
            : "linear-gradient(180deg, rgba(246,241,232,0.18) 0%, rgba(246,241,232,0) 35%, rgba(232,219,200,0.15) 100%)",
        }}
      />

      {!isFill && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 55%, rgba(246,241,232,0.55) 100%)",
          }}
        />
      )}

      {/* subtle grain for filmic warmth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.55 0 0 0 0 0.45 0 0 0 0 0.3 0 0 0 0.14 0'/></filter><rect width='200' height='200' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
