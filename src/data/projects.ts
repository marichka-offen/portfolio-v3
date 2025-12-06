import type ProjectCardData from '@/types/project'

// Lightweight projects for grid display
export const additionalProjects = [
    {
        id: "nova-ukraine",
        title: "Nova Ukraine",
        slug: "nova-ukraine",
        tagline: "Nonprofit Development & PM",
        role: "Volunteer Developer & Project Manager",
        timeline: "January 2025 – Present",
        technologies: ["WordPress", "Figma", "Wix", "Asana"],
        status: "Ongoing",
        url: "https://www.novaukraine.org",
        categories: ["Nonprofit", "Project Management", "Content Strategy"],
        summary: "Contributing as a volunteer developer and PM on web initiatives supporting humanitarian relief in Ukraine. I’ve helped build an internal portal, collaborate with volunteer designers, and lead a content audit and ongoing site redesign.",
        imageType: "logo",
        imagePlaceholder: "NU",
        highlight: true
    },
    {
        id: "framebridge",
        title: "Framebridge",
        slug: "framebridge",
        tagline: "Full Shopify Storefront Build",
        role: "Front-End Engineer, Shopify",
        timeline: "2023 (3 months + maintenance)",
        technologies: ["Shopify", "JavaScript", "Liquid", "SCSS", "Vue", "Figma"],
        status: "Live",
        url: "https://www.framebridge.com/",
        categories: ["E-Commerce", "Shopify Development"],
        summary: "Supported the full rebuild of Framebridge’s Shopify storefront. Worked closely with designs to translate Figma files into reusable, animated sections for product, collection, and marketing pages while learning Shopify’s ecosystem on the job.",
        imageType: "logo",
        imagePlaceholder: "FB"
    },
    {
        id: "rare-beauty",
        title: "Rare Beauty",
        slug: "rare-beauty",
        tagline: "Accessibility & Campaign Development",
        role: "Front-End Engineer, Shopify",
        timeline: "2024-2025 (3 accessibility sprints)",
        technologies: ["Shopify", "WCAG", "Liquid", "SCSS", "JavaScript", "Sketch"],
        status: "Live",
        url: "https://www.rarebeauty.com",
        categories: ["E-Commerce", "Accessibility", "Campaign Development"],
        summary: "Collaborated on accessibility improvements and campaign development. I handled fixes for keyboard navigation, contrast, and screen reader support, and helped the broader team bring the site to WCAG AA compliance while building several launch landing pages.",
        imageType: "logo",
        imagePlaceholder: "RB"
    },
    {
        id: "paper-source",
        title: "Paper Source",
        slug: "paper-source",
        tagline: "Platform Migration & Integration",
        role: "Shopify Front-End Developer",
        timeline: "2025 (~6 months)",
        technologies: ["Shopify", "Swym", "JavaScript", "Liquid", "SCSS"],
        status: "Live",
        url: "https://www.papersource.com",
        categories: ["E-Commerce", "Platform Migration", "Third-Party Integration"],
        summary: "Contributed to the migration from their legacy platform to Shopify. Recreated key storefront functionality, integrated the Swym wishlist, and delivered flexible seasonal sections that supported the merchandising team’s fast-changing needs.",
        imageType: "logo",
        imagePlaceholder: "PS"
    },
    {
        id: "haus-labs",
        title: "Haus Labs",
        slug: "haus-labs",
        tagline: "Performance Optimization",
        role: "Front-End Engineer",
        timeline: "2024 (ongoing)",
        technologies: ["Shopify API", "JavaScript", "Shopify", "Liquid", "SCSS"],
        status: "Live",
        url: "https://www.hauslabs.com/",
        categories: ["Performance Optimization", "E-Commerce"],
        summary: "Worked on performance improvements and feature enhancements for product pages. I optimized variant-loading logic and collaborated with the team on cross-sell components and A/B testing templates.",
        imageType: "logo",
        imagePlaceholder: "HL"
    },
    {
        id: "peets-coffee",
        title: "Peet's Coffee",
        slug: "peets-coffee",
        tagline: "Accessible Navigation System",
        role: "Front-End Engineer",
        timeline: "2024-2025 (~1 week + fixes)",
        technologies: ["Shopify Admin", "JavaScript", "Shopify", "Liquid", "SCSS", "Figma"],
        status: "Live",
        url: "https://www.peets.com",
        categories: ["Accessibility", "Navigation Systems", "E-Commerce"],
        summary: "Helped rebuild Peet’s navigation system into an accessible, editor-friendly mega menu. Implemented keyboard and screen reader support, integrated search, and configured metafields so their team could manage content without touching code.",
        imageType: "logo",
        imagePlaceholder: "PC"
    },
]

