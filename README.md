# Elevik Solutions — Premium Agency Website

A production-ready marketing site built with **React (Vite) + Tailwind CSS + GSAP + Lenis + Framer Motion**, featuring dark/light theming, smooth scroll, scroll-triggered animations, a magnetic custom cursor, and a full set of agency sections.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the build
```

Requires **Node 18+**.

## Swap in your own branding
- **Logo:** edit `src/assets/Logo.jsx` (replace the inline SVG with an `<img>` of your logo file placed in `/public`).
- **Colours:** `tailwind.config.js` → `theme.extend.colors`.
- **Content / copy / pricing:** everything lives in `src/utils/data.js`.
- **Contact form:** `src/components/sections/Contact.jsx` `submit()` — connect to Formspree, Resend, or your own API.
- **Map:** replace the placeholder div in Contact with your Google Maps `<iframe>` embed.
- **SEO / social image:** `index.html` meta tags; add `og-image.png` to `/public`.

## Structure
```
src/
├── animations/   GSAP modules (hero, services, portfolio, navbar, footer, scroll)
├── assets/       Logo component
├── components/
│   ├── layout/   Navbar, Footer
│   ├── sections/ Hero, About, Services, WhyChooseUs, Process, Portfolio, Pricing, Testimonials, Contact
│   └── ui/       Loader, Cursor, MagneticButton, ScrollProgress, BackToTop, SectionHeading
├── context/      ThemeContext (light/dark + localStorage + system detection)
├── hooks/        useLenis, useMagnetic
└── utils/        data.js (all site content)
```

## Notes
- The custom cursor hides the native cursor on fine-pointer devices only; touch devices are unaffected.
- Animations respect `prefers-reduced-motion`.
- Below-the-fold sections are lazy-loaded and code-split for a fast first paint.
"# elevik-solutions" 
