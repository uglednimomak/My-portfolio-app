# 🖥️ Cyber Portfolio - Ante Penava

A retro-futuristic portfolio website built with React, TypeScript, and TailwindCSS, featuring a classic desktop OS interface with a cyberpunk aesthetic. This interactive portfolio showcases work experience, projects, education, and skills through a nostalgic window-based UI.

## ✨ Features

### 🎨 Desktop OS Experience
- **Window Management**: Fully interactive windows that can be opened, closed, minimized, and dragged
- **Desktop Icons**: Click to open applications (About, Experience, Projects, Education, Terminal, Contact, Lighthouse)
- **Taskbar**: Shows active windows with click-to-focus functionality
- **Z-Index Management**: Automatic window stacking when clicking to focus

### 🎭 Dynamic Mood System
Three distinct visual themes that transform the entire interface:

- **🟢 HACKER** (Default): Classic cyberpunk with terminal green (`#00ff41`), pink, and cyan accents
- **🟣 PARTY**: Purple-based party mode with a "System Status: AWAY" overlay indicating you're partying
- **🟤 NATURE**: Earthy tones with lime green, inspired by being offline in nature - "Gone to the woods"

Mood changes affect:
- Color scheme (CSS custom properties)
- Background gradients
- Border colors
- Glow effects
- Full-screen mood overlays with status messages

### 📱 Applications

1. **BIO_DATA** (About)
   - Profile image with cyber border effects
   - Bio information
   - Skill matrix with animated progress bars
   - Mood-reactive color schemes

2. **WORK_LOG** (Experience)
   - Professional work history
   - Company details and roles
   - Timeline format

3. **PROJECTS**
   - Portfolio project showcase
   - Project descriptions and technologies
   - Links to live demos/repos

4. **EDUCATION**
   - Educational background
   - Certifications and courses

5. **TERMINAL**
   - Interactive command-line interface
   - Custom terminal commands
   - Retro terminal aesthetics

6. **CONTACT**
   - Email contact information: `ante93366@gmail.com`
   - Contact form or direct mail links

7. **LIGHTHOUSE** (Top-right corner)
   - Special diagnostic/stats window
   - Positioned separately from other icons

### 🎨 Visual Effects
- **CRT Overlay**: Scanline effect for authentic retro monitor feel
- **Grid Background**: Dynamic radial gradient with grid pattern using CSS custom properties
- **Neon Glow**: Box shadows on interactive elements
- **Custom Fonts**: 
  - JetBrains Mono (main monospace)
  - VT323 (retro terminal font)
- **Responsive Design**: Mobile-friendly with adaptive layouts

## 🛠️ Tech Stack

- **Framework**: React 19.2.3 with TypeScript 5.3.3
- **Build Tool**: Vite 5.0.8
- **Styling**: TailwindCSS 3.4.1 with PostCSS
- **Icons**: Lucide React 0.561.0
- **Analytics**: Vercel Analytics
- **Type Safety**: Full TypeScript implementation with custom types
- **Deployment**: Vercel (configured with `vercel.json`)

## 📦 Project Structure

```
├── components/
│   ├── DesktopIcon.tsx      # Desktop app icons
│   ├── Taskbar.tsx          # Bottom taskbar with mood switcher
│   ├── Window.tsx           # Draggable window component
│   └── apps/
│       ├── About.tsx        # Bio and skills
│       ├── Education.tsx    # Educational background
│       ├── Experience.tsx   # Work history
│       ├── Lighthouse.tsx   # Stats/diagnostics
│       ├── Projects.tsx     # Portfolio projects
│       └── Terminal.tsx     # Interactive CLI
├── public/
│   └── images/              # Profile and project images
├── App.tsx                  # Main application logic
├── types.ts                 # TypeScript type definitions
├── index.css                # Global styles and CSS variables
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite build configuration
└── vercel.json              # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd My-portfolio-app-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run vercel-build` - Vercel deployment build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Changing Colors
Edit CSS custom properties in `index.css`:

```css
:root {
  --c-bg: #050505;           /* Background */
  --c-primary: #00ff41;      /* Primary accent (terminal green) */
  --c-accent-1: #ff00ff;     /* Pink accent */
  --c-accent-2: #00ffff;     /* Cyan accent */
}
```

### Adding New Apps
1. Add app ID to `types.ts` enum
2. Create component in `components/apps/`
3. Add to `INITIAL_APPS` array in `App.tsx`
4. Add case in `renderAppContent()` switch

### Modifying Moods
Edit mood classes in `index.css` under `.mood-party` and `.mood-nature` sections.

## 🌐 Deployment

Configured for Vercel deployment with zero configuration:

```bash
npm run build
```

The build outputs to `dist/` and is ready for static hosting on Vercel, Netlify, or any CDN.

## 📱 Responsive Design

- **Desktop**: Full window management with drag and drop
- **Tablet**: Adaptive grid layout
- **Mobile**: Stacked layout with touch-friendly controls

## 🎯 Key Features Breakdown

### State Management
- React hooks (`useState`, `useEffect`)
- Z-index queue for window focus
- Minimized/maximized window states
- Persistent mood selection with body class

### Performance
- CSS-injected-by-js for optimized styles
- Webfont downloading for faster loads
- Vite's optimized bundling and code splitting

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels on interactive elements
- High contrast color schemes

## 📄 License

This is a personal portfolio project by Ante Penava.

## 📧 Contact

**Email**: ante93366@gmail.com

---

Built with 💚 using React, TypeScript, and a lot of cyberpunk vibes 🟢
