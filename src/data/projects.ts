import type { ProjectData } from "@/types"

const opacityLevel = 0.5

const TAGS = {
    // --- Core Front-End ---
    SemanticHTML: "Semantic HTML",
    ResponsiveLayouts: "Responsive Layouts",
    ComponentArchitecture: "Component Architecture",
    DesignSystems: "Design Systems",
    DesignTokens: "Design Tokens",
    PerformanceOptimization: "Performance Optimization",
    ClientSideRouting: "Client-Side Routing",
    DataVisualization: "Data Visualization",
    CrossBrowserCompatibility: "Cross-Browser Compatibility",
    MotionInteractionDesign: "Motion & Interaction Design",

    // --- E-commerce / Shopify ---
    ShopifyThemeDevelopment: "Shopify Theme Development",
    ShopifyAppIntegrations: "Third-party App Integrations",
    SubscriptionIntegration: "Subscription Integration",
    ABExperimentation: "A/B Experimentation for Storefronts",

    // --- Engineering + Architecture ---
    APIIntegration: "API Integration (REST/GraphQL)",
    AsyncDataFlow: "Fetch / Async Data Flow",
    ScalabilityMaintainability: "Scalability & Maintainability",
    SystematicStyling: "Systematic Styling (Sass/SCSS Modules)",
    BuildTooling: "Build Tooling (Vite/Webpack)",

    // --- Collaboration / Team / Environment ---
    CrossTeamCollaboration: "Cross-Team Collaboration",
    AgileWorkflow: "Agile Workflow",
    DocumentationKnowledgeSharing: "Documentation & Knowledge Sharing",
    StartupEnvironment: "Start-Up Environment",
    CorporateEnvironment: "Corporate Environment",
    NonProfitCollaboration: "Non-Profit Collaboration",
    DesignEngineeringHandoff: "Design–Engineering Handoff",
    MentoringPairProgramming: "Mentoring / Pair Programming",
    CodeReviewStandards: "Code Review & Standards",

    // --- Content & CMS ---
    CMSCustomization: "CMS Customization",
    DynamicContentRendering: "Dynamic Content Rendering",
    Localization: "Localization & Internationalization",
    EmailTemplateDevelopment: "Email Template Development",

    // --- Bugs / Upgrades / Maintenance ---
    BugDiagnosisResolution: "Bug Diagnosis & Resolution",
    LegacyCodeModernization: "Legacy Code Modernization",
    RefactoringForScalability: "Refactoring for Scalability",
    AccessibilityRemediation: "Accessibility Remediation",
    PerformanceRegressionFixing: "Performance Regression Fixing",
}

