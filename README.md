# BrewBoba — Premium Milk Tea Landing Page

A premium, animated landing page for **BrewBoba** — a handcrafted milk tea brand. Built with a modern React stack, designed for performance, and ready to deploy on Vercel.

---

## Preview

| Section | Description |
|---|---|
| **Hero** | Full-screen cinematic intro with floating boba pearls, gradient background, and animated CTA buttons |
| **Flavor Showcase** | Interactive cards for 5 signature flavors — Chocolate, Matcha, Strawberry, Taro, and Caramel — each with hover animations and product imagery |
| **Navbar** | Sticky header with scroll-aware blur effect and mobile hamburger menu |
| **Footer** | Brand info, quick links, contact details, and social icons |

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 18](https://react.dev/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Motion (Framer Motion)](https://motion.dev/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Project Structure

```
brewboba/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── images/             # Product and decorative images
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   │   └── Footer.tsx      # Brand footer with links and contact
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx # Hero banner with animations
│   │   │   └── FlavorShowcase.tsx  # 5-flavor card grid
│   │   └── ui/                 # shadcn/ui component library
│   ├── lib/
│   │   └── ImageWithFallback.tsx
│   ├── types/
│   │   └── index.ts            # Shared TypeScript types
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css           # Design tokens and CSS variables
│   ├── App.tsx
│   └── main.tsx
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/brewboba.git
cd brewboba

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run type-check` | Run TypeScript type checking |

---

## Deployment on Vercel

This project is pre-configured for Vercel deployment via [`vercel.json`](vercel.json).

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Vercel auto-detects the Vite framework. The `vercel.json` config applies:
- **Immutable cache headers** on all hashed assets (`/assets/*`) — 1-year TTL
- **SPA rewrite rule** so all routes resolve to `index.html`

---

## Performance

The build is optimized for fast load times:

- **Code splitting** — JS is split into named chunks: `react-vendor`, `motion`, `radix-ui`, and app code so returning visitors hit cached chunks
- **Lazy loading** — below-fold images use `loading="lazy"` to defer network requests
- **ESNext target** — no unnecessary transpilation overhead
- **Tailwind CSS v4** — only ships CSS that is actually used

---

## Signature Flavors

| Flavor | Description |
|---|---|
| **Chocolate** | Rich cocoa blended into creamy milk tea perfection |
| **Matcha** | Earthy premium matcha balanced with silky sweetness |
| **Strawberry** | Fresh fruity sweetness with a creamy smooth finish |
| **Taro** | Classic nutty taro flavor with a velvety texture |
| **Caramel** | Sweet golden caramel with deep creamy notes |

---

## License

This project is private. All brand assets and product imagery are property of BrewBoba.
