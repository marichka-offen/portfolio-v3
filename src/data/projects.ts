import type { ProjectData } from "@/types"

export const projectData: ProjectData[] = [
    {
        title: "Framebridge",
        slug: "framebridge",
        color: "#EEDB71b3",
        tags: ["E-Commerce Development", "Front-End Architecture", "Shopify Integration"],
        icon: "frames",
        tagline: "Modern framing without the gallery markup",
        aboutClient:
            "Framebridge is a direct-to-consumer custom framing brand with a mix of digital ordering, photo uploads, and in-store processes",
        workSummary: [
            "Contributed to the rebuild of Framebridge’s Shopify theme, helping modularize product flows and improve merchandising flexibility.",
            "Supported performance tuning and accessibility updates alongside the engineering team, improving reliability across devices.",
        ],
        role: "Front-End Engineer, Shopify",
        siteUrl: "https://www.framebridge.com/",
        year: "2023",
    },

    {
        title: "Dermaflash",
        slug: "dermaflash",
        color: "#F28FC4b3",
        tags: ["Shopify Customization", "Bug Fixes"],
        icon: "beauty",
        tagline: "Spa-level dermaplaning made effortless at home",
        aboutClient:
            "Dermaflash designs award-winning dermaplaning devices and exfoliating treatments that bring spa-level facial results to at-home routines",
        workSummary: [
            "Assisted in stabilizing a legacy Shopify theme by resolving regressions and replacing brittle scripts with more maintainable components."
        ],
        role: "Shopify Developer",
        year: "2024",
        siteUrl: "https://dermaflash.com/",
    },

    {
        title: "Rare Beauty",
        slug: "rare-beauty",
        color: "#A13C63b3",
        tags: ["Shopify Customization", "Accessibility", "Third-Party Integration"],
        icon: "mirror",
        tagline: "Inclusive beauty with technology that scales global drops",
        aboutClient:
            "Rare Beauty is an international cosmetics brand focused on mental health advocacy and inclusive shade ranges.",
        workSummary: [
            "Collaborated with the internal team to enhance Shopify sections for product education, shade information, and accessibility improvements.",
            "Supported integration work for fulfillment, loyalty, and multi-locale campaigns during global product launches.",
        ],
        role: "Front-End Engineer, Shopify",
        siteUrl: "https://www.rarebeauty.com",
        year: "2024-2025",
    },

    {
        title: "Elizabeth Arden",
        slug: "elizabeth-arden",
        color: "#C7434Fb3",
        tags: ["Shopify Customization", "Globalization", "Bug Fixes"],
        icon: "perfume",
        tagline: "Heritage skincare with a modern commerce layer",
        aboutClient:
            "Elizabeth Arden is a century-old prestige skincare and fragrance company with global customers.",
        workSummary: [
            "Contributed front-end work to support regional bundles and global drops.",
            "Assisted in stabilizing a legacy Shopify theme by resolving regressions and replacing brittle scripts with more maintainable components.",
        ],
        role: "Front-End Engineer",
        siteUrl: "https://www.elizabetharden.com/",
        year: "2024",
    },

    {
        title: "Haus Labs",
        slug: "haus-labs",
        color: "#8A8A8Ab3",
        tags: ["Performance Optimization", "E-Commerce Development", "Globalization", "Dynamic Fetching"],
        icon: "makeup-brush",
        tagline: "Biotech-powered color artistry tuned for every complexion",
        aboutClient:
            "Haus Labs by Lady Gaga develops clean, high-performance makeup infused with skincare actives, distributed through Sephora flagships and global launches.",
        workSummary: [
            "Supported performance efforts on the Shopify storefront by reducing JS payloads, optimizing images, and improving data fetching.",
            "Helped implement schema-driven content blocks for trend stories and educational content.",
        ],
        role: "Front-End Engineer",
        siteUrl: "https://www.hauslabs.com/",
        year: "2024",
    },

    {
        title: "Leatherology",
        slug: "leatherology",
        color: "#1A1A1Ab3",
        tags: ["React + TypeScript", "Component System", "State Management", "Reusable UI Library"],
        icon: "wallet",
        tagline: "Personalized leather goods made easily shoppable",
        aboutClient:
            "Leatherology is a direct-to-consumer accessories brand known for monograms and small-batch leather goods.",
        workSummary: [
            "Contributed to a component library supporting personalization flows such as engraving previews and monogram pickers.",
            "Worked on state management for colorways, pricing logic, and documentation efforts.",
        ],
        role: "Front-End Engineer",
        siteUrl: "https://www.leatherology.com",
        year: "2025",
    },

    {
        title: "Prefect UI Library",
        slug: "prefect-ui-library",
        color: "#0B1619b3",
        tags: ["Vue 3", "TypeScript", "Design System", "Component Documentation"],
        icon: "prefect",
        tagline: "Flexible UI primitives for Prefect’s workflow platform",
        aboutClient:
            "Prefect builds workflow tools for data teams. The UI library supports both their cloud product and open-source community.",
        workSummary: [
            "Helped create Vue 3 + TypeScript components with accessibility and tokenized styling baked in.",
            "Contributed examples, documentation, and visual regression tests to support consistent contributions from the internal team and OSS community.",
        ],
        role: "Design Systems Engineer",
        year: "2021-2023",
    },

    {
        title: "Prefect Design",
        slug: "prefect-design",
        color: "#0B1619b3",
        tags: ["Design System", "UI Standards", "Brand Consistency", "Component Exploration"],
        icon: "prefect",
        tagline: "A shared design system for data reliability tools",
        aboutClient:
            "Prefect’s brand spans docs, dashboards, events, and community resources, requiring visual cohesion.",
        workSummary: [
            "Supported creation of shared design tokens and usage guidelines that could be referenced in Figma and code.",
            "Participated in cross-team workshops to define contribution rules and maintain brand consistency across artifacts.",
        ],
        role: "Design System Contributor",
        siteUrl: "https://prefect-design.netlify.app/",
        year: "2021-2023",
    },

    {
        title: "Vue Charts",
        slug: "vue-charts",
        color: "#0B1619b3",
        tags: ["Data Visualization", "Vue 3", "Reusable Components", "TypeScript"],
        icon: "prefect",
        tagline: "Data viz components that make telemetry readable",
        aboutClient:
            "Vue Charts is an internal library of charting primitives used across monitoring dashboards and executive reports.",
        workSummary: [
            "Contributed to reusable Vue components that abstracted D3 into a prop-driven API for common chart types.",
            "Helped implement accessibility helpers, empty states, and TypeScript types for better developer experience.",
        ],
        role: "Front-End Engineer",
        siteUrl: "https://prefect-vue-charts.netlify.app/scatter-plot",
        year: "2021-2023",
    },

    {
        title: "Paper Source",
        slug: "paper-source",
        color: "#0096A2b3",
        tags: ["E-Commerce", "Shopify Theme", "Front-End Development", "Accessibility"],
        icon: "stationary",
        tagline: "Seasonal paper goods and gifts curated for creative celebrations",
        aboutClient:
            "Paper Source is a specialty paper and gifting retailer with boutiques across the U.S., known for DIY workshops, wedding suites, and holiday launches.",
        workSummary: [
            "Contributed to the theme refresh with flexible landing-page sections, discovery tools, and accessibility improvements.",
            "Built reusable components aligned with their merchandising calendar so seasonal promos could be updated without a deployment.",
        ],
        role: "Shopify Front-End Developer",
        siteUrl: "https://www.papersource.com",
        year: "2025",
    },

    {
        title: "Nova Ukraine",
        slug: "nova-ukraine",
        color: "#3247A7b3",
        tags: ["Nonprofit Site", "CMS Customization", "WordPress Development"],
        icon: "nova",
        tagline: "Real-time relief updates connecting global donors to Ukrainian families.",
        aboutClient:
            "Nova Ukraine is a volunteer-led nonprofit funding evacuations, medical aid, and refugee support while sharing verified field reports with the diaspora community.",
        workSummary: [
            "Volunteer as part of the Web team, working on the CMS to highlight emergency updates and bilingual content.",
            "Put together custom websites to support fundraising campaigns, humanitarian projects, and event promotions.",
        ],
        role: "Volunteer Front-End Developer",
        siteUrl: "https://www.novaukraine.org",
        year: "2025",
    },

    {
        title: "Stumptown Coffee Roasters",
        slug: "stumptown-coffee-roasters",
        color: "#3A2A22b3",
        tags: ["Dynamic Fetching", "Vue 3", "Custom Storefront", "Interactive UI", "Shopify Integration"],
        icon: "coffee-bag",
        tagline: "Single-origin coffee stories brewed with fast, cinematic storefronts",
        aboutClient:
            "Stumptown Coffee Roasters sources, roasts, and serves seasonal single-origin beans alongside cult-favorite cold brew, pairing each release with education around farmers and tasting notes.",
        workSummary: [
            "Contributed to front-end development for a Vue-powered storefront that fetched tasting notes and product details in real time.",
            "Helped build interactive cards, brew guides, and add-to-cart flows with keyboard support.",
        ],
        role: "Front-End Engineer",
        siteUrl: "https://www.stumptowncoffee.com",
        year: "2024-2025",
    },

    {
        title: "Peet's Coffee",
        slug: "peets-coffee",
        color: "#744f28b3",
        tags: ["Accessibility", "Dynamic Fetching", "Shopify Integration", "Vue 3"],
        icon: "coffee-cup",
        tagline: "Heritage-roasted coffee served through omnichannel subscriptions and café drops",
        aboutClient:
            "Peet’s Coffee runs flagship cafés, grocery distribution, and a direct-to-consumer subscription business, releasing limited roasts and cold brew collaborations year-round.",
        workSummary: [
            "Contributed accessibility updates, real-time product messaging, and subscription builder enhancements within their Shopify setup.",
            "Helped support personalized recommendations and bundle experiments driven by CRM data.",
        ],
        role: "Front-End Engineer",
        siteUrl: "https://www.peets.com",
        year: "2024-2025",
    },
]
