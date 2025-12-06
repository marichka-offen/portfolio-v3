import { useParams, Navigate, Link } from 'react-router-dom'
import { featuredProjects } from '@/data/projects'
import TechStack from '@/components/TechStack/TechStack'
import { ArrowLeft, ArrowRight } from '@/assets/icons'
import './CaseStudy.scss'

export default function CaseStudy() {
    const { slug } = useParams<{ slug: string }>()
    const project = featuredProjects.find(p => p.slug === slug)

    if (!project) {
        return <Navigate to="/" replace />
    }

    return (
        <article className="case-study">
            <header className="case-study__hero" data-nav-section="case-study-hero">
                <div className="case-study__hero-content">
                    <Link to="/" className="case-study__back-link">
                        <ArrowLeft />
                        <span>Back to Home</span>
                    </Link>

                    <div className="case-study__hero-meta">
                        <span className="case-study__role">{project.role}</span>
                        <span className="case-study__timeline">{project.timeline}</span>
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
                    />
                </div>
            </header>

            <section className="case-study__section" data-nav-section="case-study-overview">
                <div className="case-study__section-content">
                    <h2 className="case-study__section-title">
                        <span className="case-study__comment">// Overview</span>
                    </h2>
                    <p className="case-study__summary">{project.card.summary}</p>
                </div>
            </section>

            <section className="case-study__section case-study__section--alt" data-nav-section="case-study-problem">
                <div className="case-study__section-content">
                    <h2 className="case-study__section-title">
                        <span className="case-study__comment">// The Problem</span>
                    </h2>
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
                    <h2 className="case-study__section-title">
                        <span className="case-study__comment">// Challenges</span>
                    </h2>
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
                        <h2 className="case-study__section-title">
                            <span className="case-study__comment">// What Made This Hard</span>
                        </h2>
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
                    <h2 className="case-study__section-title">
                        <span className="case-study__comment">// What I Built</span>
                    </h2>
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
                        <h2 className="case-study__section-title">
                            <span className="case-study__comment">// Visible Work</span>
                        </h2>
                        <div className="case-study__screenshots">
                            {(() => {
                                const visibleWork = project.full.visibleWork
                                const isLinkTuple = (item: string | [string, string]): item is [string, string] =>
                                    Array.isArray(item)
                                const isLinkTupleArray = (
                                    items: string[] | [string, string][]
                                ): items is [string, string][] => items.every(isLinkTuple)

                                if (!Array.isArray(visibleWork)) {
                                    return (
                                        <img
                                            src={visibleWork}
                                            alt={`${project.title} screenshot`}
                                            className="case-study__screenshot"
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
                                    <img
                                        key={i}
                                        src={screenshot}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        className="case-study__screenshot"
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
                        <h2 className="case-study__section-title">
                            <span className="case-study__comment">// What I'd Do Differently</span>
                        </h2>
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
                <Link to="/" className="case-study__footer-link">
                    <ArrowLeft />
                    <span>Back to All Projects</span>
                </Link>
            </footer>
        </article>
    )
}
