# Portfolio v3 🌈

A modern, accessible, and visually stunning portfolio showcasing my work as a frontend engineer. Built with React, TypeScript, and featuring a beautiful pastel rainbow color system that flows throughout the entire design.

## ✨ Features

### 🎨 Pastel Rainbow Color System
- **7-color palette** flowing through the spectrum: rose, coral, sunny, mint, sky, lavender, violet
- **Dynamic color assignment** across all card types based on index
- **Holographic gradient borders** with animated shimmer effects
- **Full accessibility compliance** with WCAG-approved contrast ratios
- **Dark mode support** with adjusted luminosity for optimal visibility

### 🎯 Interactive Components
- **Featured Projects** - Bento-grid layout with holographic borders
- **Case Study Cards** - Expandable cards with "Behind the Scenes" details
- **More Work** - Flip cards with touch/hover interactions
- **Tech Stack Badges** - Auto-cycling rainbow colors
- **Career Timeline** - Interactive expandable timeline
- **Brand Marquee** - Smooth infinite scroll animation

### ♿ Accessibility First
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Skip links for main content
- Reduced motion support
- Semantic HTML throughout

### 🚀 Performance
- Code splitting and lazy loading
- Optimized images and assets
- Minimal bundle size
- Fast page load times
- SEO optimized

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** SCSS with modern CSS features
- **Routing:** React Router v6
- **Icons:** Custom SVG components
- **Deployment:** Netlify

## 🎨 Color System

The portfolio features a sophisticated 7-color pastel rainbow system:

```scss
$color-rose: #FF85C0;        // Vibrant pastel pink
$color-coral: #FF9980;       // Vibrant pastel coral
$color-sunny: #FFC947;       // Vibrant pastel yellow
$color-mint: #5DD6A5;        // Vibrant pastel mint
$color-sky: #66B8FF;         // Vibrant pastel sky blue
$color-lavender: #A380FF;    // Vibrant pastel lavender
$color-violet: #D966FF;      // Vibrant pastel violet
```

Each color has a dark mode variant with increased luminosity for optimal contrast on dark backgrounds.

### Color Distribution

**Featured Work Cards:**
- Rose gradient: rose → coral → sunny
- Coral gradient: coral → sunny → mint
- Sunny gradient: sunny → mint → sky

**Case Study Cards:**
- Automatically cycle through all 7 colors
- Rainbow-tinted image backgrounds
- Color-coordinated status badges
- Matching detail section backgrounds

**More Work (Flip Cards):**
- Each card has a unique rainbow iconTone
- Color-matched hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/marichka-offen/portfolio-v3.git

# Navigate to project directory
cd portfolio-v3

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

## 📁 Project Structure

```
portfolio-v3/
├── public/                 # Static assets
│   ├── images/            # Project images
│   └── logos/             # Brand logos
├── src/
│   ├── assets/            # Icons and SVGs
│   ├── components/        # React components
│   │   ├── Badge/
│   │   ├── CaseStudyCard/
│   │   ├── TechStack/
│   │   └── ...
│   ├── data/              # Project and content data
│   ├── pages/             # Page components
│   │   ├── HomePage/
│   │   └── CaseStudy/
│   ├── scss/              # Global styles
│   │   ├── abstracts/     # Variables, mixins, functions
│   │   ├── base/          # Reset, typography
│   │   └── utilities/     # Utility classes
│   ├── types/             # TypeScript types
│   └── App.tsx            # Root component
└── package.json
```

## 🎯 Key Components

### Badge Component
Auto-cycling rainbow color variants for technology tags and status indicators.

```tsx
<Badge variant="rose" size="sm">React</Badge>
<Badge variant="mint" size="md">TypeScript</Badge>
```

### TechStack Component
Displays technology badges with automatic rainbow color distribution.

```tsx
<TechStack
  technologies={['React', 'TypeScript', 'SCSS']}
  maxVisible={4}
  rainbowColors={true}
/>
```

### CaseStudyCard Component
Expandable project cards with rainbow color accents, gradient backgrounds, and detailed information.

```tsx
<CaseStudyCard
  project={projectData}
  index={0}
/>
```

## 🌈 Design Philosophy

This portfolio embodies several key principles:

1. **Color as Communication** - The rainbow color system isn't just aesthetic; it helps create visual hierarchy and guides the user's eye through the content.

2. **Accessibility Without Compromise** - Beautiful design that everyone can enjoy, with full keyboard navigation, screen reader support, and WCAG-compliant colors.

3. **Motion with Purpose** - Subtle animations and transitions enhance the experience without overwhelming or distracting from the content.

4. **Performance Matters** - Fast load times and smooth interactions are non-negotiable features, not nice-to-haves.

## 🚢 Deployment

The site is deployed on Netlify with automatic deployments from the main branch.

```bash
# Build for production
npm run build

# The dist/ folder contains the production build
```

### Environment Variables

No environment variables required for basic deployment.

## 🔧 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

While this is a personal portfolio, I welcome feedback and suggestions! Feel free to:
- Open an issue for bugs or feature requests
- Submit a pull request with improvements
- Share your thoughts and ideas

## 👩‍💻 Author

**Marichka Offen**
- Website: [marichka.dev](https://marichka.dev)
- GitHub: [@marichka-offen](https://github.com/marichka-offen)
- LinkedIn: [Marichka Offen](https://linkedin.com/in/marichka-offen)

## 🙏 Acknowledgments

- Designed and developed with care and attention to detail
- Inspired by the beauty of rainbow gradients and modern web design
- Built with accessibility and performance in mind from day one

---

Made with 💜 and lots of ☕
