"""Genereert de favicon-set uit public/logo.png.

Maakt app/icon.png, app/apple-icon.png en app/favicon.ico met het volledige
woordmerk (ATELIER / Kim Jansen) op een cremekleurige tegel.

Gebruik: python3 make_favicon.py
"""

from PIL import Image, ImageDraw

SOURCE = "public/logo.png"
CREAM = (246, 241, 232, 255)  # --color-cream
LOGO_WIDTH_RATIO = 0.92  # breedte van het logo t.o.v. de tegel
CORNER_RATIO = 0.14  # afronding van de tegelhoeken
SUPERSAMPLE = 8


def trimmed_logo() -> Image.Image:
    """Laadt het logo en snijdt de transparante rand eromheen weg."""
    logo = Image.open(SOURCE).convert("RGBA")
    return logo.crop(logo.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox())


def tile(logo: Image.Image, size: int, rounded: bool = True) -> Image.Image:
    """Rendert het logo gecentreerd op een vierkante tegel van size x size."""
    hires = size * SUPERSAMPLE
    canvas = Image.new("RGBA", (hires, hires), (0, 0, 0, 0))

    mask = Image.new("L", (hires, hires), 0)
    radius = int(hires * CORNER_RATIO) if rounded else 0
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, hires - 1, hires - 1], radius, fill=255)
    canvas.paste(Image.new("RGBA", (hires, hires), CREAM), (0, 0), mask)

    mark_w = int(hires * LOGO_WIDTH_RATIO)
    mark_h = max(1, round(mark_w * logo.height / logo.width))
    mark = logo.resize((mark_w, mark_h), Image.LANCZOS)
    canvas.alpha_composite(mark, ((hires - mark_w) // 2, (hires - mark_h) // 2))

    return canvas.resize((size, size), Image.LANCZOS)


def main() -> None:
    logo = trimmed_logo()

    tile(logo, 512).save("app/icon.png")
    # Apple maskeert zelf; daarom vierkant zonder transparante hoeken.
    tile(logo, 180, rounded=False).convert("RGB").save("app/apple-icon.png")

    ico_sizes = [16, 32, 48, 64, 96, 128, 256]
    frames = [tile(logo, s) for s in ico_sizes]
    frames[-1].save(
        "app/favicon.ico",
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=frames[:-1],
    )

    print("Geschreven: app/icon.png, app/apple-icon.png, app/favicon.ico")


if __name__ == "__main__":
    main()
