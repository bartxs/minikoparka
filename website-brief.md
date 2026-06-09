# Website Brief: Transport & Earthworks Service — Wałbrzych, Poland

## Source Context

This brief is derived from an OLX.pl classified listing (Polish marketplace, equivalent to Craigslist/Gumtree) for a solo operator or small local business offering **dump truck transport and mini excavator earthworks** services in the **Wałbrzych region** of Lower Silesia, Poland.

The OLX listing is the entire current "online presence" of this business — no dedicated website exists yet. The goal of this project is to graduate that listing into a proper, credible service website.

---

## Business Understanding

### Who They Are
A local, hands-on operator — likely one person or a small family business — offering practical construction-support services to homeowners, developers, and contractors in the Wałbrzych area (Lower Silesia). The tone is direct and no-nonsense: they list what they have, what they do, and imply "call me."

### Core Services (two pillars)

#### 1. Dump Truck Transport (`Wywrotka 4x4`)
- Vehicle: 4x4 tipper/dump truck (all-terrain capability — key differentiator vs standard trucks)
- Materials transported and delivered:
  - **Piasek** — sand (for masonry, sub-base)
  - **Kamień ozdobny** — decorative stone / gravel (landscaping)
  - **Kruszywa** — aggregates generally
  - **Ziemia** — soil / topsoil
  - **Gruz** — rubble/debris removal

#### 2. Earthworks (`Roboty Ziemne`) — Mini Excavator
- Small/compact excavator — suited for residential plots, gardens, tight access
- Tasks:
  - Wykopy (excavation) — foundations, drainage, sewage pits
  - Niwelacja terenu — land levelling / grading
  - Zasypki — backfilling
  - Prace porządkowe — site clearance

### Service Area
**Wałbrzych and surrounding area** — Lower Silesia region, SW Poland. This is an industrial/post-mining city with significant residential renovation and new-build activity. The audience is heavily local.

### Target Audience
1. **Private homeowners** building or renovating — need sand/aggregate delivery, garden levelling, drainage digging
2. **Small contractors / builders** — need reliable bulk material delivery and earthworks support
3. **Landscapers** — decorative stone/gravel delivery

---

## UX/UI Analysis — Senior Designer Perspective

### What the OLX Listing Does Well
- Very clear service summary in the title itself
- Mentions the 4x4 capability (trust signal — reaches difficult terrain)
- Lists specific materials (answers the "do you carry what I need?" question instantly)

### What the OLX Listing Lacks (= what the website must fix)
1. **No visual proof of work** — photos of the truck, the excavator, completed jobs are the #1 trust builder for this type of service; the listing may have photos but a website can showcase them properly
2. **No clear CTA flow** — OLX forces contact via their platform; the website should surface a phone number and/or WhatsApp immediately
3. **No service area clarity** — people need to know if you'll come to their village
4. **No pricing signal** — even a "price on request" or "free quote" message removes friction
5. **No social proof** — reviews, number of completed jobs, years in business
6. **No equipment specs** — what size truck? load capacity? excavator reach? This matters to contractors

---

## Website Structure

### Pages
This is a **single-page website** (appropriate for a solo operator). Multi-page is overkill and adds maintenance burden.

---

### Section Map (top to bottom)

```
┌─────────────────────────────────────────────┐
│  HEADER / NAV                               │
│  Logo | Services | Gallery | Contact        │
│  [Phone number always visible top-right]    │
├─────────────────────────────────────────────┤
│  HERO                                       │
│  Headline + sub + primary CTA               │
│  Background: truck or excavator action shot │
├─────────────────────────────────────────────┤
│  SERVICES                                   │
│  2-column: Transport | Earthworks           │
│  Each with icon, short desc, detail list    │
├─────────────────────────────────────────────┤
│  MATERIALS / WHAT WE DELIVER                │
│  Visual grid of materials available         │
│  (sand, decorative stone, aggregates, etc.) │
├─────────────────────────────────────────────┤
│  WHY US / TRUST SIGNALS                     │
│  4x4 capability, local, fast response, etc. │
├─────────────────────────────────────────────┤
│  GALLERY / PHOTO PROOF                      │
│  Grid of job photos, equipment photos       │
├─────────────────────────────────────────────┤
│  SERVICE AREA                               │
│  Map or text list of towns served           │
├─────────────────────────────────────────────┤
│  CONTACT / CTA                              │
│  Large phone, WhatsApp button, simple form  │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  Name, phone, area, brief legal note        │
└─────────────────────────────────────────────┘
```

---

### Section Details

#### HEADER
- Sticky on scroll
- Business name (to be confirmed — likely personal name or informal trade name)
- Minimal nav links anchoring to sections
- **Phone number always visible** — this is the primary conversion goal; desktop top-right, mobile as sticky bottom bar
- On mobile: collapses to hamburger, phone number stays as icon/button

#### HERO
- Full-width, high-impact
- Background: photo of the 4x4 dump truck in action OR an excavator on a residential site
- Headline: Direct and local — e.g. *"Transport i roboty ziemne — Wałbrzych i okolice"*
- Sub-headline: Key differentiator — *"Wywrotka 4x4. Minikoparkas. Piasek, kamień, ziemia z dostawą."*
- Primary CTA button: **"Zadzwoń — darmowa wycena"** (Call — free quote)
- Secondary CTA: **WhatsApp** button (very common in Polish trades)

#### SERVICES
- Two clear cards side by side (stack on mobile):
  - **Transport Wywrotką** — 4x4 tipper truck, material delivery, rubble removal
  - **Roboty Ziemne** — mini excavator, excavation, levelling, backfill
