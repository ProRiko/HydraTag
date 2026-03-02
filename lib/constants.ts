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
  eventType: string;
  quantity: number;
  clientType: string;
};

export type TrustPoint = {
  title: string;
  description: string;
  icon: string;
};

export type AuthorityHighlight = {
  title: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type QuoteBottleOption = {
  label: string;
  size: string;
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
  whatsapp: "https://wa.me/919999999999",
  instagram: "https://instagram.com/hydratagstudio",
  city: "Kolkata",
  region: "West Bengal",
  country: "India",
  geo: {
    latitude: 22.5726,
    longitude: 88.3639
  }
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const eventTypes = ["Wedding", "Restaurant", "Corporate", "Birthday", "Private", "Other"];

export const contactDetails = {
  email: "hello@hydratag.studio",
  phone: "+91 98300 00000",
  address: "Kolkata, India",
  whatsappNumber: "+91 98300 00000",
  hours: "Mon–Sat · 10am – 7pm IST"
};
