import { useParams, Navigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { featuredProjects } from '@/data/projects'
import TechStack from '@/components/TechStack/TechStack'
import { ArrowLeft, ArrowRight } from '@/assets/icons'
import SEO from '@/components/SEO/SEO'
import './CaseStudy.scss'

export default function CaseStudy() {
    const { slug } = useParams<{ slug: string }>()
    const project = featuredProjects.find(p => p.slug === slug)
    const [progress, setProgress] = useState(0)
    const [showBackToTop, setShowBackToTop] = useState(false)

    // Get other projects for navigation
    const otherProjects = featuredProjects.filter(p => p.slug !== slug)

    // Scroll to top when navigating between case studies
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
            setProgress(scrollPercent)
            setShowBackToTop(scrollTop > 400)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!project) {
        return <Navigate to="/" replace />
    }

    return (
        <article className="case-study">
            <SEO
                title={`${project.title} Case Study`}
                description={project.card.summary}
                image={`https://marichka.dev${project.image}`}
                type="article"
            />
            <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
            <header className="case-study__hero" data-nav-section="case-study-hero">
                <div className="case-study__hero-content">
                    <Link to="/" className="case-study__back-link">
                        <ArrowLeft />
                        <span>Back to Home</span>
                    </Link>

                    <div className="case-study__hero-badges">
                        <span className="case-study__badge case-study__badge--role">
                            <span className="case-study__badge-label">Role</span>
                            <span className="case-study__badge-value">{project.role}</span>
                        </span>
                        <span className="case-study__badge case-study__badge--timeline">
                            <span className="case-study__badge-label">Timeline</span>
                            <span className="case-study__badge-value">{project.timeline}</span>
                        </span>
                    </div>

                    <h1 className="case-study__title">{project.title}</h1>
                    <p className="case-study__tagline">{project.tagline}</p>

                    <TechStack
                        technologies={project.technologies}
                        maxVisible={project.technologies.length}
                        className="case-study__tech"
                    />

                    {project.url && (
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-study__live-link"
                        >
                            <span>View Live Site</span>
                            <ArrowRight />
                        </a>
                    )}
                </div>

                <div className="case-study__hero-image">
                    <img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="case-study__hero-img"
                        loading="eager"
                    />
                </div>
            </header>

            <section className="case-study__section" data-nav-section="case-study-overview">
                <div className="case-study__section-content">
                    <header className="section-header">
                        <span className="section-label">OVERVIEW</span>
                        <h2 className="section-title">Project Summary</h2>
                    </header>
                    <p className="case-study__summary">{project.card.summary}</p>
                </div>
            </section>

            <section className="case-study__section case-study__section--alt" data-nav-section="case-study-problem">
                <div className="case-study__section-content">
                    <header className="section-header">
                        <span className="section-label">THE PROBLEM</span>
                        <h2 className="section-title">Challenges We Faced</h2>
                    </header>
                    <ul className="case-study__list">
                        {project.full.problem.map((item, i) => (
                            <li key={i} className="case-study__list-item">
                                <span className="case-study__bullet">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="case-study__section" data-nav-section="case-study-challenges">
                <div className="case-study__section-content">
                    <header className="section-header">
                        <span className="section-label">TECHNICAL CHALLENGES</span>
                        <h2 className="section-title">Complex Problems Solved</h2>
                    </header>
                    <ul className="case-study__list">
                        {project.full.challenges.map((item, i) => (
                            <li key={i} className="case-study__list-item">
                                <span className="case-study__bullet">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {project.full.whatMadeThisHard && project.full.whatMadeThisHard.length > 0 && (
                <section className="case-study__section case-study__section--alt">
                    <div className="case-study__section-content">
                        <header className="section-header">
                            <span className="section-label">COMPLEXITY</span>
                            <h2 className="section-title">What Made This Hard</h2>
                        </header>
                        <ul className="case-study__list">
                            {project.full.whatMadeThisHard.map((item, i) => (
                                <li key={i} className="case-study__list-item">
                                    <span className="case-study__bullet">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <section className="case-study__section" data-nav-section="case-study-solution">
                <div className="case-study__section-content">
                    <header className="section-header">
                        <span className="section-label">THE SOLUTION</span>
                        <h2 className="section-title">What I Built</h2>
                    </header>
                    <ul className="case-study__list">
                        {project.full.whatIBuilt.map((item, i) => (
                            <li key={i} className="case-study__list-item">
                                <span className="case-study__bullet">→</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {project.full.visibleWork && (
                <section className="case-study__section case-study__section--screenshots" data-nav-section="case-study-results">
                    <div className="case-study__section-content">
                        <header className="section-header">
                            <span className="section-label">RESULTS</span>
                            <h2 className="section-title">See It In Action</h2>
                        </header>
                        <div className="case-study__screenshots">
                            {(() => {
                                const visibleWork = project.full.visibleWork
                                const isLinkTuple = (item: string | [string, string]): item is [string, string] =>
                                    Array.isArray(item)
                                const isLinkTupleArray = (
                                    items: string[] | [string, string][]
                                ): items is [string, string][] => items.every(isLinkTuple)

                                // Helper to create browser mockup frame
                                const BrowserMockup = ({ src, alt, url }: { src: string; alt: string; url?: string }) => (
                                    <div className="case-study__browser-mockup">
                                        <div className="case-study__browser-header">
                                            <div className="case-study__browser-dots">
                                                <span className="case-study__browser-dot" />
                                                <span className="case-study__browser-dot" />
                                                <span className="case-study__browser-dot" />
                                            </div>
                                            <div className="case-study__browser-address">
                                                {url || project.url || 'localhost:3000'}
                                            </div>
                                        </div>
                                        <div className="case-study__browser-content">
                                            <img
                                                src={src}
                                                alt={alt}
                                                className="case-study__screenshot"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                )

                                if (!Array.isArray(visibleWork)) {
                                    return (
                                        <BrowserMockup
                                            src={visibleWork}
                                            alt={`${project.title} screenshot`}
                                        />
                                    )
                                }

                                if (isLinkTupleArray(visibleWork)) {
                                    return visibleWork.map(([label, link], i) => (
                                        <a
                                            key={`${project.id}-visible-link-${i}`}
                                            href={link}
                                            className="case-study__work-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span>{label}</span>
                                            <ArrowRight />
                                        </a>
                                    ))
                                }

                                return visibleWork.map((screenshot, i) => (
                                    <BrowserMockup
                                        key={i}
                                        src={screenshot}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                    />
                                ))
                            })()}
                        </div>
                    </div>
                </section>
            )}

            {project.full.whatIdDoDifferently && project.full.whatIdDoDifferently.length > 0 && (
                <section className="case-study__section case-study__section--alt">
                    <div className="case-study__section-content">
                        <header className="section-header">
                            <span className="section-label">LEARNINGS</span>
                            <h2 className="section-title">What I'd Do Differently</h2>
                        </header>
                        <ul className="case-study__list">
                            {project.full.whatIdDoDifferently.map((item, i) => (
                                <li key={i} className="case-study__list-item">
                                    <span className="case-study__bullet">→</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}

            <footer className="case-study__footer">
                <div className="case-study__cta">
                    <div className="case-study__cta-content">
                        <h2 className="case-study__cta-title">Like what you see?</h2>
                        <p className="case-study__cta-description">
                            Let's work together on your next project
                        </p>
                        <div className="case-study__cta-buttons">
                            <a href="mailto:marichka.offen@gmail.com" className="btn btn--holographic">
                                Get in Touch
                            </a>
                            <Link to="/#work" className="btn btn--secondary">
                                View All Projects
                            </Link>
                        </div>
                    </div>
                </div>

                {otherProjects.length > 0 && (
                    <div className="case-study__next">
                        <span className="case-study__next-label">More Projects</span>
                        <div className="case-study__next-grid">
                            {otherProjects.map((otherProject) => (
                                <Link
                                    key={otherProject.id}
                                    to={`/case-studies/${otherProject.slug}`}
                                    className="case-study__next-card"
                                >
                                    <div className="case-study__next-image">
                                        <img
                                            src={otherProject.image}
                                            alt={otherProject.imageAlt || otherProject.title}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="case-study__next-content">
                                        <h3 className="case-study__next-title">{otherProject.title}</h3>
                                        <p className="case-study__next-tagline">{otherProject.tagline}</p>
                                        <span className="case-study__next-link">
                                            View Case Study
                                            <ArrowRight />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </footer>

            <button
                className={`back-to-top${showBackToTop ? ' back-to-top--visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to top"
                type="button"
            >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </article>
    )
}
