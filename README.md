# Shri-projects — Payment + Orders Integration

This repository contains a demo e-commerce site with server-authoritative Razorpay payment integration, Firestore persistence and admin APIs.

## Quick setup

1. Install dependencies

```powershell
npm install
```

2. Add environment variables (on Vercel or locally using .env)

Server (Vercel) env vars:
- RAZORPAY_KEY_ID
- RAZORPAY_KEY_SECRET
- FIREBASE_SERVICE_ACCOUNT (full JSON or base64)
- RAZORPAY_WEBHOOK_SECRET
- SENDGRID_API_KEY (optional)
- SENDGRID_FROM_EMAIL (optional)
- ADMIN_EMAILS (comma-separated admin emails)

Frontend (Vite) env var:
- VITE_RAZORPAY_KEY_ID

## Run dev

```powershell
npm run dev
```

## Tests

Unit tests use Jest. Run tests with:

```powershell
npm test
```

These tests mock serverless dependencies and validate core server endpoints.

---

If you'd like, I can add full CI integration (GitHub Actions) to run tests on push/deploy.
