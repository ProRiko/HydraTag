import { createClient } from "@sanity/client";
import groq from "groq";
import type {
  AuthorityHighlight,
  FaqItem,
  LabelSize,
  PortfolioItem,
  PrintingOption,
  Service,
  Testimonial,
  TrustPoint
} from "./constants";
import {
  authorityHighlights as fallbackAuthorityHighlights,
  faqItems as fallbackFaqItems,
  labelSizes as fallbackLabelSizes,
  portfolioItems as fallbackPortfolioItems,
  printingOptions as fallbackPrintingOptions,
  services as fallbackServices,
  testimonials as fallbackTestimonials,
  trustPoints as fallbackTrustPoints
} from "./data";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION ?? "2023-10-01";
const useSanity = Boolean(projectId && dataset);

const client = useSanity
  ? createClient({ projectId, dataset, apiVersion, useCdn: true, token: process.env.SANITY_READ_TOKEN })
  : null;

const serviceQuery = groq`*[_type == "service" && defined(title)]|order(order asc){
  title,
  "icon": coalesce(icon, "✨"),
  description,
  subtext
}`;

const labelSizeQuery = groq`*[_type == "labelSize" && defined(name)]|order(order asc){
  name,
  volume,
  description,
  startingPrice,
  bestFor
}`;

const printingQuery = groq`*[_type == "printingOption" && defined(title)]|order(order asc){
  title,
  points
}`;

const faqQuery = groq`*[_type == "faq" && defined(question)]|order(order asc){
  question,
  answer
}`;

const portfolioQuery = groq`*[_type == "portfolio" && defined(slug.current)]|order(order asc){
  "id": slug.current,
  title,
  category,
  image,
  description,
  eventType,
  quantity,
  clientType
}`;

const testimonialQuery = groq`*[_type == "testimonial"]|order(order asc){
  quote,
  author,
  role
}`;

const trustPointQuery = groq`*[_type == "trustPoint"]|order(order asc){
  title,
  description,
  icon
}`;

const authorityQuery = groq`*[_type == "authorityHighlight"]|order(order asc){
  title,
  description,
  icon
}`;

async function fetchOrFallback<T>(query: string, fallback: T): Promise<T> {
  if (!client) return fallback;
  try {
    const result = await client.fetch<T>(query);
    return result && Array.isArray(result) && result.length > 0 ? result : fallback;
  } catch (error) {
    console.warn("[Sanity] falling back to local data", error);
    return fallback;
  }
}

export const cms = {
  getServices: () => fetchOrFallback<Service[]>(serviceQuery, fallbackServices),
  getLabelSizes: () => fetchOrFallback<LabelSize[]>(labelSizeQuery, fallbackLabelSizes),
  getPrintingOptions: () => fetchOrFallback<PrintingOption[]>(printingQuery, fallbackPrintingOptions),
  getFaqItems: () => fetchOrFallback<FaqItem[]>(faqQuery, fallbackFaqItems),
  getPortfolioItems: () => fetchOrFallback<PortfolioItem[]>(portfolioQuery, fallbackPortfolioItems),
  getTestimonials: () => fetchOrFallback<Testimonial[]>(testimonialQuery, fallbackTestimonials),
  getTrustPoints: () => fetchOrFallback<TrustPoint[]>(trustPointQuery, fallbackTrustPoints),
  getAuthorityHighlights: () => fetchOrFallback<AuthorityHighlight[]>(authorityQuery, fallbackAuthorityHighlights)
};

export type CmsAPI = typeof cms;
export const cmsConfigured = () => useSanity;
