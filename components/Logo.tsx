import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  color?: "brand" | "cream";
  className?: string;
};

const sizeMap = {
  sm: {
    eyebrow: "text-[10px] tracking-[0.32em]",
    name: "text-xl",
    line: "w-6",
    gap: "gap-1.5",
  },
  md: {
    eyebrow: "text-[11px] tracking-[0.34em]",
    name: "text-2xl",
    line: "w-7",
    gap: "gap-1.5",
  },
  lg: {
    eyebrow: "text-[12px] tracking-[0.36em]",
    name: "text-4xl",
    line: "w-10",
    gap: "gap-2",
  },
};

export default function Logo({
  size = "md",
  href = "/",
  color = "brand",
  className = "",
}: Props) {
  const s = sizeMap[size];
  const tone = color === "brand" ? "text-[var(--color-brand)]" : "text-[var(--color-cream-50)]";

  const inner = (
    <span className={`inline-flex flex-col items-center ${s.gap} ${tone} ${className}`}>
      <span className={`uppercase font-medium border-b border-current pb-[2px] ${s.eyebrow}`}>
        Atelier
      </span>
      <span
        className={`font-[family-name:var(--font-logo)] leading-none ${s.name}`}
        style={{ fontFeatureSettings: '"liga", "dlig", "swsh"' }}
      >
        Kim Jansen
      </span>
    </span>
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label="Atelier Kim Jansen — home" className="inline-block">
      {inner}
    </Link>
  );
}
