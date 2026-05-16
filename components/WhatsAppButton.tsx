type Props = {
  variant?: "floating" | "inline";
  className?: string;
  label?: string;
  message?: string;
};

const WHATSAPP_NUMBER = "31610137351";
const DEFAULT_MESSAGE =
  "Hoi Kim, ik kwam je website tegen en heb een vraag over een herinneringsproduct.";

function buildHref(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppButton({
  variant = "floating",
  className = "",
  label = "App met Kim",
  message = DEFAULT_MESSAGE,
}: Props) {
  const href = buildHref(message);

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={`inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#25D366] text-white font-medium text-sm hover:bg-[#1faa56] transition-colors shadow-[var(--shadow-soft)] ${className}`}
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${label} via WhatsApp`}
      className={`fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 group ${className}`}
    >
      <span className="flex items-center gap-3 pl-3 pr-5 py-3 rounded-full bg-[var(--color-cream-50)] border border-[var(--color-taupe-100)] shadow-[var(--shadow-soft-lg)] hover:shadow-[var(--shadow-soft-lg)] hover:bg-white transition-all hover:-translate-y-0.5">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] text-white"
          aria-hidden
        >
          <WhatsAppIcon className="w-5 h-5" />
        </span>
        <span className="hidden sm:inline text-sm font-medium text-[var(--color-ink)] pr-1">
          {label}
        </span>
      </span>
    </a>
  );
}
