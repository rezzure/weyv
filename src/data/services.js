export const services = [
  {
    slug: "corporate-interior",
    title: "Corporate Interiors",
    shortTitle: "Corporate",
    heroTitle: "Corporate Interior Design",
    tagline: "Workspaces Built Around How Your Team Actually Works",
    description:
      "We design corporate environments that balance productivity, brand identity and employee wellbeing — from open-plan floors to executive suites.",
    longIntro:
      "A workplace is more than four walls and desks — it's an expression of how a company thinks and operates. Our corporate interior practice blends space planning, ergonomics and material honesty to create offices that support focus, collaboration and growth in equal measure.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1920&auto=format&fit=crop",
    features: [
      {
        title: "Space Planning",
        text: "Efficient floor layouts that balance density with comfort, maximising usable area without crowding teams.",
      },
      {
        title: "Ergonomic Design",
        text: "Furniture and workstations selected for posture, movement and long-day comfort.",
      },
      {
        title: "Brand Identity",
        text: "Materials, colour and signage woven through the space so the office reads as unmistakably yours.",
      },
      {
        title: "Collaborative Spaces",
        text: "Breakout zones, huddle rooms and informal corners designed for spontaneous conversation.",
      },
      {
        title: "Technology Integration",
        text: "AV, connectivity and smart-room infrastructure planned in from day one, not bolted on later.",
      },
      {
        title: "Lighting & Materials",
        text: "Layered lighting and durable, tactile finishes that hold up to daily commercial use.",
      },
    ],
  },
  {
    slug: "commercial-interior",
    title: "Commercial Interiors",
    shortTitle: "Commercial",
    heroTitle: "Commercial Interior Design",
    tagline: "Interiors Designed for Impact",
    description:
      "Experience-driven interiors for hospitality, F&B and mixed-use commercial spaces — designed to perform under real footfall.",
    longIntro:
      "Commercial interiors have to do two jobs at once: look extraordinary and survive daily use by hundreds of people. We plan for both — functional zoning and traffic flow first, then layer in the material and lighting choices that make a space memorable.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop",
    features: [
      {
        title: "Experience-Driven Design",
        text: "Every zone designed around how visitors move, pause and engage with the space.",
      },
      {
        title: "Functional Planning",
        text: "Layouts that keep operations smooth behind the scenes while guests only see the experience.",
      },
      {
        title: "Customer Experience",
        text: "Sightlines, acoustics and comfort tuned to how long people actually stay.",
      },
      {
        title: "Brand Identity",
        text: "Interior language that extends a brand's story into three dimensions.",
      },
      {
        title: "Lighting Design",
        text: "Mood-driven lighting schemes that shift the feel of a space through the day.",
      },
      {
        title: "Material Selection",
        text: "Commercial-grade finishes chosen for durability without sacrificing warmth.",
      },
    ],
  },
  
  {
    slug: "retail-interior",
    title: "Retail Interiors",
    shortTitle: "Retail",
    heroTitle: "Retail Interior Design",
    tagline: "Retail Interiors That Inspire Shopping",
    description:
      "Store environments engineered around the customer journey — from first glance at the storefront to the moment they check out.",
    longIntro:
      "Retail interiors succeed when every element — layout, lighting, signage, materials — works together to guide a customer's journey and reflect brand identity. We design stores that convert browsing into buying without ever feeling like a hard sell.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1555529771-7888783a18d3?q=80&w=1920&auto=format&fit=crop",
    features: [
      {
        title: "Customer Journey",
        text: "Store flow mapped from entrance to checkout to guide natural discovery.",
      },
      {
        title: "Smart Zoning",
        text: "Product zones arranged for visibility, accessibility and cross-category discovery.",
      },
      {
        title: "Display Design",
        text: "Fixtures and displays that showcase product without cluttering sightlines.",
      },
      {
        title: "Lighting",
        text: "Focused, product-flattering lighting that draws attention where it matters.",
      },
      {
        title: "Brand Storytelling",
        text: "Materials and detailing that carry brand narrative through the physical space.",
      },
      {
        title: "Interactive Experiences",
        text: "Moments of engagement built into the layout that keep customers exploring longer.",
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((s) => s.slug === slug);
