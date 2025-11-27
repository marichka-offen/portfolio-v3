import type { Project } from '@/types/project'

// Example project with all fields:
export const projects: Project[] = [
    {
        id: '1',
        name: 'E-Commerce Platform-1',
        slug: 'ecommerce-platform-1',
        summary: 'Full-featured online shopping platform with cart, checkout, and admin dashboard',
        featured: true,
        categories: ['Web App', 'E-Commerce'],
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
        role: 'Full-Stack Developer',
        timeline: '3 months',
        status: 'Live',
        problem: {
            context: 'A local business needed to transition from in-person sales to online due to changing customer preferences and pandemic restrictions.',
            challenge: 'Building a secure payment system while maintaining an intuitive user experience',
            constraints: ['Limited budget', 'Tight deadline', 'PCI compliance required']
        },
        approach: [
            {
                decision: 'Used React with TypeScript for type safety',
                rationale: 'TypeScript catches errors at compile time, reducing bugs in production and improving developer experience with better autocomplete'
            },
            {
                decision: 'Implemented server-side rendering with Next.js',
                rationale: 'Improved SEO for product pages and initial page load performance, critical for conversion rates'
            },
            {
                decision: 'Chose Stripe for payment processing',
                rationale: 'Handles PCI compliance, provides excellent documentation, and offers a smooth checkout experience'
            }
        ],
        implementation: [
            'Built reusable cart system with optimistic updates for instant feedback',
            'Implemented inventory management with real-time stock checking',
            'Created admin dashboard with analytics and order management',
            'Integrated Stripe webhooks for reliable payment confirmation',
            'Optimized images with Next.js Image component for 40% faster page loads'
        ],
        outcomes: {
            metrics: ['$50K+ revenue in first 3 months', '500+ orders processed', '4.8★ customer rating'],
            learnings: [
                'Real-time inventory sync is critical—learned to handle race conditions properly',
                'Checkout flow optimization has huge impact—reduced to 3 steps increased conversions by 25%',
                'Error messaging matters—clear payment error messages reduced support tickets by 60%'
            ]
        },
        demoUrl: 'https://demo-ecommerce.example.com',
        repoUrl: 'https://github.com/yourusername/ecommerce-platform',
        isPrivate: false,
        technologiesByCategory: [
            {
                category: 'Frontend',
                items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
            },
            {
                category: 'Backend',
                items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma']
            },
            {
                category: 'Tools & Services',
                items: ['Stripe', 'Vercel', 'GitHub Actions', 'Sentry']
            }
        ]
    },
    {
        id: '2',
        name: 'E-Commerce Platform-2',
        slug: 'ecommerce-platform-2',
        summary: 'Full-featured online shopping platform with cart, checkout, and admin dashboard',
        featured: true,
        categories: ['Web App', 'E-Commerce'],
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
        role: 'Full-Stack Developer',
        timeline: '3 months',
        status: 'Live',
        problem: {
            context: 'A local business needed to transition from in-person sales to online due to changing customer preferences and pandemic restrictions.',
            challenge: 'Building a secure payment system while maintaining an intuitive user experience',
            constraints: ['Limited budget', 'Tight deadline', 'PCI compliance required']
        },
        approach: [
            {
                decision: 'Used React with TypeScript for type safety',
                rationale: 'TypeScript catches errors at compile time, reducing bugs in production and improving developer experience with better autocomplete'
            },
            {
                decision: 'Implemented server-side rendering with Next.js',
                rationale: 'Improved SEO for product pages and initial page load performance, critical for conversion rates'
            },
            {
                decision: 'Chose Stripe for payment processing',
                rationale: 'Handles PCI compliance, provides excellent documentation, and offers a smooth checkout experience'
            }
        ],
        implementation: [
            'Built reusable cart system with optimistic updates for instant feedback',
            'Implemented inventory management with real-time stock checking',
            'Created admin dashboard with analytics and order management',
            'Integrated Stripe webhooks for reliable payment confirmation',
            'Optimized images with Next.js Image component for 40% faster page loads'
        ],
        outcomes: {
            metrics: ['$50K+ revenue in first 3 months', '500+ orders processed', '4.8★ customer rating'],
            learnings: [
                'Real-time inventory sync is critical—learned to handle race conditions properly',
                'Checkout flow optimization has huge impact—reduced to 3 steps increased conversions by 25%',
                'Error messaging matters—clear payment error messages reduced support tickets by 60%'
            ]
        },
        demoUrl: 'https://demo-ecommerce.example.com',
        repoUrl: 'https://github.com/yourusername/ecommerce-platform',
        isPrivate: false,
        technologiesByCategory: [
            {
                category: 'Frontend',
                items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
            },
            {
                category: 'Backend',
                items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma']
            },
            {
                category: 'Tools & Services',
                items: ['Stripe', 'Vercel', 'GitHub Actions', 'Sentry']
            }
        ]
    },
    {
        id: '3',
        name: 'E-Commerce Platform-3',
        slug: 'ecommerce-platform-3',
        summary: 'Full-featured online shopping platform with cart, checkout, and admin dashboard',
        featured: true,
        categories: ['Web App', 'E-Commerce'],
        technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
        role: 'Full-Stack Developer',
        timeline: '3 months',
        status: 'Live',
        problem: {
            context: 'A local business needed to transition from in-person sales to online due to changing customer preferences and pandemic restrictions.',
            challenge: 'Building a secure payment system while maintaining an intuitive user experience',
            constraints: ['Limited budget', 'Tight deadline', 'PCI compliance required']
        },
        approach: [
            {
                decision: 'Used React with TypeScript for type safety',
                rationale: 'TypeScript catches errors at compile time, reducing bugs in production and improving developer experience with better autocomplete'
            },
            {
                decision: 'Implemented server-side rendering with Next.js',
                rationale: 'Improved SEO for product pages and initial page load performance, critical for conversion rates'
            },
            {
                decision: 'Chose Stripe for payment processing',
                rationale: 'Handles PCI compliance, provides excellent documentation, and offers a smooth checkout experience'
            }
        ],
        implementation: [
            'Built reusable cart system with optimistic updates for instant feedback',
            'Implemented inventory management with real-time stock checking',
            'Created admin dashboard with analytics and order management',
            'Integrated Stripe webhooks for reliable payment confirmation',
            'Optimized images with Next.js Image component for 40% faster page loads'
        ],
        outcomes: {
            metrics: ['$50K+ revenue in first 3 months', '500+ orders processed', '4.8★ customer rating'],
            learnings: [
                'Real-time inventory sync is critical—learned to handle race conditions properly',
                'Checkout flow optimization has huge impact—reduced to 3 steps increased conversions by 25%',
                'Error messaging matters—clear payment error messages reduced support tickets by 60%'
            ]
        },
        demoUrl: 'https://demo-ecommerce.example.com',
        repoUrl: 'https://github.com/yourusername/ecommerce-platform',
        isPrivate: false,
        technologiesByCategory: [
            {
                category: 'Frontend',
                items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
            },
            {
                category: 'Backend',
                items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma']
            },
            {
                category: 'Tools & Services',
                items: ['Stripe', 'Vercel', 'GitHub Actions', 'Sentry']
            }
        ]
    },
]
