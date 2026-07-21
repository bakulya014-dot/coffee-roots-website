# Coffee Roots — Premium Website Presentation
## Master Prompt for Claude (to design the client pitch deck)

This document is a ready-to-send brief. Paste one of the two prompts below into
Claude and it will build a premium, presentation-ready deck for the Coffee Roots
owners. Everything Claude needs — real business facts, brand colours, the live
site URL, and the exact wording in **English, Russian and Kazakh** — is included
so the result is accurate, not invented.

- **Live site (source of truth for content & screenshots):** https://bakulya014-dot.github.io/coffee-roots-website/
- **Audience:** café owners, business managers, potential investors — non-technical
- **Deliverable:** three complete language editions (EN / RU / KZ), identical visual quality
- **Tone:** business value, brand, customer experience — *not* programming

---

## ⚡ PART 1 — THE SIMPLE PROMPT (quick version)

> Design a premium, Apple-Keynote-quality slide presentation that pitches a new
> website to the owners of **Coffee Roots**, a specialty coffee café in Almaty,
> Kazakhstan (4.9★, Bogenbai Batyr Street, @coffeeroots.kz). Build it as a single
> self-contained HTML artifact with left/right arrow navigation between full-screen
> slides. Warm, luxurious, minimalist, lots of whitespace. Palette: cream #FAF7F1,
> beige #EAE1D2, caramel-gold #C58B5A, coffee brown #4A3628, espresso #26221F.
> Elegant serif display headings + clean sans body. Tell a story: Cover → About →
> The Challenge → Our Solution → Website Tour (in device mockups) → Design System →
> Key Features → Business Benefits → Three Languages → Customer Journey → Future
> Opportunities → Thank You. No programming jargon — explain business value only.
> Produce **three separate complete editions: English, Russian (Русский), and
> Kazakh (Қазақша)** with natural, professional wording adapted for owners (not
> word-for-word translation). Credit the designer: **Bakytzhan Zhylsaiyn**.

---

## 📐 PART 2 — THE DETAILED PROMPT (full version — recommended)

Copy everything inside this section into Claude.

---

### ROLE

You are an award-winning creative director and senior presentation designer at a
top international digital agency. You are pitching a premium website to the owners
of a real café. Your work is comparable to the keynote decks of Apple, Airbnb,
Stripe, Notion and Linear: expensive, elegant, modern, quietly confident. You are
selling **brand elevation and customer experience**, never technology.

### THE DELIVERABLE

A **self-contained HTML slide presentation** (a single artifact, all assets inline)
with:
- Full-screen slides, one idea per slide, navigated by ← / → keys, on-screen
  arrows, and a clickable progress indicator.
- A slim progress bar and a discreet slide counter.
- Smooth, subtle transitions between slides (fade / gentle rise). Respect
  `prefers-reduced-motion`.
- Light **and** dark theme support driven by the viewer's system preference.
- Fully responsive; readable when projected on a large screen or viewed on a laptop.
- **Do not** design a phone-app UI. This is a boardroom presentation.

### THE BUSINESS (use these real facts — do not invent details)

- **Name:** COFFEE ROOTS — specialty coffee café
- **Location:** Bogenbai Batyr Street, Almaty, Kazakhstan (улица Богенбай Батыра, Алматы 050000)
- **Reputation:** 4.9 ★ average across 17 reviews
- **Price range:** 1,000–4,000 ₸ · Services: dine-in, takeaway, delivery
- **Hours:** Mon–Fri 8:00–22:00 · Sat 9:00–22:00 · Sun 9:00–21:00
- **Instagram:** @coffeeroots.kz · **Email:** hello@coffeeroots.kz
- **Character:** modern, minimalist, cosy, premium, warm; natural light, reclaimed
  wood, specialty single-origin coffee, remote-work friendly — "a small room with
  tall windows" in the heart of the city.
- **Signature look of the space:** teal-blue columns and cabinetry, a natural
  stone-clad coffee bar, a colourful hand-painted wall mural, black bentwood chairs,
  warm wood pedestal tables, drinks served on deep-red saucers, an inviting curved
  glass corner façade with yellow bistro chairs on the terrace.
- **Live website being presented:** https://bakulya014-dot.github.io/coffee-roots-website/
  (use it as the source of truth for screenshots and copy).

