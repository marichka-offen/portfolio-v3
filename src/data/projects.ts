// Case study data for individual project pages
export interface ProjectData {
    id: string
    slug: string
    title: string
    tagline: string
    role: string
    timeline: string
    status: string
    image: string
    imageAlt?: string
    url?: string
    technologies: string[]
    card: {
        summary: string
        challengeTeaser?: string
        techHighlights?: string[]
    }
    full: {
        problem: string[]
        challenges: string[]
        whatMadeThisHard?: string[]
        whatIBuilt: string[]
        visibleWork?: string | string[] | [string, string][]
        whatIdDoDifferently?: string[]
    }
}

// Empty array for legacy component support
export const additionalProjects: ProjectData[] = []

export const featuredProjects: ProjectData[] = [
    {
        id: 'stumptown',
        slug: 'stumptown',
        title: 'Stumptown Coffee Roasters',
        tagline: 'E-commerce rebuild with Vue 3, modular architecture, and subscription management',
        role: 'Lead Frontend Engineer',
        timeline: '2024',
        status: 'Shipped',
        image: '/images/feat-s4.webp',
        imageAlt: 'Stumptown product detail page with subscription options',
        url: 'https://stumptowncoffee.com',
        technologies: ['Shopify', 'Vue 3', 'SCSS', 'Liquid'],
        card: {
            summary: 'Led frontend rebuild of product pages, implementing Vue 3 components, modular section architecture for marketing, and streamlined subscription management.',
            challengeTeaser: 'Rebuilding a legacy e-commerce site with complex product variants while maintaining SEO rankings and empowering the marketing team to manage content independently.',
            techHighlights: [
                'Built dynamic product filtering with real-time updates using Vue 3',
                'Created modular section-based architecture reducing content update time by 80%',
                'Implemented subscription toggle with improved conversion flow'
            ]
        },
        full: {
            problem: [
                'Outdated codebase made updates slow and required developer intervention for simple changes',
                'Subscription flow was confusing, leading to high cart abandonment',
                'Product filtering was basic with poor user feedback',
                'Marketing team couldn\'t update page layouts without engineering help'
            ],
            challenges: [
                'Maintaining SEO rankings during complete platform migration',
                'Integrating with existing subscription provider (Recharge) APIs',
                'Training marketing team on new modular content system',
                'Meeting aggressive 3-month timeline while ensuring quality',
                'Supporting complex product variants (size, grind, quantity) with subscriptions'
            ],
            whatMadeThisHard: [
                'Every product had multiple variants (whole bean, ground, size, quantity) with different subscription options',
                'Had to support 100+ legacy URLs for SEO without breaking links',
                'Coordinating across design, backend, and marketing teams with different priorities',
                'Shopify\'s Liquid templating limitations while using modern Vue 3 components'
            ],
            whatIBuilt: [
                'Dynamic product filtering with Vue 3 and AJAX for real-time results',
                'Modular section-based page builder - marketing can now build pages in minutes vs. days',
                'Subscription toggle component with clear pricing comparison',
                'Reusable Vue components for product cards, quick add, and variant selectors',
                'Mobile-first responsive layouts with performance optimization',
                'Image lazy loading and optimized asset delivery',
                'Component documentation for the team'
            ],
            visibleWork: [
                '/images/scr/pdp-desktop.webp',
                '/images/scr/plp-desktop.webp',
                '/images/scr/subscription-pdp-desktop.webp',
                '/images/scr/filters-closeup-desktop.webp',
                '/images/scr/collection-grid-desktop.webp',
                '/images/scr/flavor-profile-desktop.webp',
                '/images/scr/brew-guide-closeup-desktop.webp'
            ],
            whatIdDoDifferently: [
                'Implement comprehensive accessibility audit with visible keyboard focus states for all interactive elements',
                'Build Storybook documentation from the start for better component visibility',
                'Add automated visual regression testing to catch layout issues earlier',
                'Prioritize WCAG 2.1 AA compliance throughout development, not just at the end',
                'Implement better error tracking and analytics from day one'
            ]
        }
    },
    {
        id: 'prefect',
        slug: 'prefect',
        title: 'Prefect UI Library',
        tagline: 'Design system and data visualization components for workflow orchestration',
        role: 'Frontend Engineer',
        timeline: '2021-2023',
        status: 'Shipped',
        image: '/images/feat-p2.webp',
        imageAlt: 'Prefect D3.js scatter plot visualization',
        url: 'https://prefect.io',
        technologies: ['TypeScript', 'Vue 3', 'D3.js', 'Storybook', 'Vitest'],
        card: {
            summary: 'Design system and data visualization components for workflow orchestration platform.',
            challengeTeaser: 'Building reusable components for complex data visualizations while maintaining consistency across the platform.',
            techHighlights: [
                'Built component library with 50+ reusable components',
                'Created custom D3.js visualizations for workflow data',
                'Implemented comprehensive testing with Vitest'
            ]
        },
        full: {
            problem: [
                'Prefect was building version 2.0 of their workflow orchestration platform — a complete rebuild.',
                'They were simultaneously creating Prefect Cloud, the hosted team-based version.',
                'The old design system was discarded months before launch, requiring a brand-new token system and component library.',
                'Both core products needed a frontend built from the ground up with no existing UI library to rely on.'
            ],
            challenges: [
                'Building a D3-powered scatter plot with no Figma designs — only sketches and reference screenshots.',
                'Learning D3.js from scratch while designing a data-agnostic charting component.',
                'Creating a new design system (Prefect Design) after the old one was abandoned mid-project.',
                'Building Prefect UI Library while also building product features — both depending on each other.',
                'Designing and implementing TypeScript interfaces across the entire codebase.',
                'Adapting to shifting priorities and feature requirements in a fast-paced startup environment.'
            ],
            whatMadeThisHard: [
                'No design files for early data visualization components — only rough sketches.',
                'The scatter plot needed to handle any dataset, not just Prefect\'s workflow data.',
                'The design system and UI library were being invented while features were actively being implemented.',
                'TypeScript interfaces required full custom definitions, with no legacy patterns to follow.',
                'Startup unpredictability meant continuous iteration and mid-sprint changes.'
            ],
            whatIBuilt: [
                'A D3-powered scatter plot component in Vue Charts to visualize workflow timing and status.',
                'Toast notification system — designed collaboratively, implemented independently.',
                'Layout primitives and UI components for the new Prefect UI Library.',
                'TypeScript types and interfaces for props, components, and API data.',
                'Onboarding guide for new engineers covering setup, test flows, mock data, and conceptual understanding.',
                'Early component architecture and coding patterns used by the team moving forward.'
            ],
            visibleWork: [
                ['Prefect Cloud Dashboard', 'https://app.prefect.cloud'],
                ['Prefect UI Library (GitHub)', 'https://github.com/PrefectHQ/prefect-ui-library'],
                ['Prefect Design (GitHub)', 'https://github.com/PrefectHQ/prefect-design']
            ],
            whatIdDoDifferently: [
                'Nothing major — this project primarily taught scalable system thinking rather than exposing structural mistakes.'
            ]
        }
    },
    {
        id: 'portfolio-v3',
        slug: 'portfolio-v3',
        title: 'Portfolio v3',
        tagline: 'A pastel rainbow design system with holographic gradients and accessibility-first approach',
        role: 'Designer & Developer',
        timeline: '2026',
        status: 'Work in Progress',
        image: '/images/portfolio/bento-desktop.webp',
        imageAlt: 'Portfolio v3 rainbow color system with holographic cards',
        url: 'https://marichka.dev',
        technologies: ['React', 'TypeScript', 'SCSS', 'Vite', 'Design Systems'],
        card: {
            summary: 'A modern portfolio featuring a sophisticated 7-color pastel rainbow system with holographic gradient borders, animated shimmers, and full accessibility compliance.',
            challengeTeaser: 'Creating a vibrant, colorful design system while maintaining WCAG 2.1 AA accessibility standards and ensuring performance across all devices.',
            techHighlights: [
                'Built complete 7-color rainbow system with auto-cycling color distribution',
                'Implemented holographic gradient borders with animated shimmer effects',
                'Achieved WCAG 2.1 AA compliance across all rainbow color combinations'
            ]
        },
        full: {
            problem: [
                'Previous portfolio felt too corporate and didn\'t reflect my personality',
                'Wanted to showcase technical skills through the portfolio itself',
                'Needed a system that was both visually striking and accessible',
                'Design systems often sacrifice vibrancy for accessibility'
            ],
            challenges: [
                'Balancing vibrant colors with accessibility requirements',
                'Creating consistent color distribution across different card types',
                'Implementing holographic effects that work in both light and dark modes',
                'Maintaining performance with complex gradients and animations',
                'Future-proofing Sass code while using modern color functions'
            ],
            whatMadeThisHard: [
                'Finding the perfect pastel rainbow colors that pass WCAG contrast ratios',
                'Coordinating 7 colors across borders, badges, backgrounds, and shimmers',
                'Creating smooth gradient transitions between adjacent rainbow colors',
                'Ensuring hover states remain accessible while intensifying colors'
            ],
            whatIBuilt: [
                '🌈 7-Color Rainbow System: Rose, coral, sunny, mint, sky, lavender, violet with full light/dark mode variants',
                '✨ Holographic Gradient Borders: Animated gradient borders using CSS mask compositing with 3-color flows',
                '💫 Shimmer Animations: Subtle 12-second animated shimmer effects on featured cards',
                '🎨 Smart Color Distribution: Automatic rainbow color assignment across case studies, bento cards, and flip cards',
                '♿ Accessibility First: All color combinations tested and WCAG 2.1 AA compliant',
                '🎯 Component System: Badge, TechStack, CaseStudyCard with rainbow color support',
                '🔧 Modern Sass: Migrated from deprecated darken()/lighten() to color.adjust() for future compatibility',
                '📱 Responsive Design: Touch-friendly flip cards, keyboard navigation, reduced motion support'
            ],
            visibleWork: [
                '/images/portfolio/hero-desktop.webp',
                '/images/portfolio/bento-desktop.webp',
                '/images/portfolio/holo-cta-box-desktop-closeup.webp',
                '/images/portfolio/timeline-closeup-desktop.webp',
                '/images/portfolio/case-study-hero-closeup-desktop.webp'
            ],
            whatIdDoDifferently: [
                'Start with the color system from the beginning instead of retrofitting it',
                'Build a color palette generator tool to test different rainbow combinations',
                'Document the design tokens earlier in the process',
                'Create more intermediate color stops for even smoother gradients'
            ]
        }
    }
]
