# Coffee Roots — Higgsfield Image Prompts

Art-directed prompt package for [PHOTOGRAPHY_BRIEF.md](PHOTOGRAPHY_BRIEF.md).
23 images: 11 named shots + 12 gallery. Every prompt is grounded in the
shipped design system, not generic coffee-shop taste.

## Brand study (what the images must match)

**Derived from the live code, not vibes:**

- **Palette (styles/globals.css):** cream `#FAF7F1` (backgrounds), warm beige
  `#EAE1D2` (surfaces), coffee brown `#4A3628` (depth/text), charcoal
  `#26221F` (shadows), caramel `#C58B5A` (the single accent). Images should
  live inside these five values — caramel appears as crema, wood glow, and
  golden light, never as saturated orange.
- **Mood (site copy):** "a small room with tall windows", "runs on morning
  light", "reclaimed wood", "quiet corners with outlets", "the window bench
  catches sun until mid-afternoon". Photography = morning, calm, unhurried.
- **Menu reality:** V60 filter bar, rosetta latte, raf, cold brew, croissants
  laminated in-house, tiramisu, medovik. Shoot what the menu sells.
- **Place:** Almaty, Kazakhstan — natural Central Asian faces, and one
  tasteful hint of the Tian Shan mountains where a window allows it.
- **Type/layout context:** Manrope headlines over generous whitespace; images
  need clean negative space and low clutter to sit under text.

**Slot → aspect ratio map (from the components):**

| Placement in code | Aspect |
|---|---|
| Home hero background (`hero.tsx`) | 16:9 (frame for 21:9 crop safety) |
| Brand story / About visuals (`aspect-[4/3]`) | 4:3 |
| Location teaser + Contact (`aspect-video`) | 16:9 |
| Instagram tiles (`aspect-square`, 6×) | 1:1 |
| Gallery masonry (`gallery-data.ts`) | 4:5 / 1:1 / 3:4 rotation |

## How to use

1. Copy **STYLE PREFIX + prompt + NEGATIVE** into Higgsfield per image.
2. Generate the full set once, save to `/public/images/` with the exact
   filenames below (SPEC.md §10 workflow — don't regenerate per code
   iteration).
3. Swap-in is data-only: update `lib/gallery-data.ts` ids/dimensions and the
   placeholder blocks in `hero.tsx`, `brand-story.tsx`, `instagram-preview.tsx`,
   `location-teaser.tsx`. Components don't change.

### STYLE PREFIX (prepend to every prompt)

> Photorealistic editorial photograph, ultra high resolution, commercial
> advertising quality, warm minimalist specialty coffee shop, natural window
> daylight, soft shadows, earth-tone palette of cream, warm beige, coffee
> brown and caramel, warm color temperature, soft film-like color grading,
> Scandinavian minimalism with warm natural wood, clean composition with
> generous negative space, premium coffee branding aesthetic, no text, no
> logos, no visible signage, generic unbranded space — not depicting any real
> business.

### GLOBAL NEGATIVE (append to every prompt)

> text, letters, typography, watermark, logo, signage, menu boards with
> readable words, cartoon, illustration, 3D render, CGI, HDR glow,
> oversaturated colors, neon, cluttered composition, plastic-looking skin,
> deformed hands, extra fingers, stock-photo posing, direct flash, cool blue
> color cast

---

## Named shots

### 01 · Hero — `hero-interior.jpg` · 16:9 · home hero

- **Camera angle:** eye level, straight-on one-point perspective down the room
- **Lens:** 35mm, f/4
- **Lighting:** low morning sun raking through floor-to-ceiling windows camera-left, visible soft light shafts, no artificial fixtures on
- **Composition:** wooden coffee bar anchoring the right third, empty window bench left, deep negative space in the upper half for headline overlay
- **Mood:** first hour after opening — still, expectant, warm
- **Palette:** cream walls, oak and reclaimed-wood surfaces, caramel sunlight, charcoal shadows
- **Subject:** cinematic wide interior of a minimalist specialty coffee shop; long wooden bar with espresso machine silhouetted against window light, steam faintly rising, chairs still neatly placed

