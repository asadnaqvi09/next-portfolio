# Server — Personal Portfolio API

Express 5 REST API for contact form submissions, visitor analytics, and admin authentication. PostgreSQL with raw SQL queries via `pg`, designed for Supabase in production.

**API Base URL:** _Add your deployed API URL here (e.g. https://api.yoursite.com/api)_

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js + Express 5 | HTTP server |
| PostgreSQL (`pg`) | Raw SQL queries, Supabase connection pool |
| JWT | Admin authentication |
| bcrypt | Password hashing |
| NodeMailer | Contact form email delivery |
| Zod | Request body validation |
| express-rate-limit | Rate limiting on public endpoints |

---

## Folder Structure

```
server/
├── src/
│   ├── index.js             # Entry point, starts server
│   ├── app.js               # Express app, CORS, route mounting
│   ├── config/
│   │   ├── env.js           # Environment variables
│   │   └── db.js            # PostgreSQL pool + query helpers
│   ├── controllers/         # Request handlers
│   ├── middleware/          # auth, validate, rateLimit, errorHandler
│   ├── routes/              # contact, analytics, auth
│   ├── services/            # Business logic, mail
│   ├── validators/          # Zod schemas
│   ├── scripts/
│   │   └── migrate.js       # Run migration + seed admin
│   └── sql/
│       └── migrations/
│           └── 001_init.sql   # Table definitions
├── .env
└── .env.example
```

---

## API Endpoints

Base path: `/api`

### Health

| Method | Path | Response |
|--------|------|----------|
| `GET` | `/health` | `{ success: true, status: "ok" }` |

### Contact

| Method | Path | Body | Description |
|--------|------|------|-------------|
| `POST` | `/contact` | `{ name, email, message }` | Saves to DB and sends email via NodeMailer |

**Rate limit:** 10 requests per 15 minutes

### Analytics

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `POST` | `/analytics/track` | No | `{ path, referrer? }` — records a page view |
| `GET` | `/analytics/summary` | JWT | Total visitors, daily visitors, page views, top referrers |
| `GET` | `/analytics/daily` | JWT | Last 7 days visitors and page views |

**Track rate limit:** 60 requests per minute

### Auth

| Method | Path | Body / Header | Description |
|--------|------|---------------|-------------|
| `POST` | `/auth/login` | `{ email, password }` | Returns JWT token + user object |
| `GET` | `/auth/me` | `Authorization: Bearer <token>` | Validates session, returns user |

**Login rate limit:** 20 requests per 15 minutes

---

## Database

### Tables

| Table | Purpose |
|-------|---------|
| `admins` | Admin user accounts |
| `contact_messages` | Contact form submissions |
| `page_views` | Visitor tracking (hashed visitor ID, path, referrer) |

### Migration

```bash
npm run migrate
```

Creates all tables and seeds the default admin user from `.env`:

| Variable | Default |
|----------|---------|
| `ADMIN_EMAIL` | `admin` |
| `ADMIN_PASSWORD` | `admin123` |

Change these in production.

---

## Environment Variables

Copy `.env.example` to `.env`:

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default: `4000`) |
| `NODE_ENV` | No | `development` or `production` |
| `CLIENT_URL` | No | Frontend origin for CORS (comma-separated for multiple) |
| `DATABASE_URL` | Yes | PostgreSQL / Supabase connection string |
| `JWT_SECRET` | Yes | Secret for signing JWT tokens |
| `JWT_EXPIRES_IN` | No | Token expiry (default: `7d`) |
| `ADMIN_EMAIL` | No | Admin seed email |
| `ADMIN_PASSWORD` | No | Admin seed password |
| `SMTP_HOST` | No | SMTP server host |
| `SMTP_PORT` | No | SMTP port (default: `587`) |
| `SMTP_USER` | No | SMTP username |
| `SMTP_PASS` | No | SMTP password / app password |
| `MAIL_FROM` | No | Sender email address |
| `MAIL_TO` | No | Recipient for contact form emails |

If SMTP is not configured, contact messages are still saved to the database but no email is sent.

---

## Scripts

```bash
npm run dev       # Start with hot reload (node --watch)
npm run start     # Start production server
npm run migrate   # Run SQL migration + seed admin user
```

---

## Security

- Visitor IP is hashed with SHA-256 combined with user-agent — raw IP is never stored
- Rate limiting on contact, analytics track, and login endpoints
- Analytics summary and daily endpoints require valid JWT
- CORS restricted to origins listed in `CLIENT_URL`
- Passwords stored as bcrypt hashes

---

## Supabase Setup

1. Create a project on [Supabase](https://supabase.com)
2. Go to **Settings → Database → Connection string**
3. Copy the **URI** (pooler recommended for serverless) into `DATABASE_URL`
4. Run `npm run migrate` to create tables

Example:

```env
DATABASE_URL=postgresql://postgres.[ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres
```

---

## Production CORS

Set `CLIENT_URL` to your deployed frontend URL:

```env
CLIENT_URL=https://yoursite.com
```

For multiple origins (e.g. www + non-www):

```env
CLIENT_URL=https://yoursite.com,https://www.yoursite.com
```

---

## Related

- [Client README](../client/README.md) — frontend setup and content
- [Root README](../README.md) — full project overview
