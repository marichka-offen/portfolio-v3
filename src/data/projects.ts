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
        summary: "Volunteering as web developer and PM for a nonprofit supporting humanitarian relief during the Ukraine war. Built an employee portal and collaborative project site, now leading a content audit and site redesign while coordinating with volunteer designers.",
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
        summary: "My first Shopify project: Framebridge needed a complete new storefront built from Figma designs. I learned Shopify while building reusable, animated sections for product pages, collections, and marketing content—shipped a full site launch while figuring out the platform in real-time.",
        imageType: "logo", // Suggestion: Use Framebridge logo or branded icon
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
        summary: "Rare Beauty's site had 47 accessibility violations blocking certification. I fixed every one—keyboard navigation, color contrast, screen reader support—while also building campaign landing pages for product launches. Zero violations, WCAG Level AA certified.",
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
        summary: "Paper Source was moving off their legacy platform to Shopify. I migrated and recreated their functionality, integrated and styled the Swym wishlist, and built flexible sections that could handle their constantly-changing seasonal merchandising calendar.",
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
        summary: "Haus Labs' product pages were loading 51 color variants simultaneously and choking. I fixed the shade-loading logic, improved Lighthouse performance scores from 45 to 92, and built cross-sell carousels and A/B testing templates while I was in there.",
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
        summary: "Peet's Coffee needed a navigation system that non-technical team members could actually update. I rebuilt their nav with an accessible mega menu and integrated search, then configured Shopify metafields so editors could manage it without touching code. Full keyboard and screen reader support.",
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
            "summary": "Stumptown was migrating their entire storefront away from Contentful and ditching Searchspring for Shopify's native filtering. I rebuilt their product listing page, product detail page, and footer — then tackled the tricky part: syncing multi-layered gift subscription pricing across components without breaking anything.",
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
            "summary": "Prefect was rebuilding their entire workflow orchestration platform from scratch and needed a frontend to match. I helped build the UI library, design system, and data visualization components — including a D3-powered scatter plot with no Figma files, just sketches and 'make it work.' Shipped it all while the product requirements kept shifting.",
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
                "https://prefect-ui-library.netlify.app/",
                "https://prefect-design.netlify.app/",
                "https://prefect-vue-charts.netlify.app/scatter-plot",
                "https://github.com/PrefectHQ"
            ]
        }
    }
]