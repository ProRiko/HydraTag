import type {
  LabelSize,
  PortfolioItem,
  PrintingOption,
  QuoteBottleOption,
  Service,
  Step,
  Testimonial,
  TrustPoint
} from "./constants";

export const services: Service[] = [
  {
    title: "Wedding Bottle Branding",
    description: "Elegant labels that complement your wedding palette, monogram, and story.",
    icon: "💍",
    subtext: "Styled mood boards, foil stamping & luxe finishes"
  },
  {
    title: "Restaurant Custom Labels",
    description: "Premium dining experiences with bespoke bottle branding that reflects your menu.",
    icon: "🍽️",
    subtext: "Food-safe adhesives, small batch ready"
  },
  {
    title: "Corporate Event Branding",
    description: "On-brand hydration moments for summits, launches, and HR gifting.",
    icon: "🏢",
    subtext: "Pantone matching, serial numbering"
  },
  {
    title: "Birthday & Private Events",
    description: "Playful, memorable designs for milestone celebrations and intimate soirées.",
    icon: "🎉",
    subtext: "Fast turnaround, thematic storytelling"
  }
];

export const howItWorks: Step[] = [
  {
    title: "Share Your Idea",
    description: "Tell us about the event, mood board, and preferred bottle size.",
    number: "01"
  },
  {
    title: "We Design & Print",
    description: "Our studio crafts a proof, iterates with you, and prints on waterproof vinyl.",
    number: "02"
  },
  {
    title: "Fast Delivery",
    description: "Labels arrive trimmed, packed, and ready to wrap in as little as 5 days.",
    number: "03"
  }
];

export const labelSizes: LabelSize[] = [
  {
    name: "Boutique 250ml",
    volume: "250 ml",
    description: "Ideal for welcome hampers, turn-down service, and teaser campaigns.",
    startingPrice: "₹4,200 / 100 labels",
    bestFor: "Weddings & curated gifting"
  },
  {
    name: "Signature 500ml",
    volume: "500 ml",
    description: "Most popular format with balanced real estate for storytelling graphics.",
    startingPrice: "₹4,800 / 100 labels",
    bestFor: "Restaurants & corporate events"
  },
  {
    name: "Statement 1L",
    volume: "1 L",
    description: "Command attention on boardrooms, backstage, and VIP lounges.",
    startingPrice: "₹5,500 / 100 labels",
    bestFor: "Large-format installations"
  }
];

export const printingOptions: PrintingOption[] = [
  {
    title: "Waterproof Vinyl",
    points: ["Matte, satin, or gloss protection", "Condensation-proof adhesive", "Food-safe inks"]
  },
  {
    title: "Custom Design Service",
    points: [
      "2 complimentary concept rounds",
      "Pantone and metallic ink support",
      "Team of senior brand designers"
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "Aqua Sangeet",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1507138451611-3002d636dc23?auto=format&fit=crop&w=1200&q=80",
    description: "Soft gradients and foil initials for a Kolkata sundowner ceremony.",
    eventType: "Sunset Sangeet",
    quantity: 320,
    clientType: "Luxury wedding planners"
  },
  {
    id: "portfolio-2",
    title: "Chef's Table",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    description: "Monochrome storytelling for a 12-course tasting journey.",
    eventType: "Chef's tasting night",
    quantity: 180,
    clientType: "Michelin-inspired pop-up"
  },
  {
    id: "portfolio-3",
    title: "Summit Flow",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    description: "Gradient mesh with QR-enabled sustainability pledge.",
    eventType: "Leadership summit",
    quantity: 850,
    clientType: "Tech enterprise"
  },
  {
    id: "portfolio-4",
    title: "Midnight Soirée",
    category: "Private",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
    description: "Neon typography for a 30th birthday rooftop party.",
    eventType: "30th birthday",
    quantity: 150,
    clientType: "Private host"
  },
  {
    id: "portfolio-5",
    title: "Garden Vows",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    description: "Botanical line art for a daylight pheras setup.",
    eventType: "Morning pheras",
    quantity: 260,
    clientType: "Heritage venue"
  },
  {
    id: "portfolio-6",
    title: "Executive Lounge",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description: "Carbon fiber textures for a luxury auto launch.",
    eventType: "Automotive unveil",
    quantity: 1200,
    clientType: "Global auto brand"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "HydraTag translated our wedding story into tactile labels that doubled as keepsakes.",
    author: "Tanvi & Ayaan",
    role: "Calcutta Social Club"
  },
  {
    quote: "Guests noticed the bottles before the amuse-bouche—exactly the detail we hoped for.",
    author: "Chef Rishabh Mehra",
    role: "Chef's Table Kolkata"
  },
  {
    quote: "From Pantone matching to logistics, the team executed our 800-label order flawlessly.",
    author: "Sonia Kapoor",
    role: "SummitX Events"
  }
];

export const trustPoints: TrustPoint[] = [
  {
    title: "Waterproof Vinyl Printing",
    description: "Condensation-proof stocks that stay crisp through ice buckets and humid kitchens.",
    icon: "💧"
  },
  {
    title: "Premium Gloss Finish",
    description: "Gallery-grade lamination with foil, emboss, and spot UV options.",
    icon: "✨"
  },
  {
    title: "Fast 3–5 Day Delivery",
    description: "Priority production lanes for Kolkata and pan-India shipping partners.",
    icon: "⚡"
  },
  {
    title: "Custom Design Included",
    description: "Senior brand designers translate your moodboards into press-ready art.",
    icon: "🎨"
  }
];

export const quoteBottleOptions: QuoteBottleOption[] = [
  { label: "250 ml — Boutique", size: "250ml" },
  { label: "500 ml — Signature", size: "500ml" },
  { label: "1 L — Statement", size: "1L" }
];