> Framing note: present this as **the proposed premium website for Coffee Roots**.
> The photography in the current build is art-directed mood imagery matched to the
> real café; describe it as "styled to your space, ready to be swapped for a
> professional photo shoot of your own room." Keep this framing warm and honest.

### VISUAL IDENTITY (match the website's brand exactly)

**Colour palette** — use these and nothing that fights them:
| Token | Hex | Role |
|---|---|---|
| Cream | `#FAF7F1` | primary background |
| Warm beige | `#EAE1D2` | secondary surfaces, panels |
| Caramel / soft gold | `#C58B5A` | the single accent — CTAs, highlights, hairlines |
| Coffee brown | `#4A3628` | body text on light |
| Espresso / charcoal | `#26221F` | dark-mode ground, deep headings |

Spend your boldness on caramel gold and keep everything around it calm. Choose
neutrals with a faint warm bias (never a cold grey). In dark mode, keep caramel
reading identically against espresso.

**Typography** — modern and premium. Pair a characterful serif or high-contrast
display face for headlines with a clean humanist sans for body and labels. (The
website itself uses **Manrope** for headings and **Inter** for body — you may echo
that, or elevate the headline face to something more editorial for the deck.) Set a
real type scale, generous line-height, uppercase eyebrows with letter-spacing, and
`text-wrap: balance` on headings. Because font CDNs may be blocked, inline any
custom face as a data-URI `@font-face` or use elegant system fallbacks — never risk
a silent fallback.

**Art direction:** large photography, deep whitespace, hairline gold dividers,
restrained iconography (thin line icons, consistent weight). Premium device
mockups (a clean laptop frame; optionally a tablet and phone) to show the site in
context. Avoid every AI-generic cliché: no purple-blue gradients, no emoji as
section markers, no drop-shadowed cards with a coloured left rail, nothing centred
by default. This should look like it cost money.

### STORY & SLIDES (12 slides)

Tell one continuous story: **Problem → Solution → Walkthrough → Value → Growth →
Thanks.** Write every headline as a confident statement, not a label.

1. **Cover** — "Coffee Roots" wordmark + "Premium Website Presentation". Large hero
   image of the café interior; the tagline *"Rooted in craft, brewed for the
   neighbourhood."* Quiet, cinematic, lots of air.

2. **About Coffee Roots** — the café's philosophy and atmosphere. Single-origin
   specialty coffee, natural light, reclaimed wood, a room made for staying. Mission:
   *make specialty coffee feel ordinary — an everyday ritual in a room that treats
   your time as well as your cup.* Rating 4.9★ (17 reviews) as a trust mark.

3. **The Challenge** — why a café needs a professional website today. Customers
   search before they visit; first impressions are now digital; social media alone
   doesn't own your brand or answer "are you open / where / what's on the menu."
   Trust, discoverability, and accessibility are at stake.

4. **Our Solution** — introduce the website as the answer: a calm, premium digital
   home that feels like walking into the café. Explain how the design *is* the brand —
   warm palette, natural imagery, effortless navigation. One elegant statement slide.

5. **Website Tour** — the six pages shown in device mockups (large screenshots from
   the live site). Explain each in a sentence of customer value:
   *Home* (a warm welcome + featured drinks), *Menu* (26 items, filter by category,
   prices in ₸), *About* (the story that builds loyalty), *Gallery* (the room and the
   coffee, full-screen), *Reservations* (book a table in seconds), *Contact* (hours,
   address, live map, one tap to directions).

6. **Design System** — palette, typography, layout, iconography, photography — and
   *why each choice serves the café experience*: cream and wood tones for warmth,
   gold for the moments that matter, generous space so nothing feels rushed — the
   digital equivalent of the room's calm.

7. **Key Features** — a clean grid: Fully Responsive · Three Languages · Fast &
   Lightweight · Live Google Map · Photo Gallery · Effortless Navigation · Found on
   Google (SEO) · Modern, Premium Interface. Each with a thin icon and a one-line
   benefit.

8. **Business Benefits** — the owner's payoff: builds customer trust · strengthens
   brand identity · a professional online presence · a stronger first impression ·
   effortless menu browsing · easy to reach and find · and room to grow.

