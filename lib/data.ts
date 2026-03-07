import type {
  AuthorityHighlight,
  FaqItem,
  LabelSize,
  PortfolioItem,
  PrintingOption,
  QuoteBottleOption,
  Service,
  Step,
  Testimonial,
  TrustPoint
} from "./constants";
import { portfolioCaseStudies } from "./portfolio";

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

export const portfolioItems: PortfolioItem[] = portfolioCaseStudies;

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

export const authorityHighlights: AuthorityHighlight[] = [
  {
    title: "3–5 Day Fast Turnaround",
    description: "Priority print queues keep your hydration touchpoints on schedule for every itinerary.",
    icon: "⚡"
  },
  {
    title: "Waterproof Vinyl Labels",
    description: "Condensation-proof materials survive ice buckets, humid kitchens, and long service windows.",
    icon: "💧"
  },
  {
    title: "Bulk Pricing Available",
    description: "Scaled pricing tiers for restaurants, caterers, and corporate planners ordering 300+ units.",
    icon: "📦"
  },
  {
    title: "Custom Design Included",
    description: "Senior designers translate your brand guardrails into press-ready artwork at no extra fee.",
    icon: "🎨"
  },
  {
    title: "Serving Kolkata & Nearby Areas",
    description: "On-ground logistics partners deliver across Kolkata plus Howrah, New Town, and Hooghly.",
    icon: "📍"
  }
];

export const faqItems: FaqItem[] = [
  {
    question: "Are the labels waterproof?",
    answer: "Yes. We print on waterproof vinyl with protective lamination so condensation or ice buckets never smudge the artwork."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Minimum order starts at 100 labels per design. Bulk pricing kicks in from 300 units upward."
  },
  {
    question: "How long does delivery take?",
    answer: "Proof approvals happen within 24 hours and production takes 3–5 business days. Delivery within Kolkata typically lands the next day after dispatch."
  },
  {
    question: "Do you supply bottles as well?",
    answer: "We specialize in premium labels. However, we coordinate with partner bottling vendors on request if you need a bundled solution."
  },
  {
    question: "Is design included in the price?",
    answer: "Absolutely. Every order includes concepting, typography, and press-ready artwork handled by our studio team."
  },
  {
    question: "Do you provide urgent delivery?",
    answer: "Yes, rush production is available subject to slot availability. Share your event date and we’ll advise the fastest schedule."
  }
];
