import Link from "next/link";

type Props = {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  className?: string;
};

const heightMap = {
  sm: "h-9",
  md: "h-11",
  lg: "h-16",
};

export default function Logo({ size = "md", href = "/", className = "" }: Props) {
  const inner = (
    <img
      src="/logo.png"
      alt="Atelier Kim Jansen"
      className={`${heightMap[size]} w-auto ${className}`}
    />
  );

  if (!href) return inner;

  return (
    <Link href={href} aria-label="Atelier Kim Jansen — home" className="inline-block">
      {inner}
    </Link>
  );
}
