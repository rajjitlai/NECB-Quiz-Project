# Quizzies | The Pro Quiz App 🧠✨

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/rajjitlai/NECB-Quiz-Project)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, highly interactive, frontend-focused quiz application built with Next.js 16. Features a sleek, gamified user interface with a dark-mode-first design, glassmorphism elements, and fluid animations.

## 🚀 Features

- **Interactive Quiz Engine:** 30-second countdown timers, immediate answer feedback, and dynamic progress tracking.
- **Gamified Dashboard & Profile:** Track your XP, streaks, and view your skill mastery via beautiful area charts (powered by Recharts).
- **Global Leaderboard:** Compete with others on a beautifully animated podium interface.
- **Fluid Animations:** Powered by Framer Motion for smooth page transitions, stagger effects, and interactive UI components.
- **Modern UI/UX:** Glassmorphism, mesh gradients, and a sleek dark mode interface using Tailwind CSS 4.

## 🛠️ Tech Stack

- **Framework:** Next.js 16.2.0 (React 19.2.4) - App Router
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Data Visualization:** Recharts
- **Icons:** Lucide React
- **Language:** TypeScript

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `/app/page.tsx`: Landing page with hero section and featured categories.
- `/app/dashboard/page.tsx`: Personalized user hub with quick actions and stats.
- `/app/categories/page.tsx`: Explore and search all available quiz topics.
- `/app/quiz/[id]/page.tsx`: The core interactive quiz engine.
- `/app/results/page.tsx`: Post-quiz analytics and score breakdown.
- `/app/leaderboard/page.tsx`: Gamified global rankings.
- `/app/profile/page.tsx`: User profile, achievements, and skill mastery charts.

## 🔮 Future Enhancements (Roadmap)

- **Backend Integration:** Connect to a database (e.g., PostgreSQL via Prisma) to serve dynamic questions and persist user scores.
- **Authentication:** Implement NextAuth.js or Clerk for user sign-ups and progress saving.
- **Anti-Cheating Mechanics:** Server-side answer validation.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
Copyright (c) 2026 Rajjit Laishram
