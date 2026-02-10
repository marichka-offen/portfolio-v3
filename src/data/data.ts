import type { FeaturedCard, MoreWork, TimelineItem } from "@/types/types"

export const brandLogos = [
    { src: '/logos/bn.svg', alt: 'Barnes & Noble' },
    { src: '/logos/filson.svg', alt: 'Filson' },
    { src: '/logos/glossier.svg', alt: 'Glossier' },
    { src: '/logos/shinola.svg', alt: 'Shinola' },
    { src: '/logos/moma.svg', alt: 'MoMA' },
    { src: '/logos/baublebar.svg', alt: 'BaubleBar' },
    { src: '/logos/birdies.svg', alt: 'Birdies' },
    { src: '/logos/indigo.svg', alt: 'Indigo' },
]

export const featuredWork: FeaturedCard[] = [
    {
        id: 'stumptown',
        title: 'Stumptown Coffee Roasters',
        description:
            'Complete redesign of product listing and detail pages, implementing accessible filtering, subscription management, and a modular component system for the marketing team.',
        tags: ['Shopify', 'Vue 3', 'E-commerce'],
        link: '/case-studies/stumptown',
        size: 'large',
        image: '/images/feat-s4.webp',
    },
    {
        id: 'prefect',
        title: 'Prefect UI Library',
        description: 'Design system and data visualization components for workflow orchestration platform.',
        tags: ['TypeScript', 'D3.js'],
        link: '/case-studies/prefect',
        size: 'medium',
        image: '/images/feat-p2.webp',
    },
    {
        id: 'portfolio-v3',
        title: 'Portfolio v3',
        description: 'A modern portfolio featuring a sophisticated 7-color pastel rainbow system with holographic gradient borders, animated shimmers, and full accessibility compliance.',
        tags: ['React', 'Design System', 'SCSS'],
        link: '/case-studies/portfolio-v3',
        size: 'medium',
        gradient: 'linear-gradient(135deg, #FF85C0 0%, #FF9980 20%, #FFC947 40%, #5DD6A5 60%, #66B8FF 70%, #A380FF 85%, #D966FF 100%)',
    },
]

export const moreWork: MoreWork[] = [
    {
        id: 'framebridge',
        title: 'Framebridge',
        role: 'Full Shopify Storefront Build',
        teaser: 'Complete rebuild of custom framing e-commerce experience.',
        story: "Supported the full rebuild of Framebridge's Shopify storefront. Worked closely with designs to translate Figma files into reusable, animated sections for product, collection, and marketing pages while learning Shopify's ecosystem on the job.",
        icon: '🖼️',
        iconTone: 'coral',
        tags: ['Shopify', 'JavaScript', 'Liquid', 'SCSS', 'Vue'],
        link: 'https://framebridge.com',
    },
    {
        id: 'nova-ukraine',
        title: 'Nova Ukraine',
        role: 'Nonprofit Development',
        teaser: 'Volunteer web development for humanitarian aid organization.',
        story: 'Contributing to the web presence of Nova Ukraine, a nonprofit delivering humanitarian aid. Building accessible, performant features to help connect donors with those in need.',
        icon: '🇺🇦',
        iconTone: 'sky',
        tags: ['React', 'TypeScript', 'Volunteer'],
        link: 'https://novaukraine.org',
    },
    {
        id: 'paper-source',
        title: 'Paper Source',
        role: 'Platform Migration',
        teaser: 'Complex e-commerce migration with custom integrations.',
        story: "Led frontend development for Paper Source's platform migration to Shopify Plus, building custom product configurators and maintaining brand consistency across hundreds of SKUs.",
        icon: '📝',
        iconTone: 'peach',
        tags: ['Shopify Plus', 'Liquid', 'Integration'],
        link: 'https://papersource.com',
    },
    {
        id: 'haus-labs',
        title: 'Haus Labs',
        role: 'Performance Optimization',
        teaser: 'Speed improvements for clean beauty brand.',
        story: 'Optimized Core Web Vitals and implemented lazy loading strategies to improve page speed scores. Reduced LCP by 40% through image optimization and critical CSS extraction.',
        icon: '💄',
        iconTone: 'lavender',
        tags: ['Shopify', 'Performance', 'Core Web Vitals'],
        link: 'https://hauslabs.com',
    },
    {
        id: 'peets',
        title: "Peet's Coffee",
        role: 'Accessible Navigation',
        teaser: 'WCAG-compliant navigation system for coffee retailer.',
        story: 'Rebuilt the main navigation to be fully keyboard accessible and screen reader friendly. Implemented focus management, ARIA live regions, and proper heading hierarchy throughout.',
        icon: '☕',
        iconTone: 'mint',
        tags: ['Accessibility', 'WCAG 2.1', 'ARIA'],
        link: 'https://peets.com',
    },
    {
        id: 'rare-beauty',
        title: 'Rare Beauty',
        role: 'Accessibility & Campaigns',
        teaser: 'Inclusive beauty brand with a mission.',
        story: "Led accessibility audits and campaign development for Rare Beauty. Ensured WCAG 2.1 AA compliance across the storefront while building engaging seasonal campaigns that maintained the brand's focus on mental health and inclusivity.",
        icon: '💄',
        iconTone: 'lavender',
        tags: ['Accessibility', 'WCAG 2.1', 'Shopify'],
        link: 'https://rarebeauty.com',
    },
]

