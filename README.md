# Wall Done BE — Premium Renovatie & Afwerking (Leuven)

> An elegant, professional, and state-of-the-art single-page landing application built for **Wall Done Betrouwbaar & Ervaren** — a high-end painting, finishing, and renovation company operating on the Belgian market (Leuven, Tienen, and surrounding regions).

---

## 🌟 Visual Identity & Key Features

*   **Premium Light Design System**: Curated harmonious color palette utilizing warm whites, elegant dark charcoal, and striking custom crimson accent highlights (`#C82333`).
*   **Dynamic Navigation Backbone**: Interactive red timeline progress track that visually anchors the page scroll, providing smooth snapping and visual continuity.
*   **Core Specialties Timelines**: Beautiful vertical progress tracks linking execution steps (01 -> 02 -> 03) for core disciplines like **Schilderwerken (Painting)** and **Vloeren (Flooring)**.
*   **Interactive Realizations Gallery**: Always-visible portfolio cards with clear category titles, locations, and interactive photo count badges showing how many pictures are in each slide deck. Includes a full-screen custom image lightbox.
*   **Clean Mobile timeline**: Perfectly optimized vertical timeline inside the "Nasz Proces" section which is fully visible and responsive on all mobile viewports.
*   **Margin Particles Decoration**: Floating, non-intrusive micro-particles on screen boundaries that respond dynamically to scroll acceleration.
*   **Full 5-Language i18n Localization**: Built-in stateful translation support for:
    *   🇵🇱 Polski (Polish - Base)
    *   🇬🇧 English (English)
    *   🇧🇪 Vlaams (Flemish / Dutch)
    *   🇩🇪 Deutsch (German)
    *   🇫🇷 Français (French)

---

## 🛠️ Technology Stack

*   **Framework**: [React.js](https://reactjs.org/) (Powered by [Vite](https://vitejs.dev/) for extremely fast hot reloading and building)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Fully customized config with customized brand colors: `toppi-red`, `toppi-dark`, `toppi-cream`)
*   **Icons**: [Lucide React](https://lucide.dev/) (Modern, highly performant geometric line icons)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) (Smooth transitions, section reveals, slide-overs, and micro-interactions)
*   **State Management**: React Context-based translation state provider (`LangContext.jsx`)

---

## 📂 Project Architecture

```bash
walldone/
├── public/                 # Static assets, portfolio image files
│   └── realization/        # Realizations media folders (1-6)
├── src/
│   ├── components/         # Reusable interactive components
│   │   ├── Hero.jsx        # Jaw-dropping welcome header with glass navigation
│   │   ├── Stats.jsx       # Floating core values & guarantees grid
│   │   ├── Services.jsx    # Core specialties section with vertical connection lines
│   │   ├── Process.jsx     # "How we work" interactive vertical timeline track
│   │   ├── Portfolio.jsx   # Grid of projects with floating photo count badges & Lightbox
│   │   ├── Testimonials.jsx# Slider of real quotes from PDF catalog
│   │   ├── Contact.jsx     # High-conversion contact form & direct social handles
│   │   ├── Footer.jsx      # Compact, ultra-clean SEO footer with target cities & keywords
│   │   ├── LangSwitcher.jsx# Minimal language bubble dropdown menu
│   │   └── MarginDecorations.jsx # Scroll-driven floating particle decor
│   ├── hooks/
│   │   └── index.js        # Custom utility scroll observer hooks
│   ├── App.jsx             # Main SPA shell managing layout
│   ├── i18n.js             # 5-language localization dictionary database
│   ├── LangContext.jsx     # Global i18n provider hook
│   ├── index.css           # Global custom typography and Tailwind directives
│   └── main.jsx            # React mounting entrypoint
├── tailwind.config.js      # Custom theme settings
├── vite.config.js          # Vite build pipeline setup
└── package.json            # Dependencies manifests
```

---

## 🚀 Getting Started

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

### 2. Installation
Clone or navigate to the repository directory and install the packages:
```bash
npm install
```

### 3. Run Development Server
Spin up the local hot-reloading development environment:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for Production
Bundle the application into a highly optimized, minified production build:
```bash
npm run build
```
The output directory will be `dist/`, ready to be uploaded to standard hosting providers like Vercel, Netlify, or self-hosted environments.

---

## 📈 SEO & Belgian Market Positioning

The footer is optimized with semantic, crawlable search terms designed for local Google search engine indexing:
*   **Core Polish/Belgian Search Terms**: `Malowanie`, `Malowanie Premium`, `Zabudowy G-K`, `Kompleksowe Remonty`.
*   **Target Cities & Areas (Leuven region)**: `Leuven`, `Tienen`, `Herent`, `Heverlee`, `Kessel-Lo`, `Wilsele`, `Kortenberg`, `Lubbeek`, `Boutersem`, `Haacht`.

---

## 💎 License

Created for private use by **Wall Done BE** (Betrouwbaar & Ervaren). All rights reserved.
