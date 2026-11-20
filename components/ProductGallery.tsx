"use client";

import { useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
  /** Studio shots on a white/transparent background: show whole, blended into the page. */
  contain?: boolean;
};

const toneBg = {
  rose: "linear-gradient(135deg, #f4e6e1 0%, #e9cfc6 60%, #d3a89d 100%)",
  sage: "linear-gradient(135deg, #e8ebe1 0%, #c8cfbb 60%, #94a087 100%)",
  taupe: "linear-gradient(135deg, #f1ece4 0%, #ddd2bf 60%, #b9a78e 100%)",
  cream: "linear-gradient(135deg, #fbf8f2 0%, #f6f1e8 60%, #ece3d1 100%)",
};

export default function ProductGallery({
  images,
  tone = "cream",
}: {
  images: GalleryImage[];
  tone?: keyof typeof toneBg;
}) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div className="w-full max-w-md mx-auto">
      <figure className="group relative">
        <div
          className={`relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] ${
            current.contain ? "" : "shadow-[var(--shadow-soft)]"
          }`}
          style={current.contain ? undefined : { background: toneBg[tone] }}
        >
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            loading="lazy"
            className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.03] ${
              current.contain ? "object-contain" : "object-cover"
            }`}
          />
        </div>
      </figure>

      {images.length > 1 && (
        <ul className="mt-4 grid grid-cols-5 gap-2" aria-label="Meer foto's">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Toon foto ${i + 1}: ${img.alt}`}
                aria-pressed={i === active}
                className={`relative block w-full aspect-square overflow-hidden rounded-[var(--radius-md)] border transition ${
                  i === active
                    ? "border-[var(--color-rose-300)] ring-2 ring-[var(--color-rose-200)]"
                    : "border-[var(--color-taupe-100)] opacity-75 hover:opacity-100"
                }`}
                style={{ background: toneBg.cream }}
              >
                <img
                  src={img.src}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full ${
                    img.contain ? "object-contain" : "object-cover"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
