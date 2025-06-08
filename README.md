# Finilo

**Finilo** is a cross-platform app that helps users avoid unwanted subscription renewals by sending timely reminders before charges hit. Stay in control of your recurring expenses.

## 🧩 Monorepo Structure

This is a full-stack monorepo powered by `pnpm` workspaces and optionally `Turborepo`.


finilo/
├── apps/
│   ├── web/       # Next.js frontend
│   ├── mobile/    # Expo mobile app
│   └── api/       # Express.js backend API
│
├── packages/
│   ├── ui/        # Shared UI components
│   └── lib/       # Shared logic & utilities
│
├── infra/         # DevOps, Docker, CI/CD


## 🛠 Tech Stack

- **Web**: Next.js, TailwindCSS  
- **Mobile**: Expo (React Native)  
- **API**: Express.js, PostgreSQL  
- **Notifications**: Email (Resend), Push (Expo)  
- **Monorepo**: pnpm, workspaces, Turbo (optional)

## 🚀 Getting Started

Install dependencies:

```bash
pnpm install


Run individual apps:
pnpm dev:web      # Next.js frontend
pnpm dev:mobile   # Expo mobile app
pnpm dev:api      # Express.js backend


📦 Workspace Scripts

Use pnpm workspaces to run scripts across apps and packages.

🧪 Future Enhancements
	•	Billing insights & cancellation suggestions
	•	Email + push notification scheduler
	•	Multi-device sync and backup
	•	Premium plans with smart alerts

📄 License

## 📄 License

This source code is **not licensed for reuse, redistribution, or modification**.  
All rights are reserved by the author.  
Please contact the owner for inquiries regarding usage or licensing.