# Confera Landing Page

A premium, fully responsive landing page for [Confera](https://conferabychirag.vercel.app) — a real-time video conferencing platform built with WebRTC and Socket.io.

## Live App

[https://conferabychirag.vercel.app](https://conferabychirag.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
ConferaLanding/
├── public/
│   ├── Confera.png          # App logo
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky glassy navigation
│   │   ├── Hero.jsx         # Hero section with mock UI
│   │   ├── LogoStrip.jsx    # Infinite scrolling tech stack strip
│   │   ├── Features.jsx     # 12-feature grid
│   │   ├── HowItWorks.jsx   # 3-step process
│   │   ├── AssemblyDemo.jsx # Interactive tabbed demo
│   │   ├── Testimonials.jsx # Reviews + stats
│   │   ├── Pricing.jsx      # 3-tier pricing
│   │   ├── FAQ.jsx          # Accordion FAQ + contact CTA
│   │   ├── CTA.jsx          # Final call-to-action
│   │   └── Footer.jsx       # Full footer with expandable links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css            # Tailwind + custom utilities
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## Sections

1. **Navbar** — Sticky, glassy header that adapts to scroll. Includes sign in and get started links.
2. **Hero** — Full-screen hero with animated mock conference UI, floating badges, and gradient headline.
3. **Tech Strip** — Infinite scrolling marquee showcasing the technology stack.
4. **Features** — 12-card grid covering every major feature of Confera.
5. **How It Works** — 3-step guide from signup to live Assembly.
6. **Assembly Demo** — Interactive tabbed preview of the video call, breakout rooms, chat, and host controls.
7. **Testimonials** — 6 user reviews in a masonry grid with stats row.
8. **Pricing** — Starter (free), Pro ($12/mo), and Enterprise (custom) plans.
9. **FAQ** — 8 accordion questions with a contact CTA at the bottom.
10. **CTA** — Full-width gradient call-to-action banner.
11. **Footer** — Dark footer with social links, expandable content for all footer links, and dynamic copyright year.

---

## Deployment

This project is ready to deploy on Vercel.

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Set the root directory to `ConferaLanding` (or the folder name)
4. Deploy

---

## Developer

Built by [Chirag Mishra](https://chiragmishra.vercel.app)

- GitHub: [github.com/chiragmishraa](https://github.com/chiragmishraa)
- LinkedIn: [linkedin.com/in/chiragsupermacy](https://www.linkedin.com/in/chiragsupermacy)
- Instagram: [@chiragmishra.cm](https://www.instagram.com/chiragmishra.cm/)