9. **Three-Language Experience** — the standout slide. Show the same welcome line
   switching between 🇰🇿 Қазақша, 🇷🇺 Русский, 🇬🇧 English (animate or show side by
   side). Explain: Almaty is multilingual and Coffee Roots draws locals, Russian
   speakers, and international visitors — a site that greets each guest in their own
   language signals a premium, welcoming brand and widens reach. (This is real and
   built — lean into it.)

10. **Customer Journey** — an elegant horizontal flow: discovers the site → browses
    the menu → reads the story → finds the location → visits the café → becomes a
    regular. Show how the site guides each step.

11. **Future Opportunities** — what comes next (clearly framed as roadmap, not
    built): Online Ordering · Table Reservations at scale · Customer Reviews ·
    Instagram Integration · Loyalty Program · AI Coffee Recommendations · Seasonal
    Campaigns · Gift Cards. Show the platform can grow with the business.

12. **Thank You** — "Coffee Roots" · *Questions?* · **Designed by Bakytzhan
    Zhylsaiyn** · Instagram @coffeeroots.kz. Warm, minimal, memorable.

### LANGUAGE EDITIONS (critical requirement)

Produce **three complete, separate editions** of the entire deck:
1. **English**
2. **Russian (Русский)**
3. **Kazakh (Қазақша)**

Each edition must have identical visual quality and layout. Do **not** translate
word-for-word — adapt the copy so it reads naturally to a business owner in that
language. Use the **Trilingual Content Pack** in Part 3 below as your source copy
for headlines and key lines; expand naturally in the same voice. Kazakh must render
its specific letters correctly (Ә ә Ғ ғ Қ қ Ң ң Ө ө Ұ ұ Ү ү Һ һ І і) — use a font
with full Cyrillic-Extended coverage.

Deliver the three editions either as one artifact with a language switcher (EN /
RU / KZ) in the corner, **or** as three separate artifacts — whichever produces the
cleanest result. A single deck with a language switcher is preferred, mirroring the
website itself.

### QUALITY BAR

Every slide presentation-ready and visually impressive. Restrained motion, precise
spacing, real hierarchy. It should feel like a top international agency built it for
a premium café. When in doubt, remove — elegance is whitespace and confidence.

---

## 🌍 PART 3 — TRILINGUAL CONTENT PACK (real copy for each slide)

Use this as the source wording for the three editions. Copy is adapted from the
café's own site voice. Expand naturally; keep it warm and premium.

### Slide 1 — Cover
| | |
|---|---|
| **EN** | **Coffee Roots** — Premium Website Presentation · *"Rooted in craft, brewed for the neighbourhood."* |
| **RU** | **Coffee Roots** — Презентация премиального сайта · *«Кофе с корнями — сваренный для своего района.»* |
| **KZ** | **Coffee Roots** — Премиум сайт презентациясы · *«Тамырынан келген кофе — өз ауданың үшін дайындалған.»* |

### Slide 2 — About
| | |
|---|---|
| **EN** | *A small room with tall windows.* Single-origin specialty coffee, natural light, and a quiet corner to work — in the heart of Almaty. 4.9★ · 17 reviews. |
| **RU** | *Небольшой зал с высокими окнами.* Спешелти-кофе из моносортов, естественный свет и тихий уголок для работы — в самом сердце Алматы. 4.9★ · 17 отзывов. |
| **KZ** | *Биік терезелі шағын зал.* Моносорттардан жасалған спешелти кофе, табиғи жарық және жұмысқа арналған тыныш бұрыш — Алматының дәл жүрегінде. 4.9★ · 17 пікір. |

### Slide 3 — The Challenge
| | |
|---|---|
| **EN** | **Guests decide online — before they walk in.** Today customers search first. A social page isn't enough: people want your hours, your menu, your location, and a feeling of who you are — instantly, and in their language. |
| **RU** | **Гости решают онлайн — ещё до входа.** Сегодня клиенты сначала ищут. Одной страницы в соцсетях мало: людям нужны часы работы, меню, адрес и ощущение вашего бренда — сразу и на своём языке. |
| **KZ** | **Қонақтар онлайн шешеді — кіріп үлгермей.** Бүгінде клиенттер алдымен іздейді. Әлеуметтік желі жеткіліксіз: адамдарға жұмыс уақыты, мәзір, мекенжай және брендтің сезімі керек — бірден әрі өз тілінде. |

