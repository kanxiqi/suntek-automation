# Image placeholders

Every photo on this site is intentionally a **placeholder** so the layout can be reviewed
before real photography is available.

## Files

| File | Intrinsic size | Use for |
| --- | --- | --- |
| `banner-home.webp` | 2520 × 400 | Homepage hero banner slide 1 |
| `banner-gearbox.webp` | 2520 × 400 | Homepage hero banner slide 2 |
| `banner-motor.webp` | 2518 × 400 | Homepage hero banner slide 3 |
| `banner-custom.webp` | 2518 × 400 | Homepage hero banner slide 4 |
| `product-3x2.webp` | 1200 × 800 | Product group photos, comparison shots |
| `product-square.webp` | 1000 × 1000 | Search / catalogue thumbnails |
| `factory-3x2.webp` | 1200 × 800 | Factory, workshop, QC lab photos |
| `map-16x9.webp` | 1600 × 900 | Location map (replace with a real embed) |
| `dimension-drawing.webp` | 1200 × 800 | Mechanical dimension drawing |
| `speed-torque-curve.webp` | 943 × 625 | Speed-torque curve chart |
| `selection-guide.webp` | 1200 × 800 | Selection guide / catalogue page |

## How to replace

1. Drop the real file into `img/products/<family>/` (see the `img/products` READMEs) or `img/`.
2. Swap the `src` and keep the **same `width`/`height`** so the page does not shift (CLS).
3. Update the `alt` text so it describes the actual photo, and keep it under ~125 characters.
4. Prefer `WebP` (8–15 KB per card image) and keep one consistent aspect ratio per section.

## Rules used in the markup

- Content images: `loading="lazy" decoding="async"` + explicit `width`/`height`.
- Above-the-fold hero image: **no** lazy loading, plus `fetchpriority="high"`.
- Decorative artwork: `alt=""` so screen readers skip it.
- Every `alt` starts with the product name, e.g. `alt="PG42 planetary gearbox, 42 mm frame, front view"`.
