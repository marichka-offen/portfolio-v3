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
        tagline: 'Complete e-commerce redesign with accessible filtering and subscription management',
        role: 'Lead Frontend Engineer',
        timeline: '2024',
        status: 'Shipped',
        image: '/images/feat-s4.webp',
        imageAlt: 'Stumptown Coffee Roasters website redesign',
        url: 'https://stumptowncoffee.com',
        technologies: ['Shopify', 'Vue 3', 'SCSS', 'Liquid'],
        card: {
            summary: 'Complete redesign of product listing and detail pages, implementing accessible filtering, subscription management, and a modular component system for the marketing team.',
            challengeTeaser: 'The existing site had poor accessibility scores and a rigid content system that made updates slow and error-prone.',
            techHighlights: [
                'Built WCAG 2.1 AA compliant filtering system with keyboard navigation',
                'Created modular section-based architecture for marketing flexibility',
                'Implemented subscription management with custom Vue components'
            ]
        },
        full: {
            problem: [
                'Legacy codebase with accessibility scores below 60',
                'Content updates required developer intervention',
                'Subscription flow had high abandonment rates',
                'Mobile experience was inconsistent and slow'
            ],
            challenges: [
                'Maintaining SEO rankings during migration',
                'Training marketing team on new content system',
                'Integrating with existing subscription provider APIs',
                'Meeting aggressive timeline while ensuring quality'
            ],
            whatMadeThisHard: [
                'Complex product variants with subscription options',
                'Need to support legacy URLs for SEO',
                'Multiple stakeholders with competing priorities'
            ],
            whatIBuilt: [
                'Fully accessible product filtering with ARIA live regions',
                'Modular section-based page builder for marketing',
                'Custom subscription management Vue components',
                'Performance-optimized image loading with lazy loading',
                'Comprehensive component documentation'
            ],
            visibleWork: [
                '/images/scr/plp-filters.webp',
                '/images/scr/pdp-sections.webp',
                '/images/scr/pdp-subscription.webp'
            ],
            whatIdDoDifferently: [
                'Start with accessibility testing from day one',
                'Build more comprehensive Storybook documentation',
                'Implement better error tracking from launch'
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
        imageAlt: 'Prefect UI Library components',
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
                'Inconsistent UI patterns across the platform',
                'No standardized component library',
                'Complex data needed accessible visualizations',
                'Poor documentation for existing components'
            ],
            challenges: [
                'Balancing flexibility with consistency',
                'Making D3.js charts accessible',
                'Supporting both light and dark themes',
                'Maintaining backward compatibility'
            ],
            whatIBuilt: [
                'Comprehensive design system with 50+ components',
                'Accessible D3.js scatter plots and timeline charts',
                'Storybook documentation with interactive examples',
                'Theming system supporting light and dark modes',
                'Unit and integration test suite'
            ],
            visibleWork: [
                ['Prefect UI Documentation', 'https://docs.prefect.io'],
                ['Prefect Cloud', 'https://app.prefect.cloud']
            ],
            whatIdDoDifferently: [
                'Establish design tokens earlier in the process',
                'Build more robust accessibility testing into CI'
            ]
        }
    },
    {
        id: 'rare-beauty',
        slug: 'rare-beauty',
        title: 'Rare Beauty',
        tagline: 'Accessibility audit and campaign development for inclusive beauty brand',
        role: 'Frontend Engineer',
        timeline: '2024',
        status: 'Shipped',
        image: '/images/rare-beauty-hero.webp',
        imageAlt: 'Rare Beauty website',
        url: 'https://rarebeauty.com',
        technologies: ['Shopify', 'JavaScript', 'SCSS', 'WCAG 2.1'],
        card: {
            summary: "Accessibility audit and campaign development for Selena Gomez's inclusive beauty brand.",
            challengeTeaser: 'Ensuring the site lived up to the brand\'s inclusive values through comprehensive accessibility improvements.',
            techHighlights: [
                'Conducted full WCAG 2.1 AA accessibility audit',
                'Built accessible product shade selectors',
                'Improved keyboard navigation throughout'
            ]
        },
        full: {
            problem: [
                'Accessibility audit revealed multiple WCAG violations',
                'Color selectors were not keyboard accessible',
                'Screen reader experience was poor',
                'Brand values of inclusivity not reflected in site accessibility'
            ],
            challenges: [
                'Working within existing Shopify theme constraints',
                'Maintaining design aesthetic while improving accessibility',
                'Training team on accessibility best practices'
            ],
            whatIBuilt: [
                'Fully keyboard accessible product shade selectors',
                'Screen reader optimized product information',
                'Accessible modal and overlay components',
                'Focus management throughout checkout flow'
            ],
            whatIdDoDifferently: [
                'Push for accessibility requirements in initial design phase',
                'Implement automated accessibility testing in CI/CD'
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
        image: '/images/portfolio-wip.webp',
        imageAlt: 'Portfolio v3 rainbow color system',
        url: 'https://marichkaoffen.com',
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
            visibleWork: '🚧',
            whatIdDoDifferently: [
                'Start with the color system from the beginning instead of retrofitting it',
                'Build a color palette generator tool to test different rainbow combinations',
                'Document the design tokens earlier in the process',
                'Create more intermediate color stops for even smoother gradients'
            ]
        }
    }
]
