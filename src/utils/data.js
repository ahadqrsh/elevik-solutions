import {
  FiCode, FiShoppingBag, FiSearch, FiEdit3, FiInstagram, FiTarget,
  FiCamera, FiVideo, FiLayers, FiZap, FiTrendingUp, FiClock,
  FiHeadphones, FiDollarSign,
} from "react-icons/fi";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CARDS = [
  { label: "Website Development", icon: FiCode },
  { label: "Shopify", icon: FiShoppingBag },
  { label: "SEO", icon: FiSearch },
  { label: "Content Creation", icon: FiEdit3 },
  { label: "Meta Ads", icon: FiTarget },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 65, suffix: "+", label: "Brands Scaled" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 5, suffix: "x", label: "Avg. ROAS Lift" },
];

export const SERVICES = [
  { icon: FiCode, title: "Website Development", desc: "Fast, accessible sites engineered in React and Next.js with a focus on Core Web Vitals." },
  { icon: FiShoppingBag, title: "Shopify Development", desc: "Conversion-first stores with custom themes, apps and checkout optimisation." },
  { icon: FiSearch, title: "SEO", desc: "Technical audits, on-page optimisation and content that compounds organic traffic." },
  { icon: FiEdit3, title: "Content Strategy", desc: "Editorial calendars and messaging that turn browsers into loyal buyers." },
  { icon: FiInstagram, title: "Instagram Management", desc: "End-to-end profile growth: content, engagement and community building." },
  { icon: FiTarget, title: "Meta Ads", desc: "Full-funnel paid campaigns with creative testing and precise audience targeting." },
  { icon: FiCamera, title: "Camera Shoot", desc: "Studio-grade product photography that makes your catalogue impossible to scroll past." },
  { icon: FiVideo, title: "UGC & Cinematic Content", desc: "Scroll-stopping reels and authentic UGC edited for performance." },
];

export const WHY_US = [
  { icon: FiLayers, title: "Modern UI", desc: "Interfaces built to today's design standards, not last decade's templates." },
  { icon: FiSearch, title: "SEO First", desc: "Every build ships search-ready from day one." },
  { icon: FiZap, title: "Performance Focused", desc: "Sub-second loads and Lighthouse scores above 95." },
  { icon: FiClock, title: "Fast Delivery", desc: "Clear milestones and predictable timelines." },
  { icon: FiHeadphones, title: "Dedicated Support", desc: "A direct line to the team that built your project." },
  { icon: FiDollarSign, title: "Affordable Solutions", desc: "Premium execution priced for growing brands." },
];

export const PROCESS = [
  { step: "01", title: "Discovery", desc: "We map your goals, audience and competitive landscape." },
  { step: "02", title: "Strategy", desc: "A clear roadmap tying design and marketing to revenue." },
  { step: "03", title: "Design", desc: "High-fidelity, on-brand interfaces reviewed with you." },
  { step: "04", title: "Development", desc: "Clean, scalable code built for speed and SEO." },
  { step: "05", title: "Testing", desc: "Cross-device QA, performance and accessibility checks." },
  { step: "06", title: "Launch", desc: "A smooth go-live with analytics wired in." },
  { step: "07", title: "Growth", desc: "Ongoing optimisation, ads and content to scale results." },
];

export const PORTFOLIO = [
  { title: "Aurora Skincare", tag: "Shopify · D2C", span: "lg", metric: "+212% revenue in 90 days" },
  { title: "NorthPeak Outdoors", tag: "Web · SEO", span: "sm", metric: "#1 for 40+ keywords" },
  { title: "Lumen Coffee", tag: "Shopify · Ads", span: "sm", metric: "4.7x ROAS" },
  { title: "Vlora Jewellery", tag: "Content · Reels", span: "lg", metric: "1.2M organic views" },
  { title: "Cobalt Fitness", tag: "Web · Meta Ads", span: "sm", metric: "-38% cost per lead" },
  { title: "Mira Home", tag: "Shopify · SEO", span: "sm", metric: "+180% organic traffic" },
];

export const PRICING = [
  {
    name: "Starter", price: "14,999", cadence: "one-time", featured: false,
    tagline: "Get online, the right way.",
    features: ["Shopify or 5-page website", "On-page SEO + audit", "Instagram page setup", "1-month content calendar", "Business roadmap"],
    cta: "Get Started",
  },
  {
    name: "Growth", price: "29,999", cadence: "/month", featured: true,
    tagline: "Accelerate sales and reach.",
    features: ["Everything in Starter", "Meta Ads management", "Instagram management", "Product shoot + cinematic edit", "Ongoing content + calendar", "Monthly performance reporting"],
    cta: "Book a Call",
  }
];


export const SERVICE_OPTIONS = ["Website Development", "Shopify", "SEO", "Content Creation", "Instagram Management", "Meta Ads", "Photo / Video Shoot"];
export const BUDGET_OPTIONS = ["Under ₹25k", "₹25k – ₹50k", "₹50k – ₹1L", "₹1L+"];