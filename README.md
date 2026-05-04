This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
<div align="center">
  
  # 🌐 AETHER 
  ### Autonomous ColdChain Triage & Predictive Logistics

  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Google Gemini](https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white)](https://deepmind.google/technologies/gemini/)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
  
  **[Live Vercel Deployment](https://aether-coldchain.vercel.app/)** | **[Watch the Demo Video](YOUR_YOUTUBE_LINK_HERE)**

</div>

---

## 🛑 The Problem: $35 Billion Lost Annually
The global supply chain for biopharmaceuticals, vaccines, and high-yield agriculture relies on a fragile "ColdChain." Currently, existing visibility platforms are purely **reactive**. They tell fleet managers that a truck is delayed, and temperature sensors act as autopsy tools—alerting teams only *after* the cargo has already spoiled.

## ⚡ The Solution: AETHER
AETHER is a predictive logistics control tower. Instead of passively tracking vehicles, AETHER ingests live fleet telemetry and external volatility data (traffic gridlocks, severe weather). By leveraging the Google Gemini API, it calculates the precise thermal decay rate of the cargo. 

If a transit delay outlasts the cargo’s thermal survival window, AETHER autonomously executes the **Safe Harbor Protocol**—instantly rerouting the driver to the nearest partnered cold-storage facility to preserve the high-value cargo.

---

## ✨ Core Features

### 🗺️ 1. Tactical Live Map
* **Zero-Dependency Routing:** Built on React-Leaflet and CartoDB Dark Matter tiles, providing an enterprise-grade dark mode interface without the overhead of paid API keys.
* **Real-Time Visual Triage:** Live tracking dots dynamically pulse (Critical Red / Stable Green) based on AI decay predictions.

### 🧠 2. AI Intervention Feed
* **Autonomous Decision Logging:** Powered by **Gemini 1.5 Flash**, the system analyzes anomalies, predicts time-to-decay logic, and logs its autonomous rerouting decisions in a readable, live-action feed.
* **Contextual Alerts:** Instantly surfaces vehicle ID, cargo profile, current temperature, and target thresholds.

### 📊 3. Fleet Analytics Dashboard
* **Scalable Operations:** A comprehensive Fleet Manager view to monitor active rosters, fleet uptime, and total distance logged.
* **Instant View Toggling:** Seamless React state management allows field engineers to switch between the Live Map and Data Analytics instantly, without triggering page reloads.

---

## 🛠️ Technical Architecture

* **Frontend:** Next.js (App Router), React, TypeScript
* **Styling:** Tailwind CSS, `next-themes` (Seamless Light/Dark Mode)
* **Icons & UI:** Lucide React
* **Mapping Engine:** Leaflet, React-Leaflet
* **AI Engine:** Google Gemini API
* **Deployment:** Vercel (CI/CD via GitHub)

---

## 🚀 Getting Started (Local Development)

To run this project locally, follow these steps:

**1. Clone the repository:**
```bash
git clone [https://github.com/your-username/aether-coldchain.git](https://github.com/your-username/aether-coldchain.git)
cd aether-coldchain