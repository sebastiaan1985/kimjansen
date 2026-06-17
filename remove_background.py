import sys
import subprocess
import os

# Ensure Pillow is installed
try:
    from PIL import Image, ImageDraw
except ImportError:
    print("Pillow not found, installing pillow...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image, ImageDraw

def make_logo_transparent(input_path, output_path):
    print(f"Processing logo: {input_path} -> {output_path}")
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        # If pixel is very close to white, make it transparent
        # We check if R, G, B are all very high
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Logo transparency completed.")

def make_jacket_transparent(input_path, output_path, tolerance=30):
    print(f"Processing jacket: {input_path} -> {output_path} with tolerance={tolerance}")
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # We will perform a BFS/flood fill from all borders to find the white background
    # This prevents making white/light colors inside the jacket transparent.
    pixels = img.load()
    visited = set()
    queue = []
    
    # Add all border pixels to queue
    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(1, height - 1):
        queue.append((0, y))
        queue.append((width - 1, y))
        
    background_pixels = set()
    
    # Helper to check if a pixel is "white/light enough" to be background
    def is_background_color(r, g, b):
        # Distance from pure white (255, 255, 255)
        dist = ((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2) ** 0.5
        return dist < tolerance

    # BFS
    while queue:
        cx, cy = queue.pop(0)
        if (cx, cy) in visited:
            continue
        visited.add((cx, cy))
        
        r, g, b, a = pixels[cx, cy]
        if is_background_color(r, g, b):
            background_pixels.add((cx, cy))
            
            # Check 4-neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = cx + dx, cy + dy
                if 0 <= nx < width and 0 <= ny < height:
                    if (nx, ny) not in visited:
                        # Only traverse if neighbor is also background-like
                        nr, ng, nb, _ = pixels[nx, ny]
                        if is_background_color(nr, ng, nb):
                            queue.append((nx, ny))

    # Now modify the pixels: set background pixels to transparent
    # To reduce the "white halo" effect around the edges, we can also semi-transparentize
    # pixels that are immediately adjacent to the background but slightly darker,
    # or we can do a feather/soft edge. Let's do a simple feather:
    for x in range(width):
        for y in range(height):
            if (x, y) in background_pixels:
                pixels[x, y] = (255, 255, 255, 0)
            else:
                # Optional: anti-aliasing feathering check
                # If a non-background pixel is next to a background pixel,
                # and it's quite light, we can blend its alpha slightly.
                r, g, b, a = pixels[x, y]
                is_near_bg = False
                for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    nx, ny = x + dx, y + dy
                    if (nx, ny) in background_pixels:
                        is_near_bg = True
                        break
                if is_near_bg:
                    # Soften the edge if it's very bright
                    dist = ((255 - r) ** 2 + (255 - g) ** 2 + (255 - b) ** 2) ** 0.5
                    if dist < tolerance * 1.5:
                        # Blend alpha based on distance
                        alpha_factor = dist / (tolerance * 1.5)
                        new_alpha = int(255 * alpha_factor)
                        pixels[x, y] = (r, g, b, new_alpha)

    img.save(output_path, "PNG")
    print("Jacket transparency completed.")

if __name__ == "__main__":
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    logo_input = os.path.join(base_dir, "public", "logo.png")
    logo_output = os.path.join(base_dir, "public", "logo.png") # Overwrite with transparent version
    
    jacket_input = os.path.join(base_dir, "public", "images", "jasje.jpg")
    jacket_output = os.path.join(base_dir, "public", "images", "jasje.png")
    
    if os.path.exists(logo_input):
        make_logo_transparent(logo_input, logo_output)
    else:
        print(f"Error: logo not found at {logo_input}")
        
    if os.path.exists(jacket_input):
        # We use tolerance=45 for the jacket to ensure slightly off-white borders are captured
        make_jacket_transparent(jacket_input, jacket_output, tolerance=45)
    else:
        print(f"Error: jacket not found at {jacket_input}")