**PROMPT:** Cinematic wide interior of a minimalist specialty coffee shop just after opening, long reclaimed-oak coffee bar on the right with a professional espresso machine, faint steam rising, low morning sun raking through floor-to-ceiling windows on the left casting long soft shadows and visible light shafts across a polished concrete floor, empty wooden window bench, calm still atmosphere, eye-level 35mm one-point perspective, generous empty wall space in the upper half of frame, 16:9.

**NEGATIVE:** global + people, crowd, pendant lights switched on, night scene

---

### 02 · Coffee Bar — `interior-counter.jpg` · 3:4 · gallery/about

- **Camera angle:** three-quarter view across the bar, slightly below eye level (customer's seated viewpoint)
- **Lens:** 50mm, f/2.8
- **Lighting:** soft window light from behind camera, gentle falloff into warm shadow behind the bar
- **Composition:** barista mid-pour at the machine, hands and portafilter sharp, face softly out of focus and turned toward the work
- **Mood:** quiet craft, concentration without performance
- **Palette:** coffee-brown apron, brushed steel, oak counter, caramel crema
- **Subject:** professional barista extracting espresso on premium equipment

**PROMPT:** Professional barista at a premium espresso machine extracting a double shot, caramel-colored crema flowing into a ceramic cup, hands and portafilter in sharp focus, face softly defocused and angled down toward the work, dark linen apron, reclaimed oak bar counter, soft window light with warm shadow falloff, seated-customer viewpoint at 50mm f/2.8, candid unposed editorial moment, 3:4 vertical.

**NEGATIVE:** global + barista looking at camera, toothy smile, latte art glasses row, busy background

---

### 03 · Signature Latte — `hero-cup.jpg` · 1:1 · instagram tile / featured

- **Camera angle:** 30° above the cup (natural café sitting angle)
- **Lens:** 50mm macro-ish framing, f/2.5
- **Lighting:** single soft window source camera-left, specular highlight on the milk surface
- **Composition:** cup slightly off-center on the rule-of-thirds, saucer edge cropped, one third of a wooden table visible
- **Mood:** intimate, quiet reward
- **Palette:** cream ceramic, white-and-caramel rosetta, deep brown liquid edge
- **Subject:** close-up latte with crisp rosetta art on hand-thrown ceramic

**PROMPT:** Close-up editorial photograph of a latte with a crisp symmetrical rosetta in silky microfoam, hand-thrown cream ceramic cup on a warm oak table, shot from thirty degrees above at 50mm f/2.5 with shallow depth of field, soft window light from the left leaving a gentle specular sheen on the milk surface, faint steam, cup on the right third with calm negative space left, 1:1 square.

**NEGATIVE:** global + heart shape spilling over rim, chocolate powder dusting, multiple cups

---

### 04 · Cappuccino — `drink-cappuccino.jpg` · 1:1 · instagram tile

- **Camera angle:** top-down 90° flat lay
- **Lens:** 35mm equivalent at flat-lay distance, f/5.6 (all in focus)
- **Lighting:** diffuse morning light, soft single shadow to lower-right
- **Composition:** cup centered-left, small spoon parallel to frame edge, large clean wood expanse — minimal, almost austere
- **Mood:** Scandinavian restraint
- **Palette:** warm beige foam, cream cup, honey-toned wood grain
- **Subject:** cappuccino, minimal top-down composition on wooden table

**PROMPT:** Minimal top-down flat lay of a cappuccino in a cream ceramic cup on a warm honey-toned wooden table, fine velvety foam ring, single small brass spoon aligned beside the saucer, diffuse soft morning light casting one gentle shadow to the lower right, large expanse of clean wood grain as negative space, precise Scandinavian composition, f/5.6 everything in focus, 1:1 square.

**NEGATIVE:** global + scattered coffee beans as props, napkin with writing, hands

---

### 05 · Pour Over — `drink-pourover.jpg` · 3:4 · gallery

- **Camera angle:** eye level with the dripper, side-on
- **Lens:** 50mm, f/2.2
- **Lighting:** strong backlight from a window behind, steam illuminated, rim light on the glass
- **Composition:** V60 and glass carafe center-right, kettle spout entering frame from left mid-pour, background melts to warm bokeh
- **Mood:** ritual, patience
- **Palette:** amber coffee bloom, glass, matte charcoal kettle, caramel backlight
- **Subject:** V60 pour-over mid-bloom, water spiraling from a gooseneck kettle

**PROMPT:** Side-on eye-level photograph of a V60 pour-over brewing mid-bloom, thin spiral of water falling from a matte charcoal gooseneck kettle entering from the left, amber coffee blooming in the paper cone, glass carafe below catching the first drops, backlit by a bright window so the steam glows and the glass rims with warm light, background dissolved into caramel bokeh, 50mm f/2.2, 3:4 vertical.

**NEGATIVE:** global + barista face, timer with digits, measuring scale display

---

### 06 · Croissant — `pastry-croissant.jpg` · 4:5 · gallery

- **Camera angle:** 45° classic food angle
- **Lens:** 50mm, f/2.8
- **Lighting:** window light from behind-left, glossy lamination highlights, soft frontal fill
- **Composition:** croissant on a small ceramic plate front-center, espresso cup defocused behind, linen napkin corner
- **Mood:** unhurried breakfast
- **Palette:** golden-brown pastry, cream plate, warm beige linen
- **Subject:** fresh butter croissant beside specialty coffee

**PROMPT:** Editorial food photograph of a freshly baked butter croissant with glossy, deeply laminated golden layers on a small cream ceramic plate, a few honest flakes on the wood beneath, single espresso in a defocused ceramic cup behind, corner of a warm beige linen napkin, backlit window light from the upper left making the lamination shine, 45-degree angle at 50mm f/2.8, shallow depth of field, 4:5 vertical.

**NEGATIVE:** global + jam jars, butter curls, cutlery pile, perfect crumbless plate

---

### 07 · Dessert — `dessert-tiramisu.jpg` · 4:5 · gallery

- **Camera angle:** near eye-level with the plate, slight 10° tilt down
- **Lens:** 50mm, f/2.5
- **Lighting:** soft side window light, delicate shadow gradient across the plate
- **Composition:** single tiramisu slice, clean layer cross-section facing camera, generous plate rim, dark background falloff
- **Mood:** quiet indulgence, patisserie-grade restraint
- **Palette:** espresso-dark layers, cream mascarpone, cocoa dust, charcoal backdrop
- **Subject:** tiramisu slice, premium minimal plating (menu's signature dessert)

**PROMPT:** Premium dessert photograph of a single slice of tiramisu on a cream ceramic plate, clean cross-section showing dark espresso-soaked layers and pale mascarpone, fine even cocoa dusting, shot nearly at plate level with a slight downward tilt, 50mm f/2.5, soft window light from the right with a gentle shadow gradient, background falling off into warm charcoal darkness, minimalist plating with generous empty rim, 4:5 vertical.

**NEGATIVE:** global + mint garnish, sauce swirls, fork stabbed in, whole cake

---

### 08 · Workspace — `workspace-laptop.jpg` · 3:4 · gallery / future "Work From Coffee Roots"

- **Camera angle:** over-the-shoulder three-quarter from behind, no direct face
- **Lens:** 35mm, f/2.8
- **Lighting:** window light wrapping from the front-left of the subject, laptop screen glow negligible
- **Composition:** person at the window bench, laptop open, flat white beside trackpad hand, city softly blown out beyond glass
- **Mood:** productive calm — the site's "room to stay" promise
- **Palette:** oatmeal knit sweater, oak bench, cream wall, caramel highlights
- **Subject:** person quietly working on a laptop with coffee at the window

**PROMPT:** Candid editorial photograph from behind and slightly to the side of a person in an oatmeal knit sweater working on a slim laptop at a wooden window bench in a minimalist coffee shop, flat white in a ceramic cup beside their hand, morning light wrapping around them from the large window, street softly overexposed beyond the glass, face not visible, relaxed natural posture, 35mm f/2.8, warm calm tones, 3:4 vertical.

**NEGATIVE:** global + visible screen content, brand stickers on laptop, headphones with logo, face to camera

---

### 09 · Interior — `interior-seating.jpg` · 4:3 · brand story / About

- **Camera angle:** corner-to-corner wide from seated height
- **Lens:** 35mm, f/4
- **Lighting:** layered daylight — bright at the window wall, warm dimness in the back corners
- **Composition:** mix of window bench, two-top oak tables and a soft corner chair, one large potted plant, staggered depth
- **Mood:** lived-in warmth, acoustic softness
- **Palette:** cream plaster, oak furniture, warm beige textiles, charcoal floor
- **Subject:** wide interior showing seating, furniture, light and atmosphere

**PROMPT:** Wide interior photograph of a minimalist specialty coffee shop from seated height in a corner, window bench with linen cushions catching bright morning light, staggered reclaimed-oak two-top tables, a soft lounge chair in a warm dim back corner, one large green plant against a cream plaster wall, layered depth from bright window to shadowed corner, quiet and empty, 35mm f/4, homely premium Scandinavian atmosphere, 4:3.

**NEGATIVE:** global + people, TV screen, ceiling fluorescents, exposed cabling

---

### 10 · Exterior — `exterior-storefront.jpg` · 16:9 · location teaser / contact

- **Camera angle:** straight-on elevation from across the street, slight left offset
- **Lens:** 35mm, f/5.6
- **Lighting:** early golden hour, storefront glass glowing warm from inside against cool morning street
- **Composition:** symmetric glass-and-wood façade, blank fascia band (no sign text), snow-dusted Tian Shan ridgeline faint in the distance haze
- **Mood:** destination worth crossing the city for
- **Palette:** charcoal frames, oak door, warm interior glow, pale morning sky
- **Subject:** modern premium coffee shop storefront in Almaty

**PROMPT:** Modern minimalist coffee shop storefront photographed straight-on from across a quiet Almaty street at early golden hour, floor-to-ceiling glass in slim charcoal frames with a warm oak door, interior glowing warmly against the cool pale morning, blank clean fascia band with no lettering, faint snow-dusted Tian Shan mountain ridgeline in the distant haze, one small street tree, 35mm f/5.6, calm and premium, 16:9.

**NEGATIVE:** global + storefront lettering, awning text, cars parked in front, pedestrians close to lens

---

### 11 · Coffee Beans — `beans-product.jpg` · 1:1 · instagram tile

- **Camera angle:** top-down with a slight 15° break from flat
- **Lens:** 50mm macro, f/4
- **Lighting:** directional window light skimming across the beans, deep soft shadows between them
- **Composition:** unlabeled kraft bag spilling beans diagonally, a scoop half-buried, two-thirds negative wood space
- **Mood:** luxury product, origin honesty
- **Palette:** roasted brown beans, kraft paper, brass scoop, oak
- **Subject:** luxury product photography of specialty beans

**PROMPT:** Luxury product photograph of freshly roasted specialty coffee beans spilling diagonally from an unlabeled kraft paper bag onto a warm oak surface, brass scoop half-buried in the beans, directional window light skimming low across the scene so every bean has a soft glossy highlight and deep gentle shadow, near-top-down angle at 50mm f/4, two thirds of the frame kept as calm empty wood, 1:1 square.

**NEGATIVE:** global + printed labels, burlap sack cliché, green unroasted beans mixed in

---

## Gallery set (masonry rotation 4:5 → 1:1 → 3:4)

These twelve extend the same identity; the first nine intentionally match the
alt texts already shipped in `messages/*.json` (`gallery.images.g1–g9`), so
the swap keeps every translation truthful.

### G1 · Morning light study — `gallery-01.jpg` · 4:5
**PROMPT:** Abstract-leaning editorial photograph of morning sunlight falling across a cream plaster wall and warm oak tabletop, long soft shadows from a window frame, one empty ceramic cup at the lower edge, near-monochrome warmth, 50mm f/4, contemplative and spare, 4:5 vertical.
**NEGATIVE:** global + people, plants, busy props

### G2 · Beans and warm tones — `gallery-02.jpg` · 1:1
**PROMPT:** Macro photograph of roasted coffee beans filling the frame in shallow focus, oily sheen catching warm window light, tones drifting from caramel to deep coffee brown, 50mm macro f/2.8, tactile and dense, 1:1 square.
**NEGATIVE:** global + scoops, bags, hands

### G3 · Pour-over abstraction — `gallery-03.jpg` · 3:4
**PROMPT:** Detail photograph of water spiraling into a paper filter cone, bloom bubbles in amber coffee, extreme shallow depth of field isolating the spiral, backlit steam, warm glass reflections, 50mm f/2, 3:4 vertical.
**NEGATIVE:** global + kettle handle dominating, digital scale

### G4 · Pastry case shapes — `gallery-04.jpg` · 4:5
**PROMPT:** Editorial photograph of croissants, cardamom buns and banana bread arranged in loose rows on wooden boards behind glass, soft reflections of a bright window in the case, golden laminated textures, 35mm f/2.8 shot at a slight angle through the glass, abundant but orderly, 4:5 vertical.
**NEGATIVE:** global + price tags, paper labels, cling film

### G5 · Hands and cup composition — `gallery-05.jpg` · 1:1
**PROMPT:** Close crop of two hands with natural skin texture cradling a warm ceramic cup, steam rising, chunky knit sweater cuffs, wooden table below, soft window light from the left, no face in frame, 50mm f/2.5, intimate and warm, 1:1 square.
**NEGATIVE:** global + rings with logos, manicure focus, deformed fingers

### G6 · Laptop corner geometry — `gallery-06.jpg` · 3:4
**PROMPT:** Quiet corner of a coffee shop with a closed slim laptop, notebook and espresso cup on a small oak table, strong geometric shadow from a window mullion cutting across the scene, empty chair, 35mm f/4, calm graphic composition, 3:4 vertical.
**NEGATIVE:** global + screen glow, chargers and cable mess

### G7 · Plants by the window — `gallery-07.jpg` · 4:5
**PROMPT:** Large green potted plant beside a floor-to-ceiling window in a cream minimalist café interior, leaves translucent in backlight, soft shadow pattern on the plaster wall, warm wood floor edge, 35mm f/2.8, fresh and serene, 4:5 vertical.
**NEGATIVE:** global + plastic pots with branding, wilted leaves

### G8 · Wood grain textures — `gallery-08.jpg` · 1:1
**PROMPT:** Macro detail of reclaimed oak tabletop grain with raking warm light revealing texture, saw marks and knots, edge of a cream ceramic saucer entering one corner, near-abstract, 50mm macro f/5.6, honest material warmth, 1:1 square.
**NEGATIVE:** global + varnish glare, scratches reading as damage

### G9 · Espresso still life — `gallery-09.jpg` · 3:4
**PROMPT:** Still life of a single espresso in a small ceramic cup on a saucer, thick caramel crema, dark moody background with one soft window highlight, tiny wisp of steam, 50mm f/2.8 at eye level with the cup, chiaroscuro but warm, 3:4 vertical.
**NEGATIVE:** global + sugar cubes, cinnamon sticks, beans scattered as props

### G10 · Milk pour — `gallery-10.jpg` · 4:5
**PROMPT:** High-shutter editorial capture of steamed milk pouring from a steel pitcher into a latte mid-rosetta, ribbon of white folding into caramel, barista hands only, soft window key light, 50mm f/2.8, precise and alive, 4:5 vertical.
**NEGATIVE:** global + splashing mess, face, motion smear

### G11 · Ceramic shelf — `gallery-11.jpg` · 1:1
**PROMPT:** Open oak shelf holding a neat run of hand-thrown ceramic cups and saucers in cream and warm beige glazes, small irregularities showing the handmade quality, soft daylight, shallow focus falling off along the row, 50mm f/2.5, quiet craft, 1:1 square.
**NEGATIVE:** global + printed mugs, plastic items, price stickers

### G12 · Winter window — `gallery-12.jpg` · 3:4
**PROMPT:** View from inside a warm café toward a large window on a bright Almaty winter morning, gentle condensation at the glass edges, out-of-focus snowy street and faint mountain silhouette beyond, a steaming cup on the sill in sharp focus, 35mm f/2, cozy contrast of warm interior and cold light, 3:4 vertical.
**NEGATIVE:** global + heavy frost obscuring view, holiday decorations

---

## After generation — integration checklist

- [ ] Files saved to `/public/images/` with the names above (JPG, longest edge ≥ 2000px)
- [ ] Compress (e.g. Squoosh/sharp, quality ~80) before committing
- [ ] Update `lib/gallery-data.ts` (ids/src/width/height) and swap placeholder
      blocks in `hero.tsx`, `brand-story.tsx`, `instagram-preview.tsx`,
      `location-teaser.tsx`
- [ ] Update `gallery.images.*` alts in all three message files if any shot
      deviates from its description (parity script will hold you honest)
- [ ] Re-run Lighthouse after swap — real photos are the biggest perf risk
      (this is where `next/image` sizes/lazy loading earn their keep)
- [ ] §0 check: no text/logos/signage crept into any generation
