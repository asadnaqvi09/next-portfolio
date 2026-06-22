# Personal Portfolio — Asad Abbas

A full-stack personal portfolio built with **Next.js** and **Node.js/Express**, featuring smooth scroll animations, JSON-driven project pages, a contact API, and an admin analytics dashboard.

**Live Demo:** _Add your deployed portfolio URL here_

**API URL:** _Add your deployed API URL here_

---

## Design References

| Reference | Used For |
|-----------|----------|
| [Majd Portfolio](https://majd-portfolio.framer.website/) | Typography, layout, hero, about, services, contact |
| [Hailee Portfolio](https://hailee.netlify.app/#) | Fixed top navbar + bottom navigation |
| [Damas Work Page](https://majd-portfolio.framer.website/work/damas) | `/work/[id]` case study layout |

---

## Features

- Landing page with Hero, About (scroll-reveal text), Services, Featured Products, and Contact
- Project case studies at `/work/baazarly`, `/work/testiva`, `/work/eventiy`
- Fixed top navbar + bottom nav (acts as footer — no separate footer block)
- Dark / light theme toggle
- Lenis smooth scrolling + GSAP ScrollTrigger animations
- Contact form with email delivery via NodeMailer
- Visitor analytics (page views, daily uniques, referrers)
- Protected admin dashboard at `/admin`

---

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| Frontend | Next.js 16, React 19, Tailwind CSS 4, Redux Toolkit, RTK Query, GSAP, Lenis |
| Backend | Node.js, Express 5, PostgreSQL (Supabase), raw SQL, JWT, NodeMailer, Zod |
| Language | JavaScript (JSX client, JS server) |

---

## Project Structure

```
Personal-Portfolio/
├── client/          # Next.js frontend
├── server/          # Express API + PostgreSQL
└── README.md
```

---

## Prerequisites

- Node.js 18+
- PostgreSQL database ([Supabase](https://supabase.com) recommended)

---

## Quick Start

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Personal-Portfolio
```

### 2. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure environment

**Server** — copy `server/.env.example` to `server/.env`:

```env
PORT=4000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
DATABASE_URL=your_supabase_connection_string
JWT_SECRET=your_long_random_secret
JWT_EXPIRES_IN=7d
ADMIN_EMAIL=admin
ADMIN_PASSWORD=admin123
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=your-email@gmail.com
MAIL_TO=your-email@gmail.com
```

**Client** — copy `client/.env.example` to `client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```

### 4. Run database migration

```bash
cd server
npm run migrate
```

### 5. Start development servers

**Terminal 1 — API:**

```bash
cd server
npm run dev
```

**Terminal 2 — Frontend:**

```bash
cd client
npm run dev
```

| Service | URL |
|---------|-----|
| Portfolio | http://localhost:3000 |
| API | http://localhost:4000 |
| Admin Login | http://localhost:3000/admin/login |

---

## API Overview

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/health` | No | Health check |
| `POST` | `/api/contact` | No | Submit contact form |
| `POST` | `/api/analytics/track` | No | Track page visit |
| `POST` | `/api/auth/login` | No | Admin login |
| `GET` | `/api/auth/me` | JWT | Verify session |
| `GET` | `/api/analytics/summary` | JWT | Analytics summary |
| `GET` | `/api/analytics/daily` | JWT | Last 7 days stats |

---

## Featured Projects

| Project | Type | Route |
|---------|------|-------|
| Baazarly | E-Commerce | `/work/baazarly` |
| Testiva | Ed Tech (IELTS & PTE) | `/work/testiva` |
| Eventiy | UI/UX Design | `/work/eventiy` |

Project content is managed in `client/src/data/projects.json`.

---

## Deployment

1. Deploy **client** to Vercel, Netlify, or similar
2. Deploy **server** to Railway, Render, or similar
3. Set `NEXT_PUBLIC_API_URL` on the client to your production API URL
4. Set `CLIENT_URL` on the server to your production frontend URL (comma-separated for multiple origins)
5. Run `npm run migrate` once against the production database

---

## Documentation

- [Client README](./client/README.md) — frontend setup, pages, content editing
- [Server README](./server/README.md) — API endpoints, database, environment

---

## Author

**Asad Abbas** — Full Stack Developer

- LinkedIn: https://linkedin.com/in/asadabbas
- GitHub: https://github.com/asadabbas
- Instagram: https://instagram.com/asadabbas

---

## License

Private — All rights reserved.