export const featuredProjects: ProjectCardData[] = [
    {
        "id": "stumptown",
        "title": "Stumptown Coffee Roasters",
        "slug": "stumptown-coffee-roasters",
        "tagline": "Shopify PLP & PDP Redesign",
        "role": "Front-End Engineer (contract via SDG)",
        "timeline": "2024–2025 (~80 hours for PLP redesign + additional PDP/footer/blog work)",
        "technologies": [
            "Vue 3",
            "Vanilla JS",
            "Liquid",
            "SCSS",
            "Shopify APIs",
            "Shopify Search & Discovery"
        ],
        "status": "Live",
        "url": "https://www.stumptowncoffee.com",
        "image": "/images/feat-s4.png",
        "imageAlt": "Screenshot of Stumptown Coffee Roasters product listing page",

        "card": {
            "summary": "Stumptown was migrating off Contentful and replacing Searchspring with Shopify’s native filters. I rebuilt their PLP, PDP, and footer, then handled the hardest part: syncing multi-layered gift subscription pricing across Vue components without breaking existing logic.",
            "challengeTeaser": "Integrated native Shopify filtering into an existing Vue app while syncing complex subscription pricing across multiple UI components.",
            "techHighlights": [
                "Shopify Search & Discovery",
                "Vue state syncing",
                "Multi-variant subscription pricing logic"
            ]
        },

        "full": {
            "problem": [
                "Stumptown was redesigning their entire storefront in Figma and migrating away from Contentful.",
                "The existing Vue product listing page was wired to Searchspring, which they were discontinuing.",
                "They wanted a redesigned PLP, PDP, footer, and blog that matched the new visual direction.",
                "They needed to migrate structured content into Shopify in a way that non-technical users could maintain."
            ],
            "challenges": [
                "Learning Shopify’s native filtering system quickly and integrating it into an existing Vue app.",
                "Replacing a Searchspring-based PLP with Shopify’s native Search & Discovery filtering.",
                "Syncing product state across main info, add-to-cart button, and sticky bar — especially for gift subscriptions.",
                "Handling multi-layered pricing logic: bags per month × number of months × bundle selection.",
                "Working around incorrectly configured OrderGroove subscription settings.",
                "Migrating Contentful → Shopify using metaobjects so non-technical editors could maintain it.",
                "Negotiating feasibility around design constraints (e.g., replacing a custom calendar with native UI).",
                "Coordinating with another developer working on the search page."
            ],
            "whatMadeThisHard": [
                "Shopify’s native filtering works entirely differently from Searchspring’s API, requiring fast documentation parsing and reverse engineering.",
                "Gift subscription pricing involved multiple nested configuration states that all had to stay visually and logically in sync.",
                "Session storage was required to persist selections across reloads during troubleshooting.",
                "Content migration required designing user-friendly metaobjects instead of dumping a JSON blob.",
                "Client expectations and backend constraints required careful documentation and communication."
            ],
            "whatIBuilt": [
                "Redesigned product listing page with Shopify-native filtering and sorting.",
                "Rebuilt product detail page with synced pricing, variant states, and sticky add-to-cart behavior.",
                "Extended PDP template for multi-variant gift subscriptions.",
                "Refactored the existing Vue app into cleaner, more maintainable components.",
                "Designed a metaobject-based content architecture to replace Contentful fields.",
                "Redesigned footer and blog templates to match new brand direction."
            ],
            "whatIdDoDifferently": [
                "Structure Vue components and file organization more intentionally from the start.",
                "Allocate more time for testing edge cases around subscription pricing logic.",
                "Push for clearer design constraints earlier to avoid rework.",
                "Consolidate repetitive styling into shared classes or mixins."
            ],
            "visibleWork": [
                "/images/scr/plp-filters.png",
                "/images/scr/pdp-subscription.png",
                "/images/scr/pdp-sections.png",
                "/images/scr/footer.png"
            ]
        }
    },
    {
        "id": "prefect",
        "title": "Prefect — UI Library, Design System, and Data Visualization",
        "slug": "prefect-ui-library",
        "tagline": "Design System, Component Library & Data Visualization",
        "role": "Front-End Engineer",
        "timeline": "November 2021 – March 2023",
        "technologies": [
            "TypeScript",
            "D3.js",
            "Tailwind CSS",
            "Vue 3 (Composition API)",
            "Vite"
        ],
        "status": "Live & Open Source",
        "url": "https://github.com/PrefectHQ",
        "image": "/images/feat-p2.png",
        "imageAlt": "Screenshot of Prefect UI Library homepage",

        "card": {
            "summary": "Prefect was rebuilding their entire workflow orchestration platform from scratch and needed a frontend to match. I helped building the UI library, design system, and data visualization components, including a D3-powered scatter plot with no Figma files, just sketches and 'make it work.' Shipped it all while the product requirements kept shifting.",
            "challengeTeaser": "Created a D3-powered scatter plot with no designs and built the new Prefect Design System under tight deadlines and shifting requirements.",
            "techHighlights": [
                "Vue 3 Composition API",
                "D3-based data visualization",
                "Component library architecture"
            ]
        },

        "full": {
            "problem": [
                "Prefect was building version 2.0 of their workflow orchestration platform — a complete rebuild.",
                "They were simultaneously creating Prefect Cloud, the hosted team-based version.",
                "The old design system was discarded months before launch, requiring a brand-new token system and component library.",
                "Both core products needed a frontend built from the ground up with no existing UI library to rely on."
            ],

            "challenges": [
                "Building a D3-powered scatter plot with no Figma designs — only sketches and reference screenshots.",
                "Learning D3.js from scratch while designing a data-agnostic charting component.",
                "Creating a new design system (Prefect Design) after the old one was abandoned mid-project.",
                "Building Prefect UI Library while also building product features — both depending on each other.",
                "Designing and implementing TypeScript interfaces across the entire codebase.",
                "Adapting to shifting priorities and feature requirements in a fast-paced startup environment."
            ],

            "whatMadeThisHard": [
                "No design files for early data visualization components — only rough sketches.",
                "The scatter plot needed to handle any dataset, not just Prefect’s workflow data.",
                "The design system and UI library were being invented while features were actively being implemented.",
                "TypeScript interfaces required full custom definitions, with no legacy patterns to follow.",
                "Startup unpredictability meant continuous iteration and mid-sprint changes."
            ],

            "whatIBuilt": [
                "A D3-powered scatter plot component in Vue Charts to visualize workflow timing and status.",
                "Toast notification system — designed collaboratively, implemented independently.",
                "Layout primitives and UI components for the new Prefect UI Library.",
                "TypeScript types and interfaces for props, components, and API data.",
                "Onboarding guide for new engineers covering setup, test flows, mock data, and conceptual understanding.",
                "Early component architecture and coding patterns used by the team moving forward."
            ],

            "whatIdDoDifferently": [
                "Nothing major — this project primarily taught scalable system thinking rather than exposing structural mistakes."
            ],

            "visibleWork": [
                ["Prefect UI Library", "https://prefect-ui-library.netlify.app/"],
                ["Prefect Design", "https://prefect-design.netlify.app/"],
                ["Prefect Vue Charts Scatter Plot", "https://prefect-vue-charts.netlify.app/scatter-plot"],
                ["Prefect GitHub", "https://github.com/PrefectHQ"]
            ]
        }
    }
]