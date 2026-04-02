# 🌐 Md Musa Islam Fahad (Personal Portfolio)

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-00e5c8?style=for-the-badge&logo=vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)

<br/>

**A modern, animated, dark-themed portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.**

[🚀 Live Demo](https://musaislamfahad.vercel.app/) &nbsp;·&nbsp; [📬 Contact Me](mailto:musa.islam.fahad@gmail.com) &nbsp;·&nbsp; [💼 LinkedIn](https://www.linkedin.com/in/md-musa-islam-fahad-b18759249/) &nbsp;·&nbsp; [🐙 GitHub](https://github.com/MusaIslamFahad)

</div>

---

## ✨ Features

- **Animated Particle Background** — Interactive tsParticles network with teal/gold color theme
- **Typewriter Effect** — Multi-role cycling text animation in the hero section
- **Framer Motion Animations** — Smooth scroll-triggered entrance animations throughout
- **Dark / Light Theme Toggle** — Persistent theme switching via `next-themes`
- **Fully Responsive** — Mobile-first layout that works across all screen sizes
- **7 Complete Sections** — Home, About, Experience, Education, Skills, Projects, Certifications & Contact
- **Contact Form** — Mailto-powered contact form with subject and message fields
- **SEO Ready** — Next.js Metadata API with custom title and description
- **Space Mono + Syne Fonts** — Distinctive monospace + display font pairing via Google Fonts

---

## 🗂️ Project Structure

```
portfolio-fahad/
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles, CSS variables, animations
│   │   ├── layout.tsx          # Root layout with font & metadata config
│   │   └── page.tsx            # Main page composing all sections
│   └── components/
│       ├── Navbar.tsx          # Fixed nav with smooth scroll & mobile menu
│       ├── Hero.tsx            # Landing section with typewriter & stats
│       ├── About.tsx           # Bio, contact info & social links
│       ├── Experience.tsx      # Timeline-based work experience
│       ├── Education.tsx       # Academic journey cards
│       ├── Skills.tsx          # Categorized skill tag grid
│       ├── Projects.tsx        # Featured project cards with live links
│       ├── Certifications.tsx  # Credential cards with Drive link
│       ├── Contact.tsx         # Contact info + mailto form
│       ├── ParticleBackground.tsx  # tsParticles animated background
│       ├── SplitText.tsx       # Character-by-character letter animation
│       ├── ThemeProvider.tsx   # next-themes provider wrapper
│       └── ThemeToggle.tsx     # Animated dark/light mode toggle
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2 | React framework & routing |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations & transitions |
| [tsParticles](https://particles.js.org/) | 3.x | Interactive particle background |
| [Lucide React](https://lucide.dev/) | 0.577 | Icon library |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 | Theme management |
| [Space Mono](https://fonts.google.com/specimen/Space+Mono) | — | Monospace body font |
| [Syne](https://fonts.google.com/specimen/Syne) | — | Display/heading font |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/MusaIslamFahad/portfolio.git
cd portfolio
```

**2. Install dependencies**

```bash
npm install
```

**3. Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deployment on Vercel

The easiest way to deploy this portfolio is via [Vercel](https://vercel.com/).

**Option 1 — Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from inside the project folder
cd portfolio-fahad
vercel
```

**Option 2 — Vercel Dashboard**

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Set the **Root Directory** to `portfolio-fahad` (if using the zip structure)
5. Click **Deploy** — it's live in under a minute ✅

> ⚠️ **Important:** If you get a `404: NOT_FOUND` error on Vercel, go to **Project Settings → General → Root Directory** and set it to the folder containing `package.json`.

---

## 🎨 Customization

All personal information is hardcoded inside the component files under `src/components/`. To update for your own use:

| What to change | File |
|---|---|
| Name, bio, summary | `Hero.tsx`, `About.tsx` |
| Work experience | `Experience.tsx` |
| Education history | `Education.tsx` |
| Skills & tools | `Skills.tsx` |
| Projects | `Projects.tsx` |
| Certifications | `Certifications.tsx` |
| Contact info & email | `Contact.tsx` |
| Color theme | `globals.css` (CSS variables `--teal`, `--gold`) |
| Particle colors | `ParticleBackground.tsx` |
| Font choices | `layout.tsx` |

---

## 📸 Sections Overview

| # | Section | Description |
|---|---|---|
| 01 | **Hero** | Name, typewriter role animation, stats, CTA buttons |
| 02 | **About** | Bio summary, contact details, availability status |
| 03 | **Experience** | Campus Ambassador roles on an animated timeline |
| 04 | **Education** | BSc DIU, HSC, SSC with GPA badges |
| 05 | **Skills** | 6 skill categories: Programming, ML/AI, Libraries, Databases, Tools, Soft Skills |
| 06 | **Projects** | Crude Oil Forecasting (live demo), AI Travel Guide, Sleep Disorder Prediction |
| 07 | **Certifications** | Microsoft, Ostad, Duke University credentials |
| 08 | **Contact** | Contact info + mailto-powered message form |

---

## 📬 Contact

**Md Musa Islam Fahad**

- 📧 Email: [musa.islam.fahad@gmail.com](mailto:musa.islam.fahad@gmail.com)
- 💼 LinkedIn: [md-musa-islam-fahad-b18759249](https://www.linkedin.com/in/md-musa-islam-fahad-b18759249/)
- 🐙 GitHub: [MusaIslamFahad](https://github.com/MusaIslamFahad)
- 📍 Location: Mirpur, Dhaka-1216, Bangladesh

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Md Musa Islam Fahad** &nbsp;·&nbsp; Dhaka, Bangladesh

⭐ If you found this helpful, consider giving the repo a star!

</div>
