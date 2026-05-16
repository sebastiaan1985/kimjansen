type Props = {
  className?: string;
  variant?: "stem" | "flourish" | "stitch";
  color?: string;
};

export default function Ornament({
  className = "",
  variant = "stem",
  color = "var(--color-rose-300)",
}: Props) {
  if (variant === "stem") {
    return (
      <svg
        viewBox="0 0 120 40"
        className={className}
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M5 20 Q 35 5, 60 20 T 115 20" />
        <circle cx="20" cy="14" r="2" fill={color} stroke="none" />
        <circle cx="60" cy="20" r="2.5" fill={color} stroke="none" />
        <circle cx="100" cy="14" r="2" fill={color} stroke="none" />
        <path d="M14 14 q -3 -4, -2 -8" />
        <path d="M14 14 q 3 -4, 6 -5" />
        <path d="M100 14 q -3 -4, -6 -5" />
      </svg>
    );
  }
  if (variant === "stitch") {
    return (
      <svg viewBox="0 0 200 4" className={className} fill="none" stroke={color} strokeWidth="1">
        <path d="M0 2 L20 2 M30 2 L50 2 M60 2 L80 2 M90 2 L110 2 M120 2 L140 2 M150 2 L170 2 M180 2 L200 2" strokeDasharray="0" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke={color} strokeWidth="0.9">
      <path d="M40 10 C 30 30, 30 50, 40 70" />
      <path d="M40 10 C 50 30, 50 50, 40 70" />
      <path d="M10 40 C 30 30, 50 30, 70 40" />
      <path d="M10 40 C 30 50, 50 50, 70 40" />
      <circle cx="40" cy="40" r="3" fill={color} stroke="none" />
    </svg>
  );
}
