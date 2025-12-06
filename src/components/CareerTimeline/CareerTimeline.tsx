import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader/SectionHeader'
import { ChevronDown } from '@/assets/icons'
import './CareerTimeline.scss'

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
            'This was the all-in sprint where I learned full-stack dev from scratch. Long days, lots of projects, hundreds of "why is this broken" moments. It gave me the foundation for everything I do now, from UI architecture to thinking about user experience.'
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
        learning: 'Learned to listen to non-technical teammates',
        description:
            'Worked on internal tools used by more than a thousand people, so if I broke something, everyone knew instantly. Built pages, fixed performance issues, cleaned up old code, and made workflow apps less painful for employees. This job taught me a lot about listening—someone would say "this workflow makes no sense," and I\'d dig in, make it cleaner, and ship something that made their daily life easier.'
    },
    {
        year: '2021',
        role: 'Front End Developer',
        company: 'Prefect',
        learning: 'Learned to translate complex ideas into UIs that don\'t scare people',
        description:
            'Built actual product: reusable Vue 3 components, pages, workflows, and helped shape an in-house design system that people actually used. A lot of my role was translating "complex data orchestration idea" into "a UI that doesn\'t scare users away." I teamed up constantly with designers and PMs, wrote onboarding docs that made new hires sigh with relief, and somehow became the person who could deliver work twice as fast because I asked good questions up front.'
    },
    {
        year: '2023',
        role: 'Front End Developer',
        company: 'SDG',
        learning: 'Learned to find bugs three layers deep that no one else could track down',
        description:
            'Basically lived in the world of Shopify, Vue, and "why is this Liquid code doing that?" Spent most days building components, fixing weird production bugs, and turning Figma files into real, responsive UI without making the designers cry. I was also the person who would say "hold on, something feels off," then dig three layers deep through Liquid → JS → SCSS to find the real root of the problem.',
        isCurrent: false
    },
    {
        year: '2025',
        role: 'Web Team Volunteer',
        company: 'Nova Ukraine',
        learning: 'Learning to apply my skills to support meaningful causes',
        description:
            'Diving into the world of non-profits, building and maintaining web applications that help streamline operations and enhance user engagement. It\'s been a rewarding experience to apply my front-end skills to support such a meaningful cause, ensuring that our digital presence effectively communicates our mission and facilitates donations and volunteer efforts.',
        isCurrent: true
    }
]

export default function CareerTimeline() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const toggleExpanded = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index)
    }

    const handleKeyPress = (e: React.KeyboardEvent, index: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            toggleExpanded(index)
        }
    }

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
                            <div
                                key={index}
                                className={`career-timeline__node ${expandedIndex === index ? 'career-timeline__node--expanded' : ''
                                    } ${node.isCurrent ? 'career-timeline__node--current' : ''}`}
                            >
                                <button
                                    className="career-timeline__node-button"
                                    onClick={() => toggleExpanded(index)}
                                    onKeyDown={e => handleKeyPress(e, index)}
                                    aria-expanded={expandedIndex === index}
                                    aria-controls={`timeline-content-${index}`}
                                    type="button"
                                >
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
                                </button>

                                <div
                                    id={`timeline-content-${index}`}
                                    className="career-timeline__drawer"
                                    aria-hidden={expandedIndex !== index}
                                >
                                    <p className="career-timeline__description">
                                        {node.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
