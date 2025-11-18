import { Link, useParams } from 'react-router-dom'
import { projectData } from '@/data/projects'
import Tag from '@/components/Tag/Tag'
import './Project.scss'
import WorkSection from '@/sections/WorkSection/WorkSection'

export default function Project() {
    const { slug } = useParams<{ slug?: string }>()

    const project = projectData.find(({ slug: projectSlug }) => projectSlug === slug)

    if (!project) {
        return (
            <section className="project project--not-found">
                <div className="project__inner">
                    <p className="project__eyebrow">Project</p>
                    <h1 className="project__title">This project could not be found.</h1>
                    <Link className="project__back-link" to="/#projects">
                        Back to all projects
                    </Link>
                </div>
            </section>
        )
    }

    const {
        title,
        tags,
        color,
        icon,
        tagline,
        aboutClient,
        workSummary,
        role,
        partner,
        siteUrl,
        ctaLabel,
    } = project

    const visitLabel = ctaLabel ?? 'Visit the website'

    const snapshotPlaceholders = Array.from({ length: 3 }, (_, index) => index)

    return (
        <section className="project">
            <div className="project__inner">
                <Link className="project__back-link" to="/#projects">
                    ← Back to all projects
                </Link>
                <div className="project__hero">
                    <i className={`icon ${icon}`} aria-hidden="true" />
                </div>
                <header className="project__header">
                    <p className="project__eyebrow">Project</p>
                    <h1 className="project__title">{title}</h1>
                    <p className="project__tagline">{tagline}</p>
                </header>
                <div className="project__layout">
                    <div className="project__overview">
                        <p className="project__section-label">Project overview</p>
                        <div className="project__block">
                            <h2>About the client</h2>
                            <p>{aboutClient}</p>
                        </div>
                        <div className="project__block">
                            <h2>What we did</h2>
                            {workSummary.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <aside className="project__details">
                        <div className="project__details-card">
                            <p className="project__details-label">My role</p>
                            <p className="project__details-value">{role}</p>
                        </div>
                        {partner && (
                            <div className="project__details-card">
                                <p className="project__details-label">Done with</p>
                                <p className="project__details-value">{partner}</p>
                            </div>
                        )}
                        <div className="project__details-card">
                            <p className="project__details-label">Focus</p>
                            <ul className="project__details-tags">
                                {tags.map((tag) => (
                                    <li key={tag}>
                                        <Tag>{tag}</Tag>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {siteUrl && (
                            <a
                                className="project__cta"
                                href={siteUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {visitLabel}  <sup>↗</sup>
                            </a>
                        )}
                    </aside>
                </div>
                <div className="project__screenshots">
                    <p className="project__section-label">Snapshots</p>
                    <div className="project__screenshots-grid">
                        {snapshotPlaceholders.map((placeholder) => (
                            <div key={placeholder} className="project__screenshot">
                                <span>Screenshot coming soon</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <WorkSection />
        </section>
    )
}
