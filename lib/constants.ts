export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  subtext: string;
};

export type Step = {
  title: string;
  description: string;
  number: string;
};

export type LabelSize = {
  name: string;
  volume: string;
  description: string;
  startingPrice: string;
  bestFor: string;
};

export type PrintingOption = {
  title: string;
  points: string[];
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: "Weddings" | "Restaurants" | "Corporate" | "Private";
  image: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const siteConfig = {
  name: "HydraTag Studio",
  tagline: "Brand Every Drop.",
  description: "Premium custom water bottle label branding studio based in Kolkata, India.",
  url: "https://hydratag.studio",
  whatsapp: "https://wa.me/919999999999"
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

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
    points: [
      "Matte, satin, or gloss protection",
      "Condensation-proof adhesive",
      "Food-safe inks"
    ]
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
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    description: "Soft gradients and foil initials for a Kolkata sundowner ceremony."
  },
  {
    id: "portfolio-2",
    title: "Chef's Table",
    category: "Restaurants",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    description: "Monochrome storytelling for a 12-course tasting journey."
  },
  {
    id: "portfolio-3",
    title: "Summit Flow",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    description: "Gradient mesh with QR-enabled sustainability pledge."
  },
  {
    id: "portfolio-4",
    title: "Midnight Soirée",
    category: "Private",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description: "Neon typography for a 30th birthday rooftop party."
  },
  {
    id: "portfolio-5",
    title: "Garden Vows",
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    description: "Botanical line art for a daylight pheras setup."
  },
  {
    id: "portfolio-6",
    title: "Executive Lounge",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Carbon fiber textures for a luxury auto launch."
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

export const eventTypes = [
  "Wedding",
  "Restaurant",
  "Corporate",
  "Birthday",
  "Private",
  "Other"
];

export const contactDetails = {
  email: "hello@hydratag.studio",
  phone: "+91 98300 00000",
  address: "Kolkata, India",
  whatsappNumber: "+91 98300 00000"
};
