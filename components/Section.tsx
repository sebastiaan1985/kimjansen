import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  bg?: "cream" | "linen" | "white" | "ink" | "sage" | "rose";
  spacing?: "sm" | "md" | "lg";
};

const bgMap = {
  cream: "bg-[var(--color-cream-50)]",
  linen: "bg-[var(--color-linen)]",
  white: "bg-white",
  ink: "bg-[var(--color-ink)] text-[var(--color-cream-50)]",
  sage: "bg-[var(--color-sage-50)]",
  rose: "bg-[var(--color-rose-50)]",
};

const spaceMap = {
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-40",
};

export default function Section({
  children,
  className = "",
  bg = "cream",
  spacing = "md",
}: Props) {
  return (
    <section className={`${bgMap[bg]} ${spaceMap[spacing]} ${className}`}>
      <div className="container-prose">{children}</div>
    </section>
  );
}