export const skills = [
    {
        title: 'Accessibility First',
        description: 'Every project starts with semantic HTML and WCAG 2.1 AA compliance. I build experiences that work for everyone.',
        icon: '🎯',
    },
    {
        title: 'Performance Obsessed',
        description: 'Core Web Vitals, lazy loading, code splitting. I optimize relentlessly for speed and user experience.',
        icon: '⚡',
    },
    {
        title: 'Design Systems',
        description: 'Component libraries that scale. From token architecture to documentation, I build systems that last.',
        icon: '🧩',
    },
]

export const timeline: TimelineItem[] = [
    {
        id: 'nova',
        date: '2025 - Present',
        title: 'Web Team Volunteer',
        company: 'Nova Ukraine',
        description: 'Contributing code to help humanitarian efforts. Because some things are more important than a paycheck.',
        highlight: true,
    },
    {
        id: 'sdg',
        date: '2023 - 2025',
        title: 'Front-End Engineer',
        company: 'SDG (Shopify Plus Agency)',
        subtitle: 'Shipping pixels for premium brands',
        description:
            'Built storefronts for brands like Rare Beauty, Stumptown, and Barnes & Noble. Became the go-to person for "make it accessible" and "why is this slow." Learned that Liquid is weird but lovable.',
        tags: ['Shopify', 'Vue', 'Accessibility'],
    },
    {
        id: 'prefect',
        date: '2021 - 2023',
        title: 'Front-End Engineer',
        company: 'Prefect',
        subtitle: 'Making data pipelines pretty',
        description:
            "Built a design system from scratch, wrangled D3.js into making scatter plots that didn't look like sadness, and learned that data engineers really care about their DAGs.",
        tags: ['TypeScript', 'D3.js', 'Design Systems'],
    },
    {
        id: 'carahsoft',
        date: '2020 - 2021',
        title: 'Software Engineer',
        company: 'Carahsoft',
        subtitle: 'Government tech, surprisingly cool',
        description:
            "Built internal tools and learned that enterprise software doesn't have to be ugly. Also discovered that government clients really, really care about Section 508 compliance.",
        tags: ['React', 'Node.js', '508 Compliance'],
    },
    {
        id: 'freelance',
        date: '2019',
        title: 'Freelance Nomad',
        company: 'Self-Employed',
        subtitle: 'Learned to do everything and talk to humans',
        description:
            'Freelancing was my crash course in "do everything." I coded small sites, talked directly with clients, translated their aesthetic preferences into actual UI, and wrote docs so they could maintain things after I handed it off. It pushed me to develop my own taste, my own workflow, and honestly a lot of my independence as an engineer.',
    },
    {
        id: 'ga',
        date: '2018',
        title: 'Web Padawan',
        company: 'General Assembly',
        subtitle: 'Where it all began',
        description:
            "12 weeks of pure chaos and caffeine. Learned that console.log is your best friend and that imposter syndrome never really goes away—you just get better at ignoring it.",
    },
]

