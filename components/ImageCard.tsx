type Props = {
  caption?: string;
  story?: string;
  tone?: "rose" | "sage" | "taupe" | "cream";
  aspect?: "portrait" | "square" | "wide";
  pattern?: "botanical" | "stitch" | "weave" | "flower";
  className?: string;
};

const toneMap = {
  rose: {
    bg: "linear-gradient(135deg, #f4e6e1 0%, #e9cfc6 60%, #d3a89d 100%)",
    accent: "#b88375",
  },
  sage: {
    bg: "linear-gradient(135deg, #e8ebe1 0%, #c8cfbb 60%, #94a087 100%)",
    accent: "#6e7a60",
  },
  taupe: {
    bg: "linear-gradient(135deg, #f1ece4 0%, #ddd2bf 60%, #b9a78e 100%)",
    accent: "#6a5a47",
  },
  cream: {
    bg: "linear-gradient(135deg, #fbf8f2 0%, #f6f1e8 60%, #ece3d1 100%)",
    accent: "#8e7c64",
  },
};

const aspectMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]",
};

function Pattern({ kind, color }: { kind: NonNullable<Props["pattern"]>; color: string }) {
  if (kind === "botanical") {
    return (
      <svg viewBox="0 0 240 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g stroke={color} strokeWidth="0.9" fill="none" opacity="0.55">
          <path d="M120 280 Q 110 200, 120 100 T 120 30" />
          <path d="M120 240 Q 90 230, 70 210" />
          <path d="M120 220 Q 150 215, 170 195" />
          <path d="M120 190 Q 95 180, 80 160" />
          <path d="M120 170 Q 145 165, 165 145" />
          <path d="M120 140 Q 100 130, 90 110" />
          <path d="M120 120 Q 140 115, 155 95" />
        </g>
        <g fill={color} opacity="0.6">
          <circle cx="70" cy="210" r="3" />
          <circle cx="170" cy="195" r="3.5" />
          <circle cx="80" cy="160" r="2.5" />
          <circle cx="165" cy="145" r="3" />
          <circle cx="90" cy="110" r="3" />
          <circle cx="155" cy="95" r="2.8" />
          <circle cx="120" cy="60" r="4" />
        </g>
        <g stroke={color} strokeWidth="0.6" fill="none" opacity="0.4">
          <path d="M65 210 q -3 -6, -2 -12" />
          <path d="M65 210 q 3 -6, 8 -8" />
          <path d="M175 195 q -3 -6, -2 -12" />
          <path d="M175 195 q 3 -6, 8 -8" />
        </g>
      </svg>
    );
  }
  if (kind === "stitch") {
    return (
      <svg viewBox="0 0 240 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g stroke={color} strokeWidth="0.8" opacity="0.4" fill="none">
          {Array.from({ length: 14 }).map((_, i) => (
            <path
              key={i}
              d={`M0 ${i * 24} L240 ${i * 24}`}
              strokeDasharray="8 6"
            />
          ))}
        </g>
      </svg>
    );
  }
  if (kind === "weave") {
    return (
      <svg viewBox="0 0 240 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <g stroke={color} strokeWidth="0.6" opacity="0.35">
          {Array.from({ length: 30 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 8} y1="0" x2={i * 8} y2="320" />
          ))}
          {Array.from({ length: 40 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 8} x2="240" y2={i * 8} />
          ))}
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 240 320" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <g fill={color} opacity="0.5">
        <circle cx="60" cy="80" r="14" />
        <circle cx="180" cy="120" r="18" />
        <circle cx="90" cy="220" r="22" />
        <circle cx="190" cy="260" r="12" />
      </g>
      <g stroke={color} strokeWidth="0.8" fill="none" opacity="0.35">
        <circle cx="60" cy="80" r="22" />
        <circle cx="180" cy="120" r="28" />
        <circle cx="90" cy="220" r="32" />
        <circle cx="190" cy="260" r="20" />
      </g>
    </svg>
  );
}

export default function ImageCard({
  caption,
  story,
  tone = "rose",
  aspect = "portrait",
  pattern = "botanical",
  className = "",
}: Props) {
  const t = toneMap[tone];
  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative ${aspectMap[aspect]} overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)]`}
        style={{ background: t.bg }}
      >
        <Pattern kind={pattern} color={t.accent} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        {caption && (
          <figcaption className="absolute bottom-4 left-4 right-4 text-[var(--color-cream-50)] text-sm font-medium tracking-wide drop-shadow">
            {caption}
          </figcaption>
        )}
      </div>
      {story && (
        <p className="mt-3 text-sm italic text-[var(--color-ink-mute)] leading-relaxed">
          {story}
        </p>
      )}
    </figure>
  );
}