export const projectData: ProjectData[] = [
    {
        title: "Framebridge",
        slug: "framebridge",
        color: `rgba(238, 219, 113, ${opacityLevel})`,
        tags: [
            TAGS.ResponsiveLayouts, TAGS.ComponentArchitecture, TAGS.CrossBrowserCompatibility, TAGS.MotionInteractionDesign, TAGS.ShopifyThemeDevelopment, TAGS.SystematicStyling, TAGS.DocumentationKnowledgeSharing
        ],
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
        color: `rgba(242, 143, 196, ${opacityLevel})`,
        tags: [
            TAGS.CrossBrowserCompatibility, TAGS.ShopifyThemeDevelopment, TAGS.BugDiagnosisResolution, TAGS.LegacyCodeModernization
        ],
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
        title: "Stumptown Coffee Roasters",
        slug: "stumptown-coffee-roasters",
        color: `rgba(58, 42, 34, ${opacityLevel})`,
        tags: [
            TAGS.ResponsiveLayouts, TAGS.ComponentArchitecture, TAGS.CrossBrowserCompatibility, TAGS.MotionInteractionDesign, TAGS.ShopifyThemeDevelopment, TAGS.SubscriptionIntegration, TAGS.AsyncDataFlow, TAGS.DocumentationKnowledgeSharing
        ],
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
        title: "Prefect Design",
        slug: "prefect-design",
        color: `rgba(11, 22, 25, ${opacityLevel})`,
        tags: [
            TAGS.DesignSystems, TAGS.DesignTokens, TAGS.ScalabilityMaintainability, TAGS.SystematicStyling, TAGS.CrossTeamCollaboration, TAGS.DocumentationKnowledgeSharing, TAGS.StartupEnvironment
        ],
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
        title: "Nova Ukraine",
        slug: "nova-ukraine",
        color: `rgba(50, 71, 167, ${opacityLevel})`,
        tags: [
            TAGS.NonProfitCollaboration, TAGS.CMSCustomization, TAGS.Localization
        ],
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
        title: "Rare Beauty",
        slug: "rare-beauty",
        color: `rgba(161, 60, 99, ${opacityLevel})`,
        tags: [
            TAGS.AccessibilityRemediation, TAGS.SemanticHTML, TAGS.ResponsiveLayouts, TAGS.CrossBrowserCompatibility, TAGS.ShopifyThemeDevelopment, TAGS.ShopifyAppIntegrations, TAGS.DocumentationKnowledgeSharing
        ],
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
        color: `rgba(199, 67, 79, ${opacityLevel})`,
        tags: [
            TAGS.CrossBrowserCompatibility, TAGS.ShopifyThemeDevelopment, TAGS.DocumentationKnowledgeSharing, TAGS.Localization, TAGS.LegacyCodeModernization
        ],
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
        title: "Peet's Coffee",
        slug: "peets-coffee",
        color: `rgba(146, 112, 54, ${opacityLevel})`,
        tags: [
            TAGS.AccessibilityRemediation, TAGS.ResponsiveLayouts, TAGS.ComponentArchitecture, TAGS.CrossBrowserCompatibility, TAGS.MotionInteractionDesign, TAGS.ShopifyThemeDevelopment, TAGS.SubscriptionIntegration, TAGS.SystematicStyling, TAGS.DocumentationKnowledgeSharing, TAGS.RefactoringForScalability
        ],
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

    {
        title: "Prefect UI Library",
        slug: "prefect-ui-library",
        color: `rgba(11, 22, 25, ${opacityLevel})`,
        tags: [
            TAGS.ResponsiveLayouts, TAGS.ComponentArchitecture, TAGS.MotionInteractionDesign, TAGS.ScalabilityMaintainability, TAGS.SystematicStyling, TAGS.BuildTooling, TAGS.CrossTeamCollaboration, TAGS.DocumentationKnowledgeSharing, TAGS.StartupEnvironment, TAGS.StartupEnvironment
        ],
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
        title: "Paper Source",
        slug: "paper-source",
        color: `rgba(0, 150, 162, ${opacityLevel})`,
        tags: [
            TAGS.ComponentArchitecture, TAGS.CrossBrowserCompatibility, TAGS.ShopifyThemeDevelopment, TAGS.ShopifyAppIntegrations, TAGS.DocumentationKnowledgeSharing, TAGS.EmailTemplateDevelopment
        ],
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
        title: "Haus Labs",
        slug: "haus-labs",
        color: `rgba(138, 138, 138, ${opacityLevel})`,
        tags: [
            TAGS.PerformanceOptimization, TAGS.CrossBrowserCompatibility, TAGS.ABExperimentation, TAGS.AsyncDataFlow, TAGS.DocumentationKnowledgeSharing, TAGS.Localization, TAGS.EmailTemplateDevelopment, TAGS.BugDiagnosisResolution
        ],
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
        color: `rgba(26, 26, 26, ${opacityLevel})`,
        tags: [
            TAGS.ResponsiveLayouts, TAGS.ComponentArchitecture, TAGS.CrossBrowserCompatibility, TAGS.ShopifyThemeDevelopment, TAGS.SystematicStyling, TAGS.DocumentationKnowledgeSharing, TAGS.EmailTemplateDevelopment
        ],
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
        title: "Vue Charts",
        slug: "vue-charts",
        color: `rgba(11, 22, 25, ${opacityLevel})`,
        tags: [
            TAGS.ResponsiveLayouts, TAGS.DataVisualization, TAGS.ScalabilityMaintainability, TAGS.DocumentationKnowledgeSharing,
        ],
        icon: "prefect",
        tagline: "Data viz components that make telemetry readable",
        aboutClient:
            "Vue Charts is an internal library of charting primitives used across monitoring dashboards and executive reports.",
        workSummary: [
            "Contributed to reusable Vue components that abstracted D3 into a prop-driven API for common chart types.",
            "Helped to implement accessibility helpers, empty states, and TypeScript types for better developer experience.",
        ],
        role: "Front-End Engineer",
        siteUrl: "https://prefect-vue-charts.netlify.app/scatter-plot",
        year: "2021-2023",
    },
    {
        title: "Psycho Bunny",
        slug: "psycho-bunny",
        color: `rgba(5, 28, 44, ${opacityLevel})`,
        tags: [
            TAGS.PerformanceOptimization, TAGS.CrossBrowserCompatibility, TAGS.ShopifyThemeDevelopment, TAGS.BugDiagnosisResolution, TAGS.LegacyCodeModernization, TAGS.RefactoringForScalability, TAGS.PerformanceRegressionFixing
        ],
        icon: "shirt",
        tagline: "Bold menswear combining classic styles with edgy details",
        aboutClient:
            "Psycho Bunny is a menswear brand known for its signature logo and high-quality polo shirts, with a focus on craftsmanship and unique designs.",
        workSummary: [
            "Supported performance efforts on the Shopify storefront with custom features to improve user experience and streamline the shopping process.",
            "Helped to implement performance optimizations to ensure fast load times and smooth interactions across devices.",
        ],
        role: "Front-End Engineer, Shopify",
        siteUrl: "https://www.psychobunny.com/",
        year: "2024",
    },
    {
        title: "APL",
        slug: "apl",
        color: `rgba(200, 16, 46, ${opacityLevel})`,
        tags: [
            TAGS.AccessibilityRemediation, TAGS.SemanticHTML, TAGS.CrossBrowserCompatibility, TAGS.ShopifyThemeDevelopment
        ],
        icon: "sneakers",
        tagline: "High-performance athletic footwear blending innovation and style",
        aboutClient:
            "APL (Athletic Propulsion Labs) is a premium athletic footwear brand known for its cutting-edge technology and sleek designs, catering to athletes and fitness enthusiasts.",
        workSummary: [
            "Contributed to front-end development for the Shopify storefront, focusing on enhancing product pages and checkout experiences.",
            "Assisted in implementing interactive features and optimizing the site for better performance and user engagement.",
        ],
        role: "Front-End Engineer, Shopify",
        siteUrl: "https://www.apl.com/",
        year: "2024",
    }
]