export const testimonials = [
    {
        id: 'scott',
        quote: "She consistently delivered clean, well-structured work, and her attention to detail made my job as a reviewer easy. She's the kind of teammate who raises the bar simply by being on the project.",
        name: 'Scott Abe',
        title: 'Senior Front-End Engineer',
        context: 'Worked together at SDG',
    },
    {
        id: 'rick',
        quote: "Her ability to diagnose and resolve complex production issues—often involving a mix of Liquid, JavaScript, and SCSS—made her our go-to 'detective' whenever something puzzling surfaced.",
        name: 'Rick Wharton',
        title: 'Full Stack Developer',
        context: 'Worked together at SDG',
    },
    {
        id: 'maria',
        quote: "Her interest in web accessibility makes her an asset to any company. Working with her was such a delight! Her presence on the team made my day easier.",
        name: 'Maria Shaffer',
        title: 'Front End Engineer',
        context: 'Worked together at SDG',
    },
    {
        id: 'devin',
        quote: "She consistently demonstrated commitment and knowledge of her craft, strong attention to detail, reliability, and excellent communication skills. She is an outstanding colleague and an absolute treasure to work with.",
        name: 'Devin Rhodriquez',
        title: 'Digital Project Manager',
        context: 'Worked together at SDG',
    },
    {
        id: 'anna',
        quote: "Her ability to complete tasks two to three times faster than expected without compromising quality is a testament to her commitment and work ethic.",
        name: 'Anna Geller',
        title: 'Product Lead',
        context: 'Worked together at Prefect',
    },
    {
        id: 'nicholas',
        quote: "Her strong attention to detail and impressive work ethic are two of her greatest strengths. She consistently demonstrated exceptional proficiency in Vue3, JavaScript, CSS, and D3.js.",
        name: 'Nicholas Brown',
        title: 'Product Engineering & Design',
        context: 'Worked together at Prefect',
    },
    {
        id: 'jeff',
        quote: "A student found a bug in the UI. Marichka was able to fix the bug and ship the code the same day. I highly recommend Marichka if you need a strong front-end developer.",
        name: 'Jeff Hale',
        title: 'Chief Operating Officer',
        context: 'Worked together at Prefect',
    },
    {
        id: 'nicola',
        quote: "Marichka is a problem solver at heart, and it doesn't matter how difficult or how tall the mountain is, no problem is insurmountable for Marichka.",
        name: 'Nicola Riker',
        title: 'Senior Full Stack Engineer',
        context: 'Worked together at Prefect',
    },
    {
        id: 'brandon',
        quote: "Marichka is a laser focussed frontend developer who takes deadlines seriously and moves mountains to hit them. She has great empathy for the end user and a solid intuition when it comes to filling in design gaps.",
        name: 'Brandon Reid',
        title: 'Senior Engineer',
        context: 'Worked together at Prefect',
    },
    {
        id: 'paige',
        quote: "She is very personable and collaborative, something that isn't always a strong point in the IT industry. She puts her heart and passion into anything that is thrown her way.",
        name: 'Paige Thomas',
        title: 'UX/UI Professional',
        context: 'Worked together at Carahsoft',
    },
]

export const builtWithStats = [
    'WCAG AA (7.1:1 contrast)',
    'Fully keyboard navigable',
    'Custom Web Audio API',
]

export const builtWithTech = ['React 19', 'TypeScript', 'Vite']