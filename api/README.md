---

### 📁 `apps/api/README.md`
```markdown
# Finilo API (Express.js)

This is the backend API for **Finilo**, built with Express.js. It handles user accounts, subscription tracking, and notification scheduling.

## 🛠 Tech Stack
- Framework: Express.js
- Auth: JWT
- DB: PostgreSQL (via Prisma or Knex)
- Notifications: Resend, Expo push
- Scheduler: Node-cron or BullMQ

## 🚀 Getting Started
```bash
pnpm install
pnpm dev


📁 Structure
	•	routes/: API route handlers
	•	controllers/: Business logic
	•	services/: Email, push, etc.
	•	db/: DB models and config
	•	utils/: Helpers

✅ TODO
	•	Auth routes
	•	Subscription logic
	•	Notification jobs