### Slide 4 — Our Solution
| | |
|---|---|
| **EN** | **A digital home that feels like your room.** Warm, calm, effortless — the design is the brand. Everything a guest needs, presented the way your café makes them feel. |
| **RU** | **Цифровой дом с атмосферой вашего зала.** Тепло, спокойно, легко — дизайн и есть бренд. Всё, что нужно гостю, поданное так, как чувствуется в вашем кафе. |
| **KZ** | **Залыңыздың атмосферасын жеткізетін цифрлық үй.** Жылы, тыныш, жеңіл — дизайн дегеніміз — бренд. Қонаққа қажет барлық нәрсе, кофеханаңыз сыйлайтын сезіммен ұсынылған. |

### Slide 5 — Website Tour (page labels)
| Page | EN | RU | KZ |
|---|---|---|---|
| Home | A warm welcome & featured drinks | Тёплое приветствие и избранные напитки | Жылы қарсы алу және таңдаулы сусындар |
| Menu | 26 items, filter by category, prices in ₸ | 26 позиций, фильтр по категориям, цены в ₸ | 26 позиция, санат бойынша сүзгі, бағасы ₸ |
| About | The story that builds loyalty | История, которая создаёт лояльность | Адалдық қалыптастыратын әңгіме |
| Gallery | The room and the coffee, full-screen | Зал и кофе во весь экран | Зал мен кофе — толық экранда |
| Reservations | Book a table in seconds | Забронировать столик за секунды | Секундта үстел брондау |
| Contact | Hours, address, live map, directions | Часы, адрес, карта, маршрут | Уақыт, мекенжай, карта, бағыт |

### Slide 6 — Design System
| | |
|---|---|
| **EN** | **Every choice serves the room.** Cream and wood tones for warmth, gold for the moments that matter, and generous space so nothing feels rushed — the calm of your café, translated to the screen. |
| **RU** | **Каждое решение работает на атмосферу.** Кремовые и деревянные тона для тепла, золото для важных акцентов и много воздуха — спокойствие вашего кафе, перенесённое на экран. |
| **KZ** | **Әрбір шешім зал үшін жұмыс істейді.** Жылылық үшін кілегей мен ағаш реңктері, маңызды сәттер үшін алтын және кең кеңістік — кофеханаңыздың тыныштығы экранға көшірілген. |

### Slide 7 — Key Features (labels)
| EN | RU | KZ |
|---|---|---|
| Fully Responsive | Адаптивный дизайн | Толық бейімделгіш |
| Three Languages | Три языка | Үш тіл |
| Fast & Lightweight | Быстрый и лёгкий | Жылдам әрі жеңіл |
| Live Google Map | Живая карта Google | Тірі Google картасы |
| Photo Gallery | Фотогалерея | Фотогалерея |
| Effortless Navigation | Простая навигация | Оңай навигация |
| Found on Google (SEO) | Виден в Google (SEO) | Google-де көрінеді (SEO) |
| Modern Premium Interface | Современный премиум-интерфейс | Заманауи премиум интерфейс |

### Slide 8 — Business Benefits
| EN | RU | KZ |
|---|---|---|
| Builds customer trust | Укрепляет доверие клиентов | Клиенттердің сенімін нығайтады |
| Strengthens brand identity | Усиливает айдентику бренда | Бренд бейнесін күшейтеді |
| A professional online presence | Профессиональное присутствие в сети | Кәсіби онлайн-бейне |
| A stronger first impression | Более сильное первое впечатление | Күштірек алғашқы әсер |
| Effortless menu browsing | Удобный просмотр меню | Мәзірді ыңғайлы қарау |
| Easy to reach and find | Легко найти и связаться | Табу және байланысу оңай |
| Room to grow | Возможность роста | Өсуге мүмкіндік |

### Slide 9 — Three-Language Experience
| | |
|---|---|
| **EN** | **One café, three welcomes.** Almaty speaks Kazakh, Russian and English — and so does your website. Greeting every guest in their own language is a mark of a premium, hospitable brand, and it widens your reach to locals and visitors alike. |
| **RU** | **Одно кафе — три приветствия.** Алматы говорит на казахском, русском и английском — и ваш сайт тоже. Встречать каждого гостя на его языке — признак премиального, гостеприимного бренда и шире охват среди местных и гостей города. |
| **KZ** | **Бір кофехана — үш қарсы алу.** Алматы қазақша, орысша және ағылшынша сөйлейді — сайтыңыз да солай. Әрбір қонақты өз тілінде қарсы алу — премиум әрі қонақжай брендтің белгісі және жергілікті тұрғындар мен қонақтар арасында ауқымды қамту. |