- Each card: icon + name + 3–5 bullet points of specific tasks
- Optional: "Zapytaj o wycenę →" link on each card

#### MATERIALS WE DELIVER
- Visual card grid (6–8 items):
  - Piasek do murowania (masonry sand)
  - Piasek podsypowy (sub-base sand)
  - Kamień ozdobny (decorative stone)
  - Kruszywo / tłuczeń (crushed aggregate)
  - Ziemia ogrodowa / humus (garden soil)
  - Gruz (rubble removal — outbound)
- Each with a small photo or icon and label
- Note: minimum/typical load size if known

#### TRUST SIGNALS ("Dlaczego my?")
- **4x4 napęd** — Docieramy tam, gdzie inne auta nie dojadą (We reach where others can't)
- **Lokalny operator** — Wałbrzych i okolice, szybki czas reakcji (Local, fast response)
- **Doświadczenie** — X lat na rynku (years in business)
- **Elastyczność** — małe i duże zlecenia (small and large jobs)
- **Uczciwa cena** — wycena bez zobowiązań (honest pricing, no obligation)

#### GALLERY
- Masonry grid or simple lightbox gallery
- 8–12 photos minimum
- Categories: truck photos, excavator in action, completed levelling jobs, delivered materials
- Mobile: horizontal scroll or 2-col grid

#### SERVICE AREA
- Simple text approach OR embedded Google Map
- List key towns/gminas: Wałbrzych, Świdnica, Dzierżoniów, Nowa Ruda, Boguszów-Gorce, Szczawno-Zdrój, etc.
- Tagline: *"Nie jesteś pewien czy dojedziemy? Zadzwoń — ustalimy."*

#### CONTACT
- Section is the final CTA — should feel urgent and warm
- Large-format phone number (tap-to-call on mobile)
- WhatsApp button (deep link to WhatsApp with pre-filled message)
- Optional: simple 3-field form (name, phone, message) — no complex forms
- Hours: if known (e.g. Mon–Sat 7:00–18:00)
- Note: *"Odpowiadamy szybko"* (We respond quickly)

#### FOOTER
- Minimal: name/trade name, phone, service area, year
- No need for complex legal footer for a sole trader

---

## Content Inventory (What to Gather Before Build)

| Item | Status | Notes |
|---|---|---|
| Business/operator name | Unknown | Needed for brand |
| Phone number | Unknown | Primary CTA — critical |
| WhatsApp number | Unknown | High priority for trades |
| Years in operation | Unknown | Trust signal |
| Truck specs (load capacity, make) | Partial — "4x4 wywrotka" known | |
| Excavator specs (make, size, reach) | Unknown | |
| Specific towns served | Partial — Wałbrzych confirmed | |
| Photos of truck | From OLX listing | Need hi-res versions |
| Photos of excavator | From OLX listing | Need hi-res versions |
| Job photos (before/after) | From OLX listing | Expand gallery |
| Logo or trade name branding | Unknown | May not exist yet |
| Pricing model | Unknown | Quote-based likely |

---

## Design Direction (UX/UI Notes for Implementation Phase)

### Aesthetic
- **Industrial but trustworthy** — not corporate, not fancy, not tech-startup. This is a trades business.
- Palette should evoke: earth, machinery, hard work — think dark charcoal/anthracite, amber/orange accent (machinery color), off-white or concrete-grey backgrounds
- Avoid: gradients that look like a SaaS product, stock photography of smiling people in hard hats, over-designed hero animations
- Typography: A strong, slightly condensed display face (Barlow Condensed, Bebas Neue, or similar). Body in a clean, readable sans (Inter, Nunito). Polish diacritics must render correctly (ą, ę, ó, ś, ź, ż, ć, ł, ń).

### Mobile-First Priority
- **Most contacts will come from mobile** — someone sees the listing, taps through, immediately needs to call or WhatsApp
- Phone number must be one tap away from anywhere on the page
- Hero CTA must be above the fold on a 390px screen
- Sticky bottom bar on mobile: [📞 Zadzwoń] [💬 WhatsApp]

### Performance
- No heavy frameworks needed — this can be HTML/CSS/minimal JS
- Images must be optimized (WebP, lazy loaded)
- Fast load on mobile networks is a trust signal in itself

### Language
- Polish only — no need for multi-language
- Tone: direct, practical, local. Not formal. Not salesy. How a skilled tradesperson talks.

---

## Key Design Decisions to Make in Planning Phase

1. **Hero image vs hero video** — a short clip of the truck tipping a load would be powerful if available
2. **Color accent** — amber/construction-orange vs industrial yellow vs earth tones
3. **Materials section treatment** — photo cards vs illustrated icons vs text list
4. **Gallery layout** — lightbox vs scroll vs masonry
5. **Map inclusion** — embed Google Map of service area or just text list
6. **Contact form vs phone-only** — form adds friction but captures leads when no one's available to answer

---

## Summary for Claude Code

This is a **local Polish trades service website** for a one-person (or micro) business operating a 4x4 dump truck and mini excavator in the Wałbrzych region of Poland. The OLX listing is the only current online presence.

**Goal:** Build a single-page, mobile-first website that:
1. Immediately communicates what the service is and where they operate
2. Makes calling or WhatsApping the operator the easiest possible action
3. Builds trust through equipment photos, job photos, and specificity
4. Lists all materials available for delivery and earthworks services offered
5. Feels authentic to the trades/construction world — not generic

**Primary conversion:** Phone call or WhatsApp message.  
**Primary audience:** Polish-speaking homeowners and small contractors in the Wałbrzych area.  
**Tech stack recommendation:** Static HTML/CSS/JS or lightweight framework (Next.js if wanted, but plain HTML is sufficient and faster).
