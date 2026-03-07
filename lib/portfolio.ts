import type { PortfolioItem } from "./constants";

export const portfolioCaseStudies: PortfolioItem[] = [
  {
    id: "kolkata-wedding-itinerary",
    title: "Monogrammed Baraat Hydration",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
    description: "Foil-tipped initials and watercolor peonies for a Ballygunge ballroom baraat.",
    eventType: "Wedding festivities",
    quantity: 450,
    clientType: "Luxury wedding planners",
    deliverables: ["Foil block monogram", "Waterproof vinyl trims", "Tray-ready numbering"],
    palette: ["#f5d9df", "#0b1f3a", "#c49a50"],
    metrics: [
      { label: "Turnaround", value: "6 days" },
      { label: "Ceremonies", value: "4" }
    ],
    testimonial: "HydraTag matched our invitation suite perfectly and had pallets labeled per ceremony."
  },
  {
    id: "chef-table-tasting-night",
    title: "Chef's Counter Story Bottles",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80",
    description: "Story-driven labels that reveal each tasting course with QR-linked menus.",
    eventType: "Chef's tasting night",
    quantity: 180,
    clientType: "Boutique chef's table",
    deliverables: ["Course reveal QR", "Midnight blue gradient", "Batch coded sleeves"],
    palette: ["#030b16", "#5bf5ff", "#ffffff"],
    metrics: [
      { label: "Scan-through rate", value: "68%" },
      { label: "Seatings", value: "3" }
    ]
  },
  {
    id: "corporate-brand-summit",
    title: "SummitX Sustainability Run",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    description: "Gradient mesh with carbon neutral pledge for a CXO innovation summit.",
    eventType: "Corporate leadership summit",
    quantity: 900,
    clientType: "Enterprise product team",
    deliverables: ["QR pledge wall", "Serialized cartons", "Backstage hydration kit"],
    palette: ["#003459", "#00b4d8", "#f1f5f9"],
    metrics: [
      { label: "Labels shipped", value: "900" },
      { label: "Cities covered", value: "2" }
    ]
  },
  {
    id: "heritage-club-launch",
    title: "Clubhouse Vintage Launch",
    category: "Private",
    image: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?auto=format&fit=crop&w=1200&q=80",
    description: "Vintage crest patterning for a south Kolkata heritage clubhouse launch.",
    eventType: "Private brand launch",
    quantity: 260,
    clientType: "Heritage hospitality group",
    deliverables: ["Etched gold crest", "Velvet touch laminate", "Guest initials"],
    palette: ["#1b1b1b", "#d4af37", "#fdfcf7"],
    metrics: [
      { label: "Guest gift sets", value: "130" }
    ]
  },
  {
    id: "wedding-haldi-kits",
    title: "Haldi Kits With Hydration",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1500534314218-a21945a6884a?auto=format&fit=crop&w=1200&q=80",
    description: "Mustard botanicals with Devanagari typography for haldi welcome hampers.",
    eventType: "Haldi ceremony",
    quantity: 320,
    clientType: "Destination wedding",
    deliverables: ["Haldi-safe stocks", "Devanagari lockup", "Custom hamper sleeves"],
    palette: ["#f8d04b", "#fff1c1", "#3a2a10"],
    metrics: [
      { label: "Welcome hampers", value: "160" }
    ]
  },
  {
    id: "tech-demo-day",
    title: "Demo Day Talent Bottles",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    description: "High-contrast typography with NFC tap backs for investor demos.",
    eventType: "Startup demo day",
    quantity: 600,
    clientType: "Venture accelerator",
    deliverables: ["NFC enabled labels", "Talent cohort color coding", "Session specific QR"],
    palette: ["#0f172a", "#38bdf8", "#f0f9ff"],
    metrics: [
      { label: "Investor taps", value: "312" }
    ]
  },
  {
    id: "kolkata-restaurant-week",
    title: "Restaurant Week Pairing Bottles",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    description: "Limited-edition bottles that list pairing notes for each prix fixe course.",
    eventType: "Restaurant week showcase",
    quantity: 540,
    clientType: "Hospitality consortium",
    deliverables: ["Course pairing copy", "FSC certified stock", "Sponsor lockups"],
    palette: ["#0a2540", "#dce8ff", "#f8fafc"],
    testimonial: "Guests kept the bottles as keepsakes—QR scans fed straight into our CRM."
  },
  {
    id: "wellness-retreat-goa",
    title: "Wellness Retreat Mindful Hydration",
    category: "Private",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    description: "Gradient zen motifs with affirmation cards for a C-suite wellness offsite.",
    eventType: "Leadership wellness retreat",
    quantity: 200,
    clientType: "HR leadership team",
    deliverables: ["Affirmation back labels", "Matte soft-touch finish", "Mindfulness prompt cards"],
    palette: ["#cdeef3", "#40798c", "#032b43"],
    metrics: [
      { label: "Mindfulness sessions", value: "5" }
    ]
  }
];

export const getPortfolioCollection = () => portfolioCaseStudies;

export const getPortfolioEntry = (slug: string) => portfolioCaseStudies.find((item) => item.id === slug);

export const getPortfolioStats = () => {
  const totalLabels = portfolioCaseStudies.reduce((sum, item) => sum + item.quantity, 0);
  const categories = Array.from(new Set(portfolioCaseStudies.map((item) => item.category)));
  return {
    totalLabels,
    categories,
    totalProjects: portfolioCaseStudies.length,
    avgRun: Math.round(totalLabels / portfolioCaseStudies.length)
  };
};
