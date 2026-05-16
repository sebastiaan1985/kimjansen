"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "li";
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  y = 24,
  once = true,
  className = "",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style: React.CSSProperties = {
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    opacity: visible ? 1 : 0,
    transition: `opacity 900ms cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}ms, transform 900ms cubic-bezier(0.2, 0.6, 0.2, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}