### Slide 10 — Customer Journey (steps)
| EN | RU | KZ |
|---|---|---|
| Discovers the site | Находит сайт | Сайтты табады |
| Browses the menu | Смотрит меню | Мәзірді қарайды |
| Reads the story | Читает историю | Әңгімені оқиды |
| Finds the location | Находит адрес | Мекенжайды табады |
| Visits the café | Приходит в кафе | Кофеханаға келеді |
| Becomes a regular | Становится постоянным гостем | Тұрақты қонаққа айналады |

### Slide 11 — Future Opportunities (roadmap labels)
| EN | RU | KZ |
|---|---|---|
| Online Ordering | Онлайн-заказ | Онлайн тапсырыс |
| Table Reservations | Бронирование столиков | Үстел брондау |
| Customer Reviews | Отзывы клиентов | Клиент пікірлері |
| Instagram Integration | Интеграция с Instagram | Instagram интеграциясы |
| Loyalty Program | Программа лояльности | Адалдық бағдарламасы |
| AI Coffee Recommendations | AI-подбор кофе | AI кофе ұсынысы |
| Seasonal Campaigns | Сезонные кампании | Маусымдық науқандар |
| Gift Cards | Подарочные карты | Сыйлық карталары |

### Slide 12 — Thank You
| | |
|---|---|
| **EN** | **Thank you.** Questions? · Coffee Roots · Designed by **Bakytzhan Zhylsaiyn** · @coffeeroots.kz |
| **RU** | **Спасибо.** Вопросы? · Coffee Roots · Дизайн — **Бакытжан Жылсайын** · @coffeeroots.kz |
| **KZ** | **Рақмет.** Сұрақтарыңыз бар ма? · Coffee Roots · Дизайн — **Бақытжан Жылсайын** · @coffeeroots.kz |

---

## 📋 PART 4 — VERIFIED PROJECT FACTS (do not contradict these)

**What genuinely exists on the live site today** (present these as real):
- 6 pages: Home, Menu, About, Gallery, Reservations, Contact
- 3 languages, switchable instantly, choice remembered: English, Русский, Қазақша
- Menu of 26 items in 6 categories (Coffee, Tea, Pastries, Desserts, Breakfast, Lunch), prices in ₸
- Photo gallery with full-screen viewer; responsive on phone, tablet, desktop
- Reservations form and Contact page with opening-hours table, address card,
  embedded Google Map and a one-tap "Open in Google Maps" button
- Light & dark mode; fast-loading, optimised images; found-on-Google setup (SEO)
- Instagram linked throughout to @coffeeroots.kz

**Sample menu (for realistic screenshots / mockups):**
- Coffee: Espresso 1,200 ₸ · Latte 1,800 ₸ · Raf 2,000 ₸ · Cold brew 2,200 ₸ · Flat white 1,900 ₸ · Filter V60 1,700 ₸
- Tea: Taiga black tea · Sencha · Sea buckthorn tea · Herbal infusion
- Pastries: Butter croissant · Almond croissant · Cardamom bun · Banana bread
- Desserts: Tiramisu · Basque cheesecake · Medovik · Dark chocolate tart
- Breakfast: Avocado toast · Syrniki · Granola bowl · Omelette
- Lunch: Chicken pesto sandwich · Grain bowl · Soup of the day · Caesar salad

**On the "future" slide only** (label clearly as roadmap, *not* built yet):
online ordering, loyalty program, AI coffee recommendations, gift cards, customer
reviews, seasonal campaigns, deeper Instagram integration.

**Honesty note for the presenter:** the current build is an independent concept
styled to Coffee Roots; imagery is art-directed mood photography to be replaced by
a real shoot of the café. Frame it as a proposal, and it's a truthful, confident pitch.

---

*Prepared for Bakytzhan Zhylsaiyn · Local Web Agency · client project: Coffee Roots*
