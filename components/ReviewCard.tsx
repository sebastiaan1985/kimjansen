type Props = {
  quote: string;
  name: string;
  context: string;
  tone?: "cream" | "rose" | "sage";
};

const toneMap = {
  cream: "bg-[var(--color-cream-50)] border-[var(--color-taupe-100)]",
  rose: "bg-[var(--color-rose-50)] border-[var(--color-rose-100)]",
  sage: "bg-[var(--color-sage-50)] border-[var(--color-sage-100)]",
};

export default function ReviewCard({ quote, name, context, tone = "cream" }: Props) {
  return (
    <figure className={`rounded-[var(--radius-lg)] border p-7 md:p-8 ${toneMap[tone]} h-full flex flex-col`}>
      <svg
        viewBox="0 0 24 18"
        className="w-6 h-5 mb-5 text-[var(--color-rose-300)]"
        fill="currentColor"
        aria-hidden
      >
        <path d="M0 18V11.7c0-2.6.6-4.9 1.9-6.9C3.1 2.7 5 1.1 7.5 0l1.7 2.5c-1.5.8-2.6 1.7-3.4 2.8-.8 1.1-1.2 2.4-1.3 4h3.6V18H0Zm13.4 0V11.7c0-2.6.6-4.9 1.9-6.9 1.2-2.1 3.1-3.6 5.6-4.8L22.6 2.5c-1.5.8-2.6 1.7-3.4 2.8-.8 1.1-1.2 2.4-1.3 4H21.5V18H13.4Z" />
      </svg>
      <blockquote className="flex-1">
        <p className="text-[17px] leading-[1.65] text-[var(--color-ink-soft)] font-[family-name:var(--font-cormorant)] italic">
          {quote}
        </p>
      </blockquote>
      <figcaption className="mt-6 pt-5 border-t border-[var(--color-taupe-100)]/70">
        <p className="text-sm font-medium text-[var(--color-ink)]">{name}</p>
        <p className="text-xs text-[var(--color-ink-mute)] mt-1">{context}</p>
      </figcaption>
    </figure>
  );
}
