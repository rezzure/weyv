export const blogPosts = [
  {
    slug: "designing-offices-for-hybrid-work",
    title: "Designing Offices for a Hybrid Work Week",
    category: "Office Design",
    date: "2026-06-12",
    author: "WEYV Studio",
    excerpt:
      "As teams split their week between home and office, the floor plate itself has to work harder. Here's how we're rethinking density, bookable space and quiet zones.",
    image:
      "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Hybrid work has quietly rewritten the brief for every corporate interior project we take on. The old assumption — a fixed desk for every headcount — no longer holds, and the space that replaces it has to work harder on fewer square feet.",
      "We've moved toward a mix of bookable focus rooms, generous informal collaboration zones and a smaller ratio of assigned desks. The goal isn't just efficiency; it's making the office worth the commute by offering something home can't.",
      "Acoustic design has become just as important as layout. With more concentrated collaboration happening in-office, sound management between zones prevents the open plan from becoming a source of fatigue rather than energy.",
    ],
  },
  {
    slug: "retail-store-flow-that-actually-converts",
    title: "Retail Store Flow That Actually Converts",
    category: "Retail",
    date: "2026-05-10",
    author: "WEYV Studio",
    excerpt:
      "The decompression zone, the power wall, the checkout runway — small layout decisions that quietly shape buying behaviour.",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Every retail layout we design starts with a decompression zone — the first few metres inside the door where shoppers are still adjusting and rarely register product. Fighting that instinct with heavy merchandising right at the entrance usually backfires.",
      "The 'power wall', the first prominent display a shopper's eye lands on past decompression, carries outsized weight in shaping their impression of the whole store. We treat it as a single curated statement rather than a place to cram inventory.",
      "Checkout flow deserves as much design attention as the shop floor. A cramped or confusing path to pay undoes the work of a beautifully merchandised store.",
    ],
  },
  {
    slug: "lighting-layers-explained",
    title: "Lighting Layers, Explained",
    category: "Interior Design",
    date: "2026-04-22",
    author: "WEYV Studio",
    excerpt:
      "Ambient, task and accent — the three-layer approach we use on every project, and why skipping one layer flattens a room.",
    image:
      "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?q=80&w=1200&auto=format&fit=crop",
    content: [
      "A room lit by a single overhead source almost always feels flat, regardless of how good the furniture and finishes are. We build every lighting plan in three layers: ambient, task and accent.",
      "Ambient lighting sets the overall brightness of a room — usually the layer people notice least when it's done well. Task lighting is functional and specific: under-cabinet strips, reading lamps, desk lighting.",
      "Accent lighting is where personality lives — wall washers, picture lights, and feature pendants that draw the eye to a specific material or object. It's the layer most often skipped, and the one that makes the biggest difference.",
    ],
  },
  {
    slug: "space-planning-for-small-commercial-units",
    title: "Space Planning for Small Commercial Units",
    category: "Architecture",
    date: "2026-03-30",
    author: "WEYV Studio",
    excerpt:
      "Working with a compact footprint doesn't mean compromising on experience. Some of our sharpest planning happens under 1,000 sq. ft.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Small commercial units force discipline that larger spaces don't demand. Every fixture has to earn its place, and circulation paths need to be resolved before a single finish is chosen.",
      "We start compact projects with a bubble diagram of required functions before touching layout software — it keeps the plan honest about what actually needs to fit.",
      "Vertical space is often underused in small units. Mezzanine storage, wall-mounted display and ceiling-height signage can free up floor area for the experience that actually drives revenue.",
    ],
  },
  {
    slug: "what-turnkey-execution-actually-means",
    title: "What 'Turnkey Execution' Actually Means",
    category: "Trends",
    date: "2026-03-05",
    author: "WEYV Studio",
    excerpt:
      "It's a phrase used loosely across the industry. Here's what we mean by it, and the project stages it actually covers.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    content: [
      "'Turnkey' gets used loosely across the interior design industry, so it's worth being precise about what it means on a WEYV project: one accountable team from concept design through to final handover, with no gaps where responsibility changes hands.",
      "In practice that covers design development, material procurement, contractor coordination, site supervision and snagging — all tracked against a single project timeline rather than separate vendor schedules.",
      "The real value isn't convenience alone. A single accountable team catches conflicts between design intent and site reality early, before they become expensive change orders.",
    ],
  },
];

export const blogCategories = [
  "All",
  "Interior Design",
  "Office Design",
  "Retail",
  "Architecture",
  "Trends",
];

export const getPostBySlug = (slug) =>
  blogPosts.find((p) => p.slug === slug);
