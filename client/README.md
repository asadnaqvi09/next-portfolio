# Client — Personal Portfolio Frontend

Next.js 16 frontend for the Asad Abbas personal portfolio. Built with JavaScript (JSX), App Router, Tailwind CSS, GSAP animations, and Redux Toolkit for API integration.

**Live Demo:** _Add your deployed portfolio URL here_

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | App Router, SSG for work pages |
| React 19 | UI components |
| Tailwind CSS 4 | Styling |
| Redux Toolkit + RTK Query | State + API calls to Express backend |
| GSAP + ScrollTrigger | Scroll and hover animations |
| Lenis | Smooth scrolling |
| General Sans | Typography via Fontshare CDN |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing — Hero, About, Services, Featured Products, Contact |
| `/work/baazarly` | Baazarly case study |
| `/work/testiva` | Testiva case study |
| `/work/eventiy` | Eventiy case study |
| `/admin/login` | Admin authentication |
| `/admin/dashboard` | Visitor analytics dashboard |

---

## Folder Structure

```
client/
├── public/
│   └── assets/              # Images, resume PDF
├── src/
│   ├── app/                 # Next.js routes
│   ├── components/
│   │   ├── layout/          # TopNavbar, BottomNav, AppShell
│   │   ├── landing/         # Hero, About, Services, Featured, Contact
│   │   ├── work/            # Case study page components
│   │   ├── admin/           # Login form, analytics dashboard
│   │   ├── providers/       # Redux, Lenis, theme, analytics beacon
│   │   └── ui/              # Skeleton, ImageWithSkeleton, Section
│   ├── data/                # JSON content files
│   ├── store/               # Redux slices + RTK Query APIs
│   └── lib/                 # Utils, constants, content helpers
├── .env.local               # Environment variables
├── .env.example
└── jsconfig.json            # @/* path alias
```

---

## Content Editing

Update these JSON files to change copy and projects without touching component code:

| File | Contents |
|------|----------|
| `src/data/site.json` | Name, title, tagline, about, email, socials, resume path |
| `src/data/services.json` | UI/UX Design, Frontend Development, Backend Development |
| `src/data/projects.json` | Featured products + full `/work/[id]` case study content |

### Assets (`public/assets/`)

| File | Usage |
|------|-------|
| `Hero-Image.jpg` | Hero portrait + favicon |
| `image-1.jpg` | Baazarly thumbnail |
| `image-2.jpg` | Eventiy thumbnail |
| `image-3.jpg` | Testiva thumbnail |
| `Asad_Abbas.pdf` | Resume download (Hero CTA) |

---

## Environment

Copy `.env.example` to `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

For production, set `NEXT_PUBLIC_API_URL` to your deployed API base URL (e.g. `https://api.yoursite.com/api`).

---

## Scripts

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Design Notes

- **No footer** — the fixed bottom navigation acts as the visual end of the page
- **Top navbar** — text logo "Asad Abbas" + dark/light theme toggle (Hailee-inspired)
- **Layout & typography** — Majd-inspired spacing and type scale
- **About section** — scroll-reveal text turns gray words to black word-by-word (GSAP ScrollTrigger)
- **Featured Products** — cards link to `/work/[id]` with no "View All Work" CTA on landing
- **Bottom nav** — section anchors on home, hash links on work pages

---

## API Integration

The client communicates with the Express backend via RTK Query:

| Hook | Endpoint | Purpose |
|------|----------|---------|
| `useSubmitContactMutation` | `POST /api/contact` | Contact form |
| `useTrackVisitMutation` | `POST /api/analytics/track` | Page visit tracking |
| `useLoginMutation` | `POST /api/auth/login` | Admin login |
| `useGetMeQuery` | `GET /api/auth/me` | Session validation |
| `useGetSummaryQuery` | `GET /api/analytics/summary` | Dashboard stats |
| `useGetDailyQuery` | `GET /api/analytics/daily` | Daily chart data |

Auth token is stored in `localStorage` and sent as `Authorization: Bearer <token>` on protected routes.

---

## Related

- [Server README](../server/README.md) — API, database, deployment
- [Root README](../README.md) — full project overview
