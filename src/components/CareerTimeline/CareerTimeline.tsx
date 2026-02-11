import SectionHeader from '@/components/SectionHeader/SectionHeader'
import { ChevronDown } from '@/assets/icons'
import './CareerTimeline.scss'

/**
 * CareerTimeline - Uses native <details> element instead of React state.
 *
 * REACT CONCEPT: When NOT to use useState
 *
 * The previous implementation used useState to track which item was expanded.
 * But the browser already provides this behavior for free with <details>!
 *
 * Benefits of native <details>:
 * 1. Built-in keyboard support (Enter/Space to toggle)
 * 2. Screen readers announce "collapsed/expanded" automatically
 * 3. Works even if JavaScript fails to load
 * 4. Less code = smaller bundle = faster site
 * 5. Browser handles the state internally
 *
 * Rule of thumb: If the browser can do it natively, let it.
 * React state is for things the browser can't do on its own.
 */

interface TimelineNode {
    year: string
    role: string
    company: string
    learning: string
    description: string
    isCurrent?: boolean
}

const timelineData: TimelineNode[] = [
    {
        year: '2018',
        role: 'Web Padawan',
        company: 'General Assembly',
        learning: 'Learned to think like an engineer, not just write code',
        description:
            '12 weeks of pure chaos and caffeine. Learned that console.log is your best friend and that imposter syndrome never really goes away—you just get better at ignoring it.'
    },
    {
        year: '2019',
        role: 'Freelance Nomad',
        company: 'Freelance',
        learning: 'Learned to do everything and talk to humans',
        description:
            'Freelancing was my crash course in "do everything." I coded small sites, talked directly with clients, translated their aesthetic preferences into actual UI, and wrote docs so they could maintain things after I handed it off. It pushed me to develop my own taste, my own workflow, and honestly a lot of my independence as an engineer.'
    },
    {
        year: '2020',
        role: 'Software Engineer',
        company: 'Carahsoft',
        learning: 'Government tech, surprisingly cool',
        description:
            'Built internal tools and learned that enterprise software doesn\'t have to be ugly. Also discovered that government clients really, really care about Section 508 compliance.'
    },
    {
        year: '2021',
        role: 'Front End Engineer',
        company: 'Prefect',
        learning: 'Making data pipelines pretty',
        description:
            'Built a design system from scratch, wrangled D3.js into making scatter plots that didn\'t look like sadness, and learned that data engineers really care about their DAGs.'
    },
    {
        year: '2023',
        role: 'Front End Engineer',
        company: 'SDG',
        learning: 'Shipping pixels for premium brands',
        description:
            'Built storefronts for brands like Rare Beauty, Stumptown, and Barnes & Noble. Became the go-to person for "make it accessible" and "why is this slow." Learned that Liquid is weird but lovable.',
        isCurrent: false
    },
    {
        year: '2025',
        role: 'Web Team Volunteer',
        company: 'Nova Ukraine',
        learning: 'Because some things are more important than a paycheck',
        description:
            'Contributing code to help humanitarian efforts. Working on frontend improvements and helping connect donors with those in need.',
        isCurrent: true
    },
    {
        year: '2026',
        role: 'Freelance Shopify Developer',
        company: 'Self-Employed',
        learning: 'Contract work that pays the bills',
        description:
            'Helping a client fix bugs, audit and improve accessibility and performance, update legacy sections to align with evolving needs, build new features, and collaborate with their designer on partial redesigns. Turns out all those years at agencies prepared me well for flying solo.',
        isCurrent: true
    }
]

export default function CareerTimeline() {
    return (
        <section id="career-timeline" className="career-timeline" data-nav-section="career-timeline" aria-labelledby="timeline-heading">
            <div className="career-timeline__container">
                <SectionHeader
                    id="timeline-heading"
                    title="Career Journey"
                    subtitle="What a ride it's been!"
                    comment="How I got here"
                    size="major"
                />

                <div className="career-timeline__scroll-container">
                    <div className="career-timeline__track">
                        <div className="career-timeline__line" aria-hidden="true" />

                        {timelineData.map((node, index) => (
                            <details
                                key={index}
                                className={`career-timeline__node ${node.isCurrent ? 'career-timeline__node--current' : ''}`}
                                open={node.isCurrent}
                            >
                                <summary className="career-timeline__summary">
                                    <div className="career-timeline__marker" aria-hidden="true">
                                        {node.isCurrent && (
                                            <span className="career-timeline__live-dot" />
                                        )}
                                    </div>

                                    <div className="career-timeline__node-content">
                                        <div className="career-timeline__year">{node.year}</div>
                                        <h3 className="career-timeline__role">
                                            {node.role}
                                            {node.isCurrent && (
                                                <span className="career-timeline__badge">Now</span>
                                            )}
                                        </h3>
                                        <div className="career-timeline__company">{node.company}</div>
                                        <div className="career-timeline__learning">{node.learning}</div>
                                    </div>

                                    <div className="career-timeline__expand-icon" aria-hidden="true">
                                        <ChevronDown />
                                    </div>
                                </summary>

                                <div className="career-timeline__drawer">
                                    <p className="career-timeline__description">
                                        {node.description}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